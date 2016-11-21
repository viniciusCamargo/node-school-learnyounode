let fs = require('fs')

let directory = process.argv[2]
let extension = `.${process.argv[3]}`

fs.readdir(directory, (err, list) => {
    if (err) {console.log(err)}

    let files = list.filter(i => {
        return i.includes(extension)
    })

    files.forEach(i => {
        console.log(i)
    })
})
