var readdir = require("../readdir");
readdir(process.argv[2],process.argv[3], function(err, fileList){
    if (err) return console.error(err);
    var count = 0;
    fileList.forEach(function(file) { count++ });
     return (count);

});