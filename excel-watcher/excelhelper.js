const fs = require("fs");
const ExcelCSV = require("excelcsv");

const fileIn = "./excel-watcher/excel.xlsx";
const fileOut = "./excel-watcher/excel.csv";

const parser = new ExcelCSV(fileIn, fileOut);

fs.watchFile(fileIn, (curr, prev) => {
  parser.init();
});
