import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';
import { ItemsService } from '../items.service';
import { OrderModel } from './order.model';
import {ItemsModel} from '../menu/items.model';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {
items:ItemsModel[];
  order=new OrderModel(null,null,null,null,null,null,null);
  constructor(private itemservice:ItemsService,private router:Router) { }

  ngOnInit(): void {
    this.itemservice.getitems()
    .subscribe((data)=>{
      this.items=JSON.parse(JSON.stringify(data));
      
    })
  }
addtocart(id)
{
console.log("id of item in cart"+id);
localStorage.setItem('id',id);
this.router.navigate(['/orderform']);
//this.itemservice.cart(item);
}
    


}
