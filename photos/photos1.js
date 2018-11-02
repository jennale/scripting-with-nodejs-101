const fs = require("fs");
const path = require("path");
const { argv } = require("yargs")


const pathToPhotos = path.resolve(__dirname, argv.path || "")
let outputDir = argv.output || "renamed"
let prefix = argv.prefix || "photo"

fs.readdir(pathToPhotos, (err, files) => {
  if(err) throw new Error(err)

  fs.mkdir(path.join(pathToPhotos, outputDir), err => {
    if(err) throw new Error(err)

    files.forEach((file, index) => {
      if (!path.extname(file)) {
        return;
      }
  
      let newName = prefix + "_" + index + path.extname(file);
  
      fs.copyFile(path.join(pathToPhotos, file), path.join(pathToPhotos, outputDir, newName), err => {
        if (err) {
          console.error(err);
        }
      });
    });
  })
});
