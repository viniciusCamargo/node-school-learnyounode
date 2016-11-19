let fs = require('fs')

let file = process.argv[2]
let lines = fs.readFileSync(file, 'utf8').toString().split('\n')

console.log(lines.length - 1)
