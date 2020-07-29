import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup,Validators,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import{registermodel} from '../register/register.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
title:String="Login";
  logdata=new registermodel(null,null,null,null,null,null);
  loginform= this.fb.group(
    {email:['',[Validators.required, Validators.pattern('^[a-z0-9_%+-]+@[a-z0-9.-]+\.[a-z{2,4]$')]],
    password:['',[Validators.required,Validators.minLength(6)]]
      
    }
  )
  constructor(private auth:AuthService,private fb:FormBuilder,private router:Router) { }

  loginuser(){
    
   // this.auth.loggedin(this.logdata);
    console.log(this.logdata);
    console.log("called");
    //alert("success");
   // this.router.navigate(['/']);
  
    
    this.auth.loggedin(this.logdata)
    .subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('token',res['token']);
        
        let type=this.auth.verifyuser();
      if(type==true){
         //var type="admin";
         alert("login success");
         this.router.navigate(['/display']);
         
      }
       else{
      // var type="user";
      alert("login success");
       this.router.navigate(['/special']);
       }
      //localStorage.setItem('type',type);
        
       
         },
      err=>{
        console.log(err)
      alert("error not loging");
      }
    )
  }
  
  ngOnInit(): void {
  }
}
