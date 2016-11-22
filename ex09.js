let http = require('http')

let urls = process.argv.slice(2)

let dataArrayOne = []
http.get(urls[0], response => {
    response.setEncoding('utf-8')
    response.on('data', data => {
        dataArrayOne += data
    })
    response.on('end', () => {
        console.log(dataArrayOne)
        
        let dataArrayTwo = []
        http.get(urls[1], response => {
            response.setEncoding('utf-8')
            response.on('data', data => {
                dataArrayTwo += data
            })
            response.on('end', () => {
                console.log(dataArrayTwo)

                let dataArrayThree = []
                http.get(urls[2], response => {
                    response.setEncoding('utf-8')
                    response.on('data', data => {
                        dataArrayThree += data
                    })
                    response.on('end', () => {
                        console.log(dataArrayThree)
                    })
                })
            })
        })
    })
})




