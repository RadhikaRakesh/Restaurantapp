import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { Router } from '@angular/router';
import { ItemsModel } from './items.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
items:ItemsModel[];
  constructor(private itemservice:ItemsService,private router:Router) { }

  ngOnInit(): void {
    this.itemservice.getitems()
    .subscribe((data)=>{
      this.items=JSON.parse(JSON.stringify(data));
      
    })

  }

}
