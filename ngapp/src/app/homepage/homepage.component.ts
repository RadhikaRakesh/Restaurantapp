import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import{registermodel} from '../register/register.model'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  reguser:registermodel;
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    let id=localStorage.getItem("userid");
    console.log("user id "+id);
    this.auth.getuser(id)
    .subscribe((data)=>{
      
      this.reguser=JSON.parse(JSON.stringify(data));
      console.log("user name"+this.reguser.name);
    })
  }

}
