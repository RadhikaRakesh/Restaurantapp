import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup,Validators,ReactiveFormsModule, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import{registermodel} from '../register/register.model';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reguser= new registermodel(null,null,null,null,null,null);
  regform=this.fb.group(
    {
      name:['',Validators.required],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],//^(\d{3})(\.?\-?\ ?)(\d{3})(\.?\-?\ ?)(\d{4})$
      email:['',[Validators.required, Validators.pattern('^[a-z0-9_%+-]+@[a-z0-9.-]+\.[a-z{2,4]$')]],//^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})((\.[a-z]{2,3}?)?)$
      password:['',[Validators.required,Validators.minLength(6)]],
      radios:['',Validators.required]
    }
  )
  registeruser(){
console.log(this.reguser);
if(document.getElementById("user")['checked']){
  this.reguser.type="user";
}
else {
this.reguser.type="admin";
}
console.log(this.reguser);
this.auth.registeruser(this.reguser)
.subscribe(
  res=>{
    console.log(res);
  
  localStorage.setItem('token',res['token']);
  let user=this.auth.verifyuser();
  if(user==true){
    var type="admin";
  }
  else{
    var type="user";
  }
  localStorage.setItem('type',type);
  alert("Registered successfully");
  this.router.navigate(['/login']);
  },
  err=>console.log(err)
)
  }
  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

}
