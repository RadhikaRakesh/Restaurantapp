import { Component, OnInit } from '@angular/core';
import { ItemsService} from '../items.service';
import {OrderModel} from '../special/order.model'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
orders:OrderModel[];
totalprice:Number;

  constructor(private itemsService:ItemsService) { }

  ngOnInit(): void {
    let id=localStorage.getItem("userid");
    console.log("user id "+id);
    this.itemsService.getorderdetails(id)
    .subscribe((data)=>{
      this.orders=JSON.parse(JSON.stringify(data));
    
      for(let i=0,total=0;i<this.orders.length;i++)
      {
        
        let q=Number( this.orders[i].quantity);
        let p=Number( this.orders[i].unitPrice);
        //console.log("quantity "+ q);
        //console.log("price "+p);
         total =total+ (q*p);
         this.totalprice=total;
        //console.log("total : "+ total);
          }

     console.log('total price:'+this.totalprice);
    })
    
  }

}
