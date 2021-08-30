const filteredLS = require('./filtered_ls')
let dirPath = process.argv[2]
let extension = process.argv[3]

filteredLS(dirPath, extension, (err, list) => {
    if (err) throw err;
    list.forEach(filename => {
        console.log(filename)
        
    });
})

