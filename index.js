const express = require('express')
const app = express()
const http = require('http')
const socketIO = require('socket.io')
const server = http.Server(app)
const io = socketIO(server)
const cors = require('cors')
app.use(cors())
server.listen(5000,()=>{
    console.log('server is start on port 5000')
})

app.get('/',(req,res)=>{
    res.status(200).send()
})

io.on('connection',socket=>{
    console.log('client connect to server')
    socket.on('chat',data=>{
        console.log(data)
        io.emit('broad_cast_message',data)
    })
})