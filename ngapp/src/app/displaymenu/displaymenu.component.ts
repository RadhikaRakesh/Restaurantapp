import { Component, OnInit } from '@angular/core';
import { ItemsModel } from '../menu/items.model';
import { ItemsService} from '../items.service';
import { Router } from '@angular/router';;

@Component({
  selector: 'app-displaymenu',
  templateUrl: './displaymenu.component.html',
  styleUrls: ['./displaymenu.component.css']
})
export class DisplaymenuComponent implements OnInit {
items:ItemsModel[];
  constructor(private itemservice:ItemsService,private router:Router) { }

  ngOnInit(): void {
    this.itemservice.getitems()
    .subscribe((data)=>{
      this.items=JSON.parse(JSON.stringify(data));
    console.log("display "+this.items);
    })
  }
viewitem(item)
{

 this.itemservice.viewoneitem(item._id)
    .subscribe((data)=>{
     // this.items=JSON.parse(JSON.stringify(data));
    this.router.navigate(['edit']);
    console.log(item);

    });

}

dodelete(item)
{
  this.itemservice.cancelitem(item._id)
    .subscribe((data)=>{
      this.items=JSON.parse(JSON.stringify(data));
    
    //console.log(product);
    });
    console.log("delete called");
   alert(" delete success");
    this.router.navigate(['/display']);
}
doupdate(item)
{
  console.log("called doupdate");
  this.itemservice.viewoneitem(item._id)
  .subscribe((data)=>{
    console.log("doupdate function subscribe"+this.items);
  this.router.navigate(['/update']);
  });
}  

}
