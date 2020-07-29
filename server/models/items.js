const mongoose=require('mongoose');
//mongoose.connect('mongodb://localhost:27017/restaurentdb');
const Schema=mongoose.Schema
const userSchema=new Schema({
     itemName:String, 
     itemCode:String,
     available:String,
     price:Number,
     starRating:Number,
});
module.exports=mongoose.model('menuitems',userSchema,'menuitems');