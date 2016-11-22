let net = require('net')

/*function padding(n) {
    if (n < 10) {
        return `0${n}`
    } else {
        return n
    }
}*/
let padding = n => n < 10 ? `0${n}` : n

let now = () => {
    let date = new Date()

    let ano = padding(date.getFullYear())
    let mes = padding(date.getMonth() + 1)
    let dia = padding(date.getDate())
    let h = padding(date.getHours())
    let m = padding(date.getMinutes())

    return `${ano}-${mes}-${dia} ${h}:${m}`
}

net.createServer(socket => {
    socket.end(now() + '\n')
}).listen(process.argv[2])
