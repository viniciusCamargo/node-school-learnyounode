let fs = require('fs')
let http = require('http')

let file = process.argv[3]

http.createServer((req, res) => {
    fs.createReadStream(file).pipe(res)
}).listen(process.argv[2])
