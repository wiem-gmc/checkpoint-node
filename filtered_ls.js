var fs = require("fs");
     var path = require('path');
module.exports = (dirPath, ext , cb) => {
    let filteredFiles = [];
    fs.readdir(dirPath, (err, list) => {
      if (err) return cb(err) 
      list.forEach((file) => {
        if(path.extname(file) === "." + ext) {
          filteredFiles.push(file)
        }
      })
      cb(null, filteredFiles)
    })
  }


