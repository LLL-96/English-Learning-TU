/**
 * 数据完整性验证脚本
 * 验证所有版本的单词库数据完整性
 */

const fs = require('fs');
const path = require('path');

// 颜色输出
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// 验证单词对象结构
function validateWord(word, unitId, versionName) {
  const errors = [];
  
  if (!word.word || typeof word.word !== 'string') {
    errors.push(`[${versionName} ${unitId}] 单词缺少 word 字段`);
  }
  if (!word.phonetic || typeof word.phonetic !== 'string') {
    errors.push(`[${versionName} ${unitId}] ${word.word || '未知'} 缺少 phonetic 字段`);
  }
  if (!word.meaning || typeof word.meaning !== 'string') {
    errors.push(`[${versionName} ${unitId}] ${word.word || '未知'} 缺少 meaning 字段`);
  }
  if (!word.example || typeof word.example !== 'string') {
    errors.push(`[${versionName} ${unitId}] ${word.word || '未知'} 缺少 example 字段`);
  }
  if (!word.exampleCn || typeof word.exampleCn !== 'string') {
    errors.push(`[${versionName} ${unitId}] ${word.word || '未知'} 缺少 exampleCn 字段`);
  }
  if (!word.tags || !Array.isArray(word.tags)) {
    errors.push(`[${versionName} ${unitId}] ${word.word || '未知'} 缺少 tags 字段或格式错误`);
  }
  
  return errors;
}

// 验证课文内容结构
function validateText(text, unitId, versionName) {
  const errors = [];
  
  if (!text.lesson || typeof text.lesson !== 'string') {
    errors.push(`[${versionName} ${unitId}] 课文缺少 lesson 字段`);
  }
  if (!text.title || typeof text.title !== 'string') {
    errors.push(`[${versionName} ${unitId}] 课文缺少 title 字段`);
  }
  if (!text.content || !Array.isArray(text.content)) {
    errors.push(`[${versionName} ${unitId}] 课文缺少 content 字段或格式错误`);
  } else {
    text.content.forEach((item, idx) => {
      if (!item.en || typeof item.en !== 'string') {
        errors.push(`[${versionName} ${unitId}] 课文内容[${idx}] 缺少 en 字段`);
      }
      if (!item.cn || typeof item.cn !== 'string') {
        errors.push(`[${versionName} ${unitId}] 课文内容[${idx}] 缺少 cn 字段`);
      }
    });
  }
  
  return errors;
}

// 验证单元结构
function validateUnit(unit, gradeId, versionName) {
  const errors = [];
  const stats = { words: 0, texts: 0 };
  
  if (!unit.unitId || typeof unit.unitId !== 'string') {
    errors.push(`[${versionName} ${gradeId}] 单元缺少 unitId 字段`);
  }
  if (!unit.unitName || typeof unit.unitName !== 'string') {
    errors.push(`[${versionName} ${gradeId}] 单元缺少 unitName 字段`);
  }
  
  // 验证单词列表
  if (!unit.words || !Array.isArray(unit.words)) {
    errors.push(`[${versionName} ${gradeId} ${unit.unitId || ''}] 缺少 words 字段或格式错误`);
  } else {
    stats.words = unit.words.length;
    unit.words.forEach(word => {
      errors.push(...validateWord(word, `${gradeId} ${unit.unitId}`, versionName));
    });
  }
  
  // 验证课文列表
  if (!unit.texts || !Array.isArray(unit.texts)) {
    errors.push(`[${versionName} ${gradeId} ${unit.unitId || ''}] 缺少 texts 字段或格式错误`);
  } else {
    stats.texts = unit.texts.length;
    unit.texts.forEach(text => {
      errors.push(...validateText(text, `${gradeId} ${unit.unitId}`, versionName));
    });
  }
  
  return { errors, stats };
}

// 验证年级结构
function validateGrade(grade, gradeId, versionName, expectedSemester) {
  const errors = [];
  const stats = { units: 0, words: 0, texts: 0 };
  
  if (!grade.semester || typeof grade.semester !== 'string') {
    errors.push(`[${versionName} ${gradeId}] 缺少 semester 字段`);
  } else if (expectedSemester && grade.semester !== expectedSemester) {
    errors.push(`[${versionName} ${gradeId}] semester 应为 "${expectedSemester}"，实际为 "${grade.semester}"`);
  }
  
  if (!grade.units || !Array.isArray(grade.units)) {
    errors.push(`[${versionName} ${gradeId}] 缺少 units 字段或格式错误`);
  } else {
    stats.units = grade.units.length;
    grade.units.forEach(unit => {
      const result = validateUnit(unit, gradeId, versionName);
      errors.push(...result.errors);
      stats.words += result.stats.words;
      stats.texts += result.stats.texts;
    });
  }
  
  return { errors, stats };
}

