import { Component, OnInit } from '@angular/core';
import { ItemsService} from '../items.service';
import {ItemsModel} from '../menu/items.model';
import { Router } from '@angular/router';
import { FormBuilder ,FormGroup,Validators,ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-newmenu',
  templateUrl: './newmenu.component.html',
  styleUrls: ['./newmenu.component.css']
})
export class NewmenuComponent implements OnInit {
  item=new ItemsModel(null,null,null,null,null);
  addform= this.fb.group(
    {
      itemCode:['',Validators.required],
    itemName:['',Validators.required],
    price:['',Validators.required],
    available:['',Validators.required],
      starRating:['',Validators.required]
    }
  )
  constructor(private itemservice:ItemsService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }
  additem(){
    this.itemservice.newitem(this.item);
    console.log(this.item);
    console.log(" new item menu called");
    
    this.router.navigate(['/menu']);
  }

}
