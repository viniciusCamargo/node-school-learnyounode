let http = require('http')

http.createServer((req, res) => {
    if (req.method === 'POST') {
        let dataUpper = []

        req.on('data', data => {
            let dataString = data.toString()
            dataUpper += dataString.toUpperCase()
            // console.log(dataUpper)
        })

        req.on('end', () => {
            res.end(dataUpper)
        })

        req.setEncoding('utf-8')
    }
}).listen(process.argv[2])