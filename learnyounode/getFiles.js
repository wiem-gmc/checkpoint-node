const fs = require("fs");
const path = require("path");

const getFiles = (dir, ext, callback) => {
  fs.readdirSync(dir, (err, data) => {
    if (err) return callback(err);
    const list = data.filter(item => {
      return path.extname(item) === "." + ext;
    });
    callback(null, list);
  });
};

module.exports = getFiles;