// 验证版本数据
function validateVersion(data, versionFile) {
  const errors = [];
  const stats = {
    versionName: data.versionName || versionFile,
    grades: 0,
    units: 0,
    words: 0,
    texts: 0,
    gradeDetails: []
  };
  
  log(`\n${'='.repeat(60)}`, 'cyan');
  log(`验证版本: ${data.versionName || versionFile}`, 'cyan');
  log(`${'='.repeat(60)}`, 'cyan');
  
  // 验证基本信息
  if (!data.versionId) errors.push('缺少 versionId 字段');
  if (!data.versionName) errors.push('缺少 versionName 字段');
  if (!data.grades || typeof data.grades !== 'object') {
    errors.push('缺少 grades 字段或格式错误');
    return { errors, stats };
  }
  
  // 确定年级范围
  const startGrade = data.startGrade || 1;
  const gradeKeys = Object.keys(data.grades).sort((a, b) => {
    // 处理 "5-2" 这样的下册标识
    const numA = parseInt(a.split('-')[0]);
    const numB = parseInt(b.split('-')[0]);
    return numA - numB;
  });
  
  log(`年级范围: ${startGrade}-6年级`, 'blue');
  log(`包含学期: ${gradeKeys.join(', ')}`, 'blue');
  
  // 验证每个年级
  gradeKeys.forEach(gradeKey => {
    const grade = data.grades[gradeKey];
    const isSecondSemester = gradeKey.includes('-2');
    const gradeNum = gradeKey.split('-')[0];
    const expectedSemester = isSecondSemester ? '下册' : '上册';
    
    const result = validateGrade(grade, gradeKey, data.versionName, expectedSemester);
    errors.push(...result.errors);
    
    stats.grades++;
    stats.units += result.stats.units;
    stats.words += result.stats.words;
    stats.texts += result.stats.texts;
    
    stats.gradeDetails.push({
      grade: gradeKey,
      semester: grade.semester,
      units: result.stats.units,
      words: result.stats.words,
      texts: result.stats.texts
    });
  });
  
  return { errors, stats };
}

// 主函数
function main() {
  log('\n' + '='.repeat(60), 'cyan');
  log('小学英语同步学习平台 - 数据完整性验证', 'cyan');
  log('='.repeat(60), 'cyan');
  
  const versionsDir = path.join(__dirname, 'versions');
  const versionFiles = ['pep.js', 'waiyan.js', 'general.js'];
  
  const allErrors = [];
  const allStats = [];
  
  versionFiles.forEach(file => {
    const filePath = path.join(versionsDir, file);
    
    if (!fs.existsSync(filePath)) {
      log(`\n❌ 文件不存在: ${file}`, 'red');
      allErrors.push({ file, errors: [`文件不存在: ${filePath}`] });
      return;
    }
    
    try {
      // 读取并解析文件
      const content = fs.readFileSync(filePath, 'utf-8');
      
      // 提取 JSON 数据（假设文件格式为: const xxxData = { ... }）
      const match = content.match(/const\s+\w+Data\s*=\s*(\{[\s\S]*\});?\s*$/);
      if (!match) {
        log(`\n❌ 无法解析文件: ${file}`, 'red');
        allErrors.push({ file, errors: ['无法解析文件格式'] });
        return;
      }
      
      // 使用 eval 解析（仅在受控环境下使用）
      const data = eval(`(${match[1]})`);
      
      // 验证数据
      const result = validateVersion(data, file);
      allErrors.push({ file, errors: result.errors });
      allStats.push(result.stats);
      
      // 输出统计
      log(`\n📊 统计信息:`, 'yellow');
      result.stats.gradeDetails.forEach(detail => {
        log(`  ${detail.grade} (${detail.semester}): ${detail.units}单元, ${detail.words}单词, ${detail.texts}课文`, 'reset');
      });
      log(`\n  总计: ${result.stats.grades}个学期, ${result.stats.units}单元, ${result.stats.words}单词, ${result.stats.texts}课文`, 'green');
      
    } catch (err) {
      log(`\n❌ 解析错误: ${file} - ${err.message}`, 'red');
      allErrors.push({ file, errors: [`解析错误: ${err.message}`] });
    }
  });
  
  // 输出汇总
  log('\n' + '='.repeat(60), 'cyan');
  log('验证结果汇总', 'cyan');
  log('='.repeat(60), 'cyan');
  
  let totalErrors = 0;
  allErrors.forEach(({ file, errors }) => {
    if (errors.length === 0) {
      log(`\n✅ ${file}: 验证通过`, 'green');
    } else {
      log(`\n❌ ${file}: 发现 ${errors.length} 个错误`, 'red');
      errors.forEach(err => log(`   - ${err}`, 'red'));
      totalErrors += errors.length;
    }
  });
  
  // 总统计
  log('\n' + '='.repeat(60), 'cyan');
  log('所有版本总统计', 'cyan');
  log('='.repeat(60), 'cyan');
  
  let totalGrades = 0, totalUnits = 0, totalWords = 0, totalTexts = 0;
  allStats.forEach(stats => {
    totalGrades += stats.grades;
    totalUnits += stats.units;
    totalWords += stats.words;
    totalTexts += stats.texts;
    log(`${stats.versionName}: ${stats.grades}学期, ${stats.units}单元, ${stats.words}单词`, 'blue');
  });
  
  log(`\n总计: ${totalGrades}学期, ${totalUnits}单元, ${totalWords}单词, ${totalTexts}课文`, 'green');
  
  // 最终结论
  log('\n' + '='.repeat(60), 'cyan');
  if (totalErrors === 0) {
    log('🎉 所有版本数据验证通过！', 'green');
    log('='.repeat(60), 'cyan');
    process.exit(0);
  } else {
    log(`⚠️ 共发现 ${totalErrors} 个错误，请修复后重新验证`, 'red');
    log('='.repeat(60), 'cyan');
    process.exit(1);
  }
}

main();
