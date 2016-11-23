let http = require('http')
let url = require('url')
// let querystring = require('querystring')

http.createServer((req, res) => {
    let timeObj = url.parse(req.url, true)
    let timeString = timeObj.query.iso
    let time = new Date(timeString)

    if (url.parse(req.url).pathname === '/api/parsetime') {
        let t = {
            'hour': time.getHours(),
            'minute': time.getMinutes(),
            'second': time.getSeconds()
        }

        res.end(JSON.stringify(t))
    }

    if (url.parse(req.url).pathname === '/api/unixtime') {
        let t = {
            'unixtime': time.getTime()
        }
        res.end(JSON.stringify(t))
    }

    else {
        res.writeHead(404)
        res.end()
    }
}).listen(process.argv[2])
