var express = require("express")
var app = express();
app.listen(1234,()=>{
    console.log("server started..");
})
app.get("/",()=>{
    console.log("heyy");
})
app.get("/",()=>{
    console.log("heyy test time");
})
