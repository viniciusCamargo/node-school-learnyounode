let fs = require('fs')

let file = process.argv[2]

fs.readFile(file, 'utf-8', (err, content) => {
  if (err) {console.log(err)}

  console.log(content.split('\n').length -1)
})
