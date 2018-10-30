const fs = require("fs");
const path = require("path");

fs.readdir("./photos-start", (err, files) => {
  files.forEach((file, index) => {
    if (!path.extname(file)) {
      return;
    }

    let newName = "photo_" + index + path.extname(file);

    fs.copyFile("photos-start/" + file, "renamed/" + newName, err => {
      if (err) {
        console.error(err);
      }
    });
  });
});
