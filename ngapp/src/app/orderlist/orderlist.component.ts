import { Component, OnInit } from '@angular/core';
import { ItemsService} from '../items.service';
import {OrderModel} from '../special/order.model'
import { Router } from '@angular/router';
@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
orders:OrderModel[];
  constructor(private itemservice:ItemsService,private router:Router) { }

  ngOnInit(): void {
    this.itemservice.getorders()
    .subscribe((data)=>{
      this.orders=JSON.parse(JSON.stringify(data));
    
    })
  }

}
