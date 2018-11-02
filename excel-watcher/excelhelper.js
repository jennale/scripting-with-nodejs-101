const fs = require("fs");
const ExcelCSV = require("excelcsv");
const path = require("path")
const { argv } = require("yargs");

let fileIn = argv.input ? path.resolve(__dirname, argv.input) : path.join(__dirname, 'excel.xlsx')
let fileOut = argv.output ? path.resolve(__dirname, argv.output) : path.join(__dirname, 'excel.csv')

const parser = new ExcelCSV(fileIn, fileOut);

fs.watchFile(fileIn, (curr, prev) => {
  parser.init();
});