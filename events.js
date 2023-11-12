const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('event', (name, id)=>{
    console.log(`data received: USER ${name} ID ${id}`)
})

customEmitter.on('event', (event)=>{
    console.log(`different data:`)
})

customEmitter.emit('event', 'john', '124325')