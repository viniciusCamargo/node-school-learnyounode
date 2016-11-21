let listFilesByExtension = require('./ex06-1.js')

let directory = process.argv[2]
let extension = process.argv[3]

listFilesByExtension(directory, extension, (err, list) => {
    if (err) {console.log(err)}

    list.forEach(i => {
        console.log(i)
    })
})
