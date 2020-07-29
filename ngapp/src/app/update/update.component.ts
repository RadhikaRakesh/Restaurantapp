import { Component, OnInit } from '@angular/core';
import { ItemsService} from '../items.service';
import {ItemsModel} from '../menu/items.model';
import { Router } from '@angular/router';
import { FormBuilder ,FormGroup,Validators,ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  items=new ItemsModel(null,null,null,null,null);
  editform= this.fb.group(
    {
      itemCode:['',Validators.required],
    itemName:['',Validators.required],
    price:['',Validators.required],
    available:['',Validators.required],
      starRating:['',Validators.required]
    }
  )
  constructor(private itemservice:ItemsService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    let id=localStorage.getItem("upid");
    console.log("local id "+id);
    this.itemservice.getupdate(id)
    .subscribe((data)=>{
      this.items=JSON.parse(JSON.stringify(data));
      //this.updateuser.setValue(data);
     // console.log("update result name of product "+this.items);
      //this.products=data;
    })
  }
updateitem()
{
  this.itemservice.updating(this.items);
  console.log(this.items);
  console.log("called updateitem called");
  alert("success");
  this.router.navigate(['/display']);
}
}
