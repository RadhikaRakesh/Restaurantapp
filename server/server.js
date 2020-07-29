const express= require('express');
const api=require('./routes/api');
const bodyparser=require('body-parser');
const cors=require('cors');

const app=express();

app.use(cors());
app.use(bodyparser.json());
app.use('/api',api);

app.get('/',(req,res)=>{
    res.send("hello from server");
})

app.listen(3000,function(){
    console.log("server is running on localhost:3000");
})
