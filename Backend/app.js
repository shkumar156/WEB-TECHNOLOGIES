const express = require("express");
const Cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(Cors())
app.use(express.json());


const user = require("./routes/userRoute");
const product = require("./routes/productRoute");

app.use( "/api" ,user)
app.use( "/api" ,product)

app.get("/",(req,res)=>{
        res.send("Running!");
})
module.exports = app;
