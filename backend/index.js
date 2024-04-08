const express = require('express')
const dbConnection = require("./database/db")

const app = express();


require('dotenv').config();


app.use(express.json());


const PORT = process.env.PORT | 3000
app.listen(PORT,()=>{
    dbConnection();
    console.log("server is running on port " + process.env.PORT)
})

app.get('/', (req, res)=>{
    res.send("hello");
})

