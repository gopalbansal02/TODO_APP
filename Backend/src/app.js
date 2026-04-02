const express = require("express")
const app = express();
const todoRoutes= require('./routes/todo.routes.js')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')

app.use(express.json());


app.use(cookieParser());

app.get("/set-cookies", (req,res) =>{
    res.cookie("name","user-1");
    res.send("Cookie set");
})

app.get("/get-cookie",(req,res)=>{
    res.json(req.cookies);
})
module.exports = app;

app.use(expressSession({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true
}))

app.get("/profile",(req,res)=>{
    if(!req.session.user){
        return res.status(401).send("User Not logged in");
    }
    res.send(`Welcome ${req.session.user}`)
})

app.post("/login",(req,res)=>{
    const {username} = req.body
    req.session.user = username
    res.send("User Logged In")
})
app.get("/logout",(req,res)=>{
    req.session.destroy();
    return res.send("Logged Out")
})
app.use("/api/todos",todoRoutes)