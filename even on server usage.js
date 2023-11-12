const http = require('http')
// const server = http.createServer((req, res) => {
//     res.end('WELCOME')
// })

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subscribes to request / listen for it / respond to it
server.on('request', (req, res) => {
    res.end('WELCOME')
})

server.listen(5000, () => {
    console.log('listening on port 5000')
})
