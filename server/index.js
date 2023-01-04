const express = require('express');
const app = express();
const http  = require('http');
const port = 3000;

const expressServer = http.createServer(app);

const {Server} = require('socket.io')
const io = new Server(expressServer)

io.on('connection',(socket)=>{
    socket.join('kitchen-room');
    let sizeoOfkitchen = io.sockets.adapter.rooms.get('kitchen-room').size;
    io.sockets.in('kitchen-room').emit('cooking', 'cooking room has people is = '+sizeoOfkitchen)
    io.sockets.in('kitchen-room').emit('ingrid',"This is ingrid") 

    socket.join('bed-room');
    io.sockets.in('bed-room').emit('sleep',"I am sleeping")
    io.sockets.in('bed-room').emit('rest',"I am on rest")
    
    
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

expressServer.listen(port,()=>{
    console.log('Server is now running at port' , port);
})