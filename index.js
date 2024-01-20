const express=require("express")
const mongoose=require("mongoose")

const cors=require("cors")
const server = express()
const {login,register} = require("./src/controllers/users")
const { validateForm, isValidated } = require("./src/Middlewares")
const { addForm } = require("./src/controllers/Form")
const http = require('http')
const app = http.createServer(server);
const {Server}=require("socket.io");
const io = new Server(app);

server.use(express.json())
server.use(cors())
server.get("/",(req,res)=>{
    res.status(200).json({
        uname:"khushi",
        uphone:"8986574039",
        email:"khushikkumari136@gmail",
        password:"12345678"
    })
})
server.post("/register",register)
server.post("/login",login)
server.post("/addForm",validateForm,isValidated,addForm)


io.on("connection",socket=>{
    console.log("new user connected")
    socket.on("message",(message,room)=>{
        console.log(`new message arrived in ${room} and message is ${message}`)
        socket.to(room).emit("message",message)
    })
    socket.on("join",(room)=>{
        console.log(room)
        socket.join(room)
        socket.emit("joined")
    })
})

app.listen("3000",()=>{
 console.log("server started")
})
mongoose.connect("mongodb+srv://student:AW63TkHL5ImYWDsJ@cluster0.oledofx.mongodb.net/test01")
.then(data=>console.log("database connected"))
.catch(error=>console.log("error"))