const express = require('express');
const app = express();
const http  = require('http');
const port = 3000;

const expressServer = http.createServer(app);

const {Server} = require('socket.io')
const io = new Server(expressServer)


// check socket is working or not...
// if new user is visite then cb will call.. 
io.on('connection', (socket)=>{
    console.log('New user connected');
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

expressServer.listen(port,()=>{
    console.log('Server is now running at port' , port);
})