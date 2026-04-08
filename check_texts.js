/**
 * 课文朗读内容全面检查脚本
 * 检查各版本各年级各册的课文内容完整性
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

// 检查课文内容
function checkTexts(texts, unitId, versionName, gradeId) {
  const issues = [];
  
  if (!texts || !Array.isArray(texts) || texts.length === 0) {
    issues.push({
      type: 'missing',
      message: `[${versionName} ${gradeId} ${unitId}] 缺少课文内容`
    });
    return issues;
  }
  
  texts.forEach((text, idx) => {
    // 检查课文基本字段
    if (!text.lesson || typeof text.lesson !== 'string') {
      issues.push({
        type: 'incomplete',
        message: `[${versionName} ${gradeId} ${unitId}] 课文[${idx}] 缺少 lesson 字段`
      });
    }
    
    if (!text.title || typeof text.title !== 'string') {
      issues.push({
        type: 'incomplete',
        message: `[${versionName} ${gradeId} ${unitId}] 课文[${idx}] 缺少 title 字段`
      });
    }
    
    // 检查课文内容
    if (!text.content || !Array.isArray(text.content) || text.content.length === 0) {
      issues.push({
        type: 'missing_content',
        message: `[${versionName} ${gradeId} ${unitId}] 课文[${idx}] 缺少 content 内容`
      });
    } else {
      // 检查每句对话
      text.content.forEach((item, itemIdx) => {
        if (!item.en || typeof item.en !== 'string' || item.en.trim() === '') {
          issues.push({
            type: 'incomplete',
            message: `[${versionName} ${gradeId} ${unitId}] 课文[${idx}] 内容[${itemIdx}] 缺少英文文本`
          });
        }
        if (!item.cn || typeof item.cn !== 'string' || item.cn.trim() === '') {
          issues.push({
            type: 'incomplete',
            message: `[${versionName} ${gradeId} ${unitId}] 课文[${idx}] 内容[${itemIdx}] 缺少中文翻译`
          });
        }
      });
    }
  });
  
  return issues;
}

// 检查单元
function checkUnit(unit, gradeId, versionName) {
  const issues = [];
  const stats = { texts: 0, sentences: 0 };
  
  if (!unit.texts || !Array.isArray(unit.texts)) {
    issues.push({
      type: 'missing',
      message: `[${versionName} ${gradeId} ${unit.unitId}] 缺少 texts 字段`
    });
  } else {
    stats.texts = unit.texts.length;
    unit.texts.forEach(text => {
      if (text.content && Array.isArray(text.content)) {
        stats.sentences += text.content.length;
      }
    });
    
    const textIssues = checkTexts(unit.texts, unit.unitId, versionName, gradeId);
    issues.push(...textIssues);
  }
  
  return { issues, stats };
}

// 检查年级
function checkGrade(grade, gradeId, versionName) {
  const issues = [];
  const stats = { units: 0, texts: 0, sentences: 0 };
  
  if (!grade.units || !Array.isArray(grade.units)) {
    issues.push({
      type: 'missing',
      message: `[${versionName} ${gradeId}] 缺少 units 字段`
    });
    return { issues, stats };
  }
  
  stats.units = grade.units.length;
  
  grade.units.forEach(unit => {
    const result = checkUnit(unit, gradeId, versionName);
    issues.push(...result.issues);
    stats.texts += result.stats.texts;
    stats.sentences += result.stats.sentences;
  });
  
  return { issues, stats };
}

// 检查版本
function checkVersion(data, versionFile) {
  const issues = [];
  const stats = {
    versionName: data.versionName || versionFile,
    grades: 0,
    units: 0,
    texts: 0,
    sentences: 0,
    gradeDetails: []
  };
  
  log(`\n${'='.repeat(80)}`, 'cyan');
  log(`检查版本: ${data.versionName || versionFile}`, 'cyan');
  log(`${'='.repeat(80)}`, 'cyan');
  
  if (!data.grades || typeof data.grades !== 'object') {
    issues.push({
      type: 'missing',
      message: '缺少 grades 字段或格式错误'
    });
    return { issues, stats };
  }
  
  const gradeKeys = Object.keys(data.grades).sort((a, b) => {
    const numA = parseInt(a.split('-')[0]);
    const numB = parseInt(b.split('-')[0]);
    return numA - numB;
  });
  
  log(`包含学期: ${gradeKeys.join(', ')}`, 'blue');
  
  gradeKeys.forEach(gradeKey => {
    const grade = data.grades[gradeKey];
    const result = checkGrade(grade, gradeKey, data.versionName);
    
    issues.push(...result.issues);
    stats.grades++;
    stats.units += result.stats.units;
    stats.texts += result.stats.texts;
    stats.sentences += result.stats.sentences;
    
    stats.gradeDetails.push({
      grade: gradeKey,
      semester: grade.semester,
      units: result.stats.units,
      texts: result.stats.texts,
      sentences: result.stats.sentences,
      issues: result.issues.length
    });
  });
  
  return { issues, stats };
}

// 主函数
function main() {
  log('\n' + '='.repeat(80), 'cyan');
  log('小学英语同步学习平台 - 课文朗读内容全面检查', 'cyan');
  log('='.repeat(80), 'cyan');
  
  const versionsDir = path.join(__dirname, 'versions');
  const versionFiles = ['pep.js', 'waiyan.js', 'general.js'];
  
  const allIssues = [];
  const allStats = [];
  
  versionFiles.forEach(file => {
    const filePath = path.join(versionsDir, file);
    
    if (!fs.existsSync(filePath)) {
      log(`\n❌ 文件不存在: ${file}`, 'red');
      allIssues.push({ file, issues: [{ type: 'missing', message: `文件不存在: ${filePath}` }] });
      return;
    }
    
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const match = content.match(/const\s+\w+Data\s*=\s*(\{[\s\S]*\});?\s*$/);
      if (!match) {
        log(`\n❌ 无法解析文件: ${file}`, 'red');
        allIssues.push({ file, issues: [{ type: 'parse', message: '无法解析文件格式' }] });
        return;
      }
      
      const data = eval(`(${match[1]})`);
      const result = checkVersion(data, file);
      
      allIssues.push({ file, issues: result.issues });
      allStats.push(result.stats);
      
      // 输出统计
      log(`\n📊 课文统计:`, 'yellow');
      result.stats.gradeDetails.forEach(detail => {
        const status = detail.issues > 0 ? '❌' : '✅';
        log(`  ${status} ${detail.grade} (${detail.semester}): ${detail.units}单元, ${detail.texts}课文, ${detail.sentences}句对话`, 
          detail.issues > 0 ? 'red' : 'green');
      });
      log(`\n  总计: ${result.stats.grades}学期, ${result.stats.units}单元, ${result.stats.texts}课文, ${result.stats.sentences}句对话`, 'green');
      
    } catch (err) {
      log(`\n❌ 解析错误: ${file} - ${err.message}`, 'red');
      allIssues.push({ file, issues: [{ type: 'parse', message: `解析错误: ${err.message}` }] });
    }
  });
  
  // 输出问题汇总
  log('\n' + '='.repeat(80), 'cyan');
  log('问题汇总', 'cyan');
  log('='.repeat(80), 'cyan');
  
  let totalIssues = 0;
  allIssues.forEach(({ file, issues }) => {
    if (issues.length === 0) {
      log(`\n✅ ${file}: 课文内容完整`, 'green');
    } else {
      log(`\n❌ ${file}: 发现 ${issues.length} 个问题`, 'red');
      
      // 按类型分组
      const byType = {};
      issues.forEach(issue => {
        byType[issue.type] = byType[issue.type] || [];
        byType[issue.type].push(issue.message);
      });
      
      Object.keys(byType).forEach(type => {
        log(`  [${type}] ${byType[type].length} 个`, 'yellow');
        byType[type].slice(0, 5).forEach(msg => log(`    - ${msg}`, 'red'));
        if (byType[type].length > 5) {
          log(`    ... 还有 ${byType[type].length - 5} 个`, 'yellow');
        }
      });
      
      totalIssues += issues.length;
    }
  });
  
  // 总统计
  log('\n' + '='.repeat(80), 'cyan');
  log('所有版本课文统计', 'cyan');
  log('='.repeat(80), 'cyan');
  
  let totalGrades = 0, totalUnits = 0, totalTexts = 0, totalSentences = 0;
  allStats.forEach(stats => {
    totalGrades += stats.grades;
    totalUnits += stats.units;
    totalTexts += stats.texts;
    totalSentences += stats.sentences;
    log(`${stats.versionName}: ${stats.grades}学期, ${stats.units}单元, ${stats.texts}课文, ${stats.sentences}句对话`, 'blue');
  });
  
  log(`\n总计: ${totalGrades}学期, ${totalUnits}单元, ${totalTexts}课文, ${totalSentences}句对话`, 'green');
  
  // 最终结论
  log('\n' + '='.repeat(80), 'cyan');
  if (totalIssues === 0) {
    log('🎉 所有版本课文内容检查通过！', 'green');
    log('='.repeat(80), 'cyan');
    process.exit(0);
  } else {
    log(`⚠️ 共发现 ${totalIssues} 个问题需要修复`, 'red');
    log('='.repeat(80), 'cyan');
    process.exit(1);
  }
}

main();
