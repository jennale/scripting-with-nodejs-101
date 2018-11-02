const fs = require("fs");
const path = require("path");
const { argv } = require("yargs")

if(!argv.path) {
  throw new Error('No path supplied, please supply a path to the folder containing the photos you wish to modify')
}

const pathToPhotos = path.resolve(__dirname, argv.path)

fs.readdir(pathToPhotos, (err, files) => {
  if(err) throw new Error(err)

  fs.mkdir(path.join(pathToPhotos, 'renamed'), err => {
    if(err) throw new Error(err)

    files.forEach((file, index) => {
      if (!path.extname(file)) {
        return;
      }
  
      let newName = "photo_" + index + path.extname(file);
  
      fs.copyFile(path.join(pathToPhotos, file), path.join(pathToPhotos, "renamed", newName), err => {
        if (err) {
          console.error(err);
        }
      });
    });
  })
});
