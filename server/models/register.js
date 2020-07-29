const mongoose=require('mongoose');
//mongoose.connect('mongodb://localhost:27017/restaurentdb');
const Schema=mongoose.Schema
const userSchema=new Schema({
    name:String,
    mobile:String,
    email:String,
    password:String,
    type:String
});
module.exports=mongoose.model('register',userSchema,'register');