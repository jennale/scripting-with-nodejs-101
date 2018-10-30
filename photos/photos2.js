const fs = require("fs");
const path = require("path");
const probe = require("probe-image-size");

fs.readdir("../renamed", (err, files) => {
  let dimensions = {};

  files.forEach((file, index) => {
    if (!path.extname(file)) {
      return;
    }

    let photoStream = fs.createReadStream("../renamed/" + file);

    probe(photoStream)
      .then(size => {
        let sizePocket = dimensions[`${size.width} x ${size.height}`];

        sizePocket
          ? sizePocket.push(file)
          : (dimensions[`${size.width} x ${size.height}`] = [file]);

        if (index === files.length - 1) {
          console.log(dimensions);
        }
      })
      .catch(err => {
        console.log(file);
        console.error(err);
      });
  });
});
