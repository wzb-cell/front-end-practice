const ExcelJS = require("exceljs");
/**
 * inputFilePath: 读取的excel文件；
 * outputFilePath：写入的excel文件；
 * columnRules：特殊规则配置；
 * generalRule：通用规则配置；
 */
async function readLargeExcel(
  inputFilePath,
  outputFilePath,
  columnRules,
  generalRule
) {
  const timeStart = new Date().getTime();
  // 通过流的形式读取excel表
  const workbook = new ExcelJS.stream.xlsx.WorkbookReader(inputFilePath);
  // 通过流的方式写入到excel表
  const newWorkbook = new ExcelJS.stream.xlsx.WorkbookWriter({
    filename: outputFilePath
  });
  let newWorksheet = newWorkbook.addWorksheet("Processed Data");
  let count = 0;
  for await (const worksheet of workbook) {
    console.log(`Sheet: ${worksheet.name}`);
    for await (const row of worksheet) {
      // 在这里处理每一行数据
      const newRowValues = [];
      row.eachCell((cell, colNumber) => {
        let newValue = cell.value;
        if (colNumber >= 1 && colNumber <= 29) {
          // 应用前 15 列的替换规则
          if (
            columnRules[colNumber - 1] &&
            columnRules[colNumber - 1][cell.value]
          ) {
            newValue = columnRules[colNumber - 1][cell.value];
          }
        } else {
          // 应用第 16 列及以后的统一替换规则
          if (generalRule[cell.value]) {
            newValue = generalRule[cell.value];
          }
        }
        newRowValues[colNumber] = newValue;
      });
      // 处理一行，便写入一行，防止内存被爆
      newWorksheet.addRow(newRowValues).commit();
      console.log(`处理第${count++}行`);
    }
  }

  try {
    // 将工作表的数据进行写入；
    await newWorksheet.commit();
    await newWorkbook.commit();
    const timeEnd = new Date().getTime();
    console.log(`执行完成了，总共花费了${(timeEnd - timeStart) / 1000}秒`);
  } catch (error) {
    console.log("报错了", error);
  }
}

// 前 15 列的替换规则示例
const columnRules = [
  null, // 第1列的替换规则
  { oldValueA: "newValueA", oldValueB: "newValueB" }, // 第2列的替换规则
  null,
  null,
  null,
  { 男: 1, 女: 2 }, // 第6列
  null,
  null,
  null,
  null,
  null,
  { 男: 1, 女: 2 },
  null,
  { 未婚: 1, 已婚: 2, 离婚: 3, 丧偶: 4 }, // 第14列
  null,
  { 健康: 1, 亚健康: 2, "患病（慢性病等）": 3 },
  null,
  null,
  { 正式在编: 1, 合同: 2, 其他: 3 },
  null,
  { 高中及以下: 1, 中专及中技: 2, 大专: 3, 本科: 4, 研究生及以上: 5 },
  {
    社区卫生服务中心: 1,
    乡镇卫生院: 2,
    村卫生室: 3,
    社区卫生服务站: 4,
    其他: 5
  },
  {
    临床医生: 1,
    护理人员: 2,
    辅助科室人员: 3,
    公卫人员: 4,
    管理人员: 5,
    其他: 6
  },
  {
    执业医师: 1,
    执业助理医师: 2,
    乡镇执业助理医师: 3,
    乡村全科执业助理医师: 4,
    护士: 5,
    医学技术: 6,
    其他: 7
  },
  { 临床类别: 1, 中医类别: 2, 口腔类别: 3, 公卫类别: 4, 其他: 5 },
  { 初级职称: 1, 无职称: 2, 中级职称: 3, 高级职称: 4 },
  {
    "3000元及以下": 1,
    "3001~4500元": 2,
    "4501元~6000元": 3,
    "6001~7500元": 4,
    "7501元及以上": 5
  },
  {
    全科医疗科: 1,
    中医科: 2,
    康复医学科: 3,
    医学检验科: 4,
    医学影像科: 5,
    预防接种科: 6,
    "妇女（儿童）保健科": 7,
    "临终关怀（安宁疗护）": 8,
    "专职管理（院长、主任等仅从事管理工作）": 9
  }
];

// 第 16 列及以后的统一替换规则示例
const generalRule = {
  非常不同意: 1,
  不太同意: 2,
  一般: 3,
  同意: 4,
  完全同意: 5,
  很好: 1,
  较好: 2,
  较差: 4,
  不好: 5
};

const inputFilePath = "C:/Users/admin/Desktop/question.xlsx";
const outputFilePath = "C:/Users/admin/Desktop/output_file.xlsx";

readLargeExcel(inputFilePath, outputFilePath, columnRules, generalRule);
