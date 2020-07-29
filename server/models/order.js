const mongoose=require('mongoose');
//mongoose.connect('mongodb://localhost:27017/restaurentdb');
const Schema=mongoose.Schema
const userSchema=new Schema({
     
     itemName:String, 
     itemCode:String,
     unitPrice:Number,
     quantity:Number,
     orderDate:Date,
     userName:String,
     userId:String
});
module.exports=mongoose.model('orderitems',userSchema,'orderitems');