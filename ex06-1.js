let fs = require('fs')
let path = require('path')

module.exports = (directory, extension, callback) => {
    fs.readdir(directory, (err, list) => {
        if (err) {return callback(err)}

        let files = list.filter(i => {
            return path.extname(i) === `.${extension}`
        })

        return callback(null, files)
    })
}
