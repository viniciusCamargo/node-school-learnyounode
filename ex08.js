let http = require('http')

let url = process.argv[2]

http.get(url, response => {
  let dataArray = []
  response.setEncoding('utf-8')
  response.on('data', data => {
    dataArray += data
  })
  response.on('end', () => {
    console.log(dataArray.length)
    console.log(dataArray)
  })
})
