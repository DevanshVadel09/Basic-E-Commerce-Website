if(true){
    console.log("Server is running...");
}
else{
    console.log("Server is not running...")
}

const cors = require("cors");
const express = require('express');
const DBConnect = require("./config/DBConnect");
const errorHandler = require('./middleware/errorHandler.js');
const dotenv = require('dotenv').config();
DBConnect();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}));

app.use(express.json());
app.use(express.json());
app.use("/api/contacts", require("./router/contactRouters.js")); 
app.use("/api/users", require("./router/userRouters.js"));  
app.use("/api/auth",require("./router/authRouter.js"));
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
    console.log(`http://localhost:${port}/api`);
});

app.get("/",(req,res)=>{
    res.send("Backend connected");
    
});
app.get("/api",(req,res)=>{
    res.json({
        message:"API working"
    });
});