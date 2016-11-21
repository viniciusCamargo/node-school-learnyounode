let http = require('http')

let url = process.argv[2]

http.get(url, response => {
  let data = []
  response.setEncoding('utf-8')
  response.on('data', data => {
    data += data
  })
  response.on('end', () => {
    console.log(data.length)
    console.log(data)
  })
})
