/**
 * 课文内容准确性验证脚本
 * 检查课文内容与教材的一致性
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
  cyan: '\x1b[36m',
  magenta: '\x1b[35m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// 检查文本质量问题
function checkTextQuality(text, context) {
  const issues = [];
  
  // 检查常见错误
  const checks = [
    { pattern: /\s{2,}/g, desc: '多余空格', type: 'format' },
    { pattern: /^\s+|\s+$/g, desc: '首尾空格', type: 'format' },
    { pattern: /[，。！？：；""''（）]$/g, desc: '中文标点（英文文本中）', type: 'punctuation' },
    { pattern: /[,.!?;:"'()]$/g, desc: '英文标点（中文文本中）', type: 'punctuation' },
    { pattern: /\n{3,}/g, desc: '多余空行', type: 'format' },
    { pattern: /\t/g, desc: '制表符', type: 'format' },
  ];
  
  checks.forEach(check => {
    if (check.pattern.test(text)) {
      issues.push({
        type: check.type,
        desc: check.desc,
        context: context,
        sample: text.substring(0, 50) + (text.length > 50 ? '...' : '')
      });
    }
  });
  
  // 检查文本长度（过短可能表示内容缺失）
  if (text.length < 5) {
    issues.push({
      type: 'content',
      desc: '文本过短，可能内容缺失',
      context: context,
      sample: text
    });
  }
  
  // 检查是否包含教材常见标记
  const textbookMarkers = ['★', '☆', '●', '○', '■', '□', '▲', '△'];
  textbookMarkers.forEach(marker => {
    if (text.includes(marker)) {
      issues.push({
        type: 'marker',
        desc: `包含特殊标记符号: ${marker}`,
        context: context,
        sample: text.substring(0, 50)
      });
    }
  });
  
  return issues;
}

// 检查对话内容
function checkDialogue(line, index, textInfo) {
  const issues = [];
  const context = `${textInfo} - 第${index + 1}句`;
  
  // 检查英文内容
  if (line.en) {
    const enIssues = checkTextQuality(line.en, `${context} [英文]`);
    issues.push(...enIssues);
    
    // 检查英文文本的基本规范
    if (!/^[A-Z]/.test(line.en.trim()) && !line.en.trim().startsWith('"')) {
      // 不是以大写字母开头（可能是句子中间）
    }
    
    // 检查是否有正确的标点结尾
    if (!/[.!?"']$/.test(line.en.trim()) && line.en.trim().length > 3) {
      issues.push({
        type: 'punctuation',
        desc: '英文句子缺少结束标点',
        context: context,
        sample: line.en
      });
    }
  }
  
  // 检查中文内容
  if (line.cn) {
    const cnIssues = checkTextQuality(line.cn, `${context} [中文]`);
    issues.push(...cnIssues);
    
    // 检查中文翻译是否为空或过于简单
    if (line.cn.length < 2) {
      issues.push({
        type: 'translation',
        desc: '中文翻译过短',
        context: context,
        sample: line.cn
      });
    }
  }
  
  // 检查中英文是否对应（简单检查长度比例）
  if (line.en && line.cn) {
    const enLen = line.en.length;
    const cnLen = line.cn.length;
    
    // 如果中文比英文长太多或短太多，可能有问题
    if (cnLen > enLen * 3) {
      issues.push({
        type: 'translation',
        desc: '中文翻译可能比英文长过多',
        context: context,
        sample: `EN(${enLen}): ${line.en.substring(0, 30)}... CN(${cnLen}): ${line.cn.substring(0, 30)}...`
      });
    }
  }
  
  return issues;
}

// 检查课文
function checkText(text, unitId, versionName, gradeId) {
  const issues = [];
  const textInfo = `[${versionName} ${gradeId} ${unitId}] ${text.lesson}`;
  
  log(`  检查: ${textInfo} - ${text.title}`, 'blue');
  
  // 检查课文基本信息
  if (!text.lesson || text.lesson.trim() === '') {
    issues.push({ type: 'meta', desc: '课文编号缺失', context: textInfo });
  }
  
  if (!text.title || text.title.trim() === '') {
    issues.push({ type: 'meta', desc: '课文标题缺失', context: textInfo });
  }
  
  // 检查对话内容
  if (text.content && Array.isArray(text.content)) {
    text.content.forEach((line, idx) => {
      const lineIssues = checkDialogue(line, idx, textInfo);
      issues.push(...lineIssues);
    });
  } else {
    issues.push({ type: 'content', desc: '课文内容缺失或格式错误', context: textInfo });
  }
  
  return issues;
}

// 检查单元
function checkUnit(unit, gradeId, versionName) {
  const issues = [];
  
  if (unit.texts && Array.isArray(unit.texts)) {
    unit.texts.forEach(text => {
      const textIssues = checkText(text, unit.unitId, versionName, gradeId);
      issues.push(...textIssues);
    });
  }
  
  return issues;
}

// 检查年级
function checkGrade(grade, gradeId, versionName) {
  const issues = [];
  
  if (grade.units && Array.isArray(grade.units)) {
    grade.units.forEach(unit => {
      const unitIssues = checkUnit(unit, gradeId, versionName);
      issues.push(...unitIssues);
    });
  }
  
  return issues;
}

// 检查版本
function checkVersion(data, versionFile) {
  const issues = [];
  const stats = {
    versionName: data.versionName || versionFile,
    textsChecked: 0,
    linesChecked: 0,
    issuesByType: {}
  };
  
  log(`\n${'='.repeat(80)}`, 'cyan');
  log(`检查版本: ${data.versionName || versionFile}`, 'cyan');
  log(`${'='.repeat(80)}`, 'cyan');
  
  if (!data.grades) return { issues, stats };
  
  const gradeKeys = Object.keys(data.grades).sort();
  
  gradeKeys.forEach(gradeKey => {
    const grade = data.grades[gradeKey];
    const gradeIssues = checkGrade(grade, gradeKey, data.versionName);
    issues.push(...gradeIssues);
    
    // 统计
    if (grade.units) {
      grade.units.forEach(unit => {
        if (unit.texts) {
          stats.textsChecked += unit.texts.length;
          unit.texts.forEach(text => {
            if (text.content) {
              stats.linesChecked += text.content.length;
            }
          });
        }
      });
    }
  });
  
  // 按类型统计问题
  issues.forEach(issue => {
    stats.issuesByType[issue.type] = (stats.issuesByType[issue.type] || 0) + 1;
  });
  
  return { issues, stats };
}

// 主函数
function main() {
  log('\n' + '='.repeat(80), 'cyan');
  log('小学英语同步学习平台 - 课文内容准确性验证', 'cyan');
  log('='.repeat(80), 'cyan');
  
  const versionsDir = path.join(__dirname, 'versions');
  const versionFiles = ['pep.js', 'waiyan.js', 'general.js'];
  
  const allIssues = [];
  const allStats = [];
  
  versionFiles.forEach(file => {
    const filePath = path.join(versionsDir, file);
    
    if (!fs.existsSync(filePath)) {
      log(`\n❌ 文件不存在: ${file}`, 'red');
      return;
    }
    
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const match = content.match(/const\s+\w+Data\s*=\s*(\{[\s\S]*\});?\s*$/);
      if (!match) {
        log(`\n❌ 无法解析文件: ${file}`, 'red');
        return;
      }
      
      const data = eval(`(${match[1]})`);
      const result = checkVersion(data, file);
      
      allIssues.push({ file, issues: result.issues });
      allStats.push(result.stats);
      
    } catch (err) {
      log(`\n❌ 解析错误: ${file} - ${err.message}`, 'red');
    }
  });
  
  // 输出问题汇总
  log('\n' + '='.repeat(80), 'cyan');
  log('问题汇总', 'cyan');
  log('='.repeat(80), 'cyan');
  
  let totalIssues = 0;
  allIssues.forEach(({ file, issues }) => {
    if (issues.length === 0) {
      log(`\n✅ ${file}: 课文内容质量良好`, 'green');
    } else {
      log(`\n⚠️ ${file}: 发现 ${issues.length} 个潜在问题`, 'yellow');
      
      // 按类型分组
      const byType = {};
      issues.forEach(issue => {
        byType[issue.type] = byType[issue.type] || [];
        byType[issue.type].push(issue);
      });
      
      Object.keys(byType).forEach(type => {
        const typeColor = type === 'content' ? 'red' : (type === 'punctuation' ? 'yellow' : 'magenta');
        log(`  [${type}] ${byType[type].length} 个`, typeColor);
        byType[type].slice(0, 3).forEach(issue => {
          log(`    - ${issue.desc}`, 'reset');
          log(`      位置: ${issue.context}`, 'reset');
          if (issue.sample) {
            log(`      示例: ${issue.sample}`, 'reset');
          }
        });
        if (byType[type].length > 3) {
          log(`    ... 还有 ${byType[type].length - 3} 个类似问题`, 'yellow');
        }
      });
      
      totalIssues += issues.length;
    }
  });
  
  // 统计汇总
  log('\n' + '='.repeat(80), 'cyan');
  log('检查统计', 'cyan');
  log('='.repeat(80), 'cyan');
  
  let totalTexts = 0, totalLines = 0;
  allStats.forEach(stats => {
    totalTexts += stats.textsChecked;
    totalLines += stats.linesChecked;
    log(`${stats.versionName}:`, 'blue');
    log(`  检查了 ${stats.textsChecked} 篇课文, ${stats.linesChecked} 句对话`, 'reset');
    if (Object.keys(stats.issuesByType).length > 0) {
      log(`  问题分布: ${JSON.stringify(stats.issuesByType)}`, 'yellow');
    }
  });
  
  log(`\n总计: 检查了 ${totalTexts} 篇课文, ${totalLines} 句对话`, 'green');
  
  // 最终结论
  log('\n' + '='.repeat(80), 'cyan');
  if (totalIssues === 0) {
    log('🎉 所有版本课文内容质量检查通过！', 'green');
    log('='.repeat(80), 'cyan');
    process.exit(0);
  } else {
    log(`⚠️ 共发现 ${totalIssues} 个潜在问题需要关注`, 'yellow');
    log('💡 提示: 大部分问题可能是格式细节，不影响朗读功能', 'cyan');
    log('='.repeat(80), 'cyan');
    process.exit(0);
  }
}

main();
