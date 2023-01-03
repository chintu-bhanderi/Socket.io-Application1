const express = require('express');
const app = express();
const http  = require('http');
const port = 3000;

const expressServer = http.createServer(app);

const {Server} = require('socket.io')
const io = new Server(expressServer);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

expressServer.listen(port,()=>{
    console.log('Server is now running at port' , port);
})