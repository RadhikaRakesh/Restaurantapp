import { Component, OnInit } from '@angular/core';
import {OrderModel} from '../special/order.model';
import { ItemsService } from '../items.service';
import { Router } from '@angular/router';
import { ItemsModel } from '../menu/items.model';
import { AuthService } from '../auth.service';
import { registermodel } from '../register/register.model';
import { FormBuilder ,FormGroup,Validators,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderformComponent implements OnInit {

order=new OrderModel(null,null,null,null,null,null,null);
items=new ItemsModel(null,null,null,null,null);
reguser=new registermodel(null,null,null,null,null,null);
today:Date;
orderform=this.fb.group(
  {
    itemName:['',Validators.required],
    itemCode:['',Validators.required],
    unitPrice:['',Validators.required],
    userName:['',Validators.required],
    quantity:['',Validators.required]
//    date:['',Validators.required]
  }
)
  constructor(private itemservice:ItemsService,private router:Router,private fb:FormBuilder,private auth:AuthService) { }

  ngOnInit(): void {
    var id=localStorage.getItem("id")
    this.itemservice.getupdate(id)
    .subscribe((data)=>{
     
       this.items=JSON.parse(JSON.stringify(data));
       this.order.itemCode=this.items.itemCode;
       this.order.itemName=this.items.itemName;
       this.order.unitPrice=this.items.price;
    }) 
    let uid=localStorage.getItem("userid");
    console.log("user id "+uid);
    this.auth.getuser(uid)
    .subscribe((data)=>{
      
      this.reguser=JSON.parse(JSON.stringify(data));
     this.order.userName=this.reguser.name;
     this.order.userId=this.reguser._id;
   /* this.today = new Date();
     this.order.orderDate=this.today;
       console.log("today date"+this.today);
       console.log("today date in order:"+this.order.orderDate);
    */})
    }
addorder()
{
  this.itemservice.order(this.order);
  console.log(this.order);
  console.log("called order fom user called");
  alert("success");
  this.router.navigate(['/cart']);
}

}
