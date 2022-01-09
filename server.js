const express =  require("express");
const app  = express();
const socketio= require("socket.io");



app.use(express.static(__dirname+"/public"));

const expressServer =  app.listen(process.env.PORT || 5000, ()=>{
    console.log("http://localhost:8");
});

const io =  socketio(expressServer);

module.exports= {
    io:io , 
    app:app
}