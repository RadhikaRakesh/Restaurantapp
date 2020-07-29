const express= require('express');
const router=express.Router();
const mongoose=require('mongoose');
const jwt =require('jsonwebtoken');
const register = require('../models/register');
const menuitems=require('../models/items');
const orderitems = require('../models/order');

const db='mongodb+srv://user_radhika:adminrr@mycluster.rsbj0.mongodb.net/restaurent?retryWrites=true&w=majority';

mongoose.connect(db,function(err){
    if(err)
    {
        console.error("Error occured"+err)
    }
    else
    {
        console.log('Connected to MongoDB')
    }
});


router.get('/',(req,res)=>{
    res.send("from api");

});
console.log('api is running');
router.post('/register',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
       
    let reg=req.body;
    let user=new  register(reg);
    console.log("register in backend"+user);
    user.save((err,registereduser)=>{
        if(err)
        {
            console.log(" error occured"+err);
        }
        else{
            let payload={subject:user._id,type:user.type}
            let token=jwt.sign(payload,'secretkey')
            res.send({token});
        }
    })
 })

 router.post('/login',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
      console.log("login in server"); 
    let userdata=req.body;
    register.findOne({email:userdata.email},(err,user)=>{
        if(err)
        {
            console.log(err);
        }
        else if(!user){
            res.status(401).send("invalid Email");
        }
        else if(user.password!==userdata.password){
        res.status(401).send("invalid password");
            
        }
        else{
    
            let payload={subject:user._id,type:user.type}
            let token=jwt.sign(payload,'secretKey')
            res.send({token});
        
                
            
            //res.status(200).send(user);
        }
    })
})
router.get('/details/:id',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
     res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
     console.log("user details");
     register.findById({_id:req.params.id})
         .then(function(user){
             console.log("user name in server"+user.name);
            // localStorage.setItem(_id);
             res.send(user);
         });
     
 })

function verifyToken(req,res,next)
{
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token=req.headers.authorization.split(' ')[1]
    if(token==='null')
    {
        return res.status(401).send('unauthorized token ')

    }
    let payload=jwt.verify(token,'secretKey')
    if(!payload){
        return res.status(401).send('unauthorised request in payload')
    }
    req.userId=payload.subject
    next()
}
router.post('/insert',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log("inside server ");
      // console.log(" product name "+req.body.menu.itemName);
       var newitem={
           itemCode:req.body.menu.itemCode,
           itemName:req.body.menu.itemName,
           available:req.body.menu.available,
           price:req.body.menu.price,
           starRating:req.body.menu.starRating,
       }
       var newitem=new menuitems(newitem);
       
       newitem.save();
})

router.get('/display',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    menuitems.find()
    .then(function(items){
       // console.log(products);
        res.send(items);
    });
})  
router.get('/delete/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    var id= req.params.id;
 
    console.log(" delete server id "+id);
    menuitems.findByIdAndRemove({_id:id}) 
   .then(function(){
          menuitems.find()
       . then(function(items){
          //console.log(products);
          res.send(items);
       });
        
        
       });
  

})

router.get('/edit',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
     res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
     menuitems.find()
         .then(function(items){
             //console.log(products);
        
             res.send(items);
         });
     
 })
 router.get('/view/:id',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
     res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
     console.log("update item");
     menuitems.findById({_id:req.params.id})
         .then(function(items){
             console.log("server edit"+items.itemName);
            // localStorage.setItem(_id);
             res.send(items);
         });
     
 })
 router.get('/views/:id',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
     res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
     console.log("update this item");
     menuitems.findById({_id:req.params.id})
         .then(function(items){
             console.log("server  edit thsi item "+items.itemName);
            // localStorage.setItem(_id);
             res.send(items);
         });
     
 })
 router.post('/updating',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    var id=req.body.items._id;
    console.log("updating called ")
    console.log("updating name"+req.body.items._id);
    var upitem={
       _id:req.body.items._id,
   
   itemName:req.body.items.itemName,
   itemCode:req.body.items.itemCode,
   available:req.body.items.available,
   price:req.body.items.price,
   starRating:req.body.items.starRating
     }

menuitems.findById({_id:id})
  .then(function ()  
{
    var up= new menuitems(upitem);
console.log("updated in updating "+upitem._id);
menuitems.findByIdAndUpdate(up._id,up,(er,result)=>{
//console.log("updated"+result);
})
})
})

router.post('/order',(req,res)=>{

    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log("inside server order ");
     console.log(" order item name "+req.body.menu.itemCode);
     var newitem={
         itemCode:req.body.menu.itemCode,
         itemName:req.body.menu.itemName,
        userName :req.body.menu.userName,
        userId:req.body.menu.userId,
        unitPrice:req.body.menu.unitPrice,
         quantity:req.body.menu.quantity,
         orderDate:req.body.menu.orderDate,
        
     }
     var newitem=new orderitems(newitem);
     
     newitem.save();
    
})
router.get('/vieworders',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    orderitems.find()
    .then(function(items){
       // console.log(items);
        res.send(items);
    });
})  

router.get('/findorder/:id',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
     res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
     console.log("user order  details",req.params.id);
     orderitems.find({userId:req.params.id})
         .then(function(order){
         // console.log("ordered user name in server"+order);
            // localStorage.setItem(_id);
             res.send(order);
         });
     
 })
module.exports=router;