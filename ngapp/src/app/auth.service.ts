import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
import  * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  registeruser(user)
  {
    return this.http.post("http://localhost:3000/api/register",user)
  }
loggedin(user){
return this.http.post("http://localhost:3000/api/login",user)
  }

  newitem(item)
  {
    console.log("call reached in item service");
    return this.http.post("http://localhost:3000/api/insert",{"menu":item});
  }

  logged(){
    return !!localStorage.getItem('token')
  }
  isadmin(){
    let val=localStorage.getItem('type');
   // console.log("admmin value: "+val);
    if(val==='admin')
    {
      
    return !!(localStorage.getItem('type'))
  }
}
  gettoken(){
    console.log("gettoken ");
    return localStorage.getItem('token')
  }
  getuser(id){
  return this.http.get(`http://localhost:3000/api/details/${id}`);
  }
  verifyuser(){
    let token=localStorage.getItem('token');
    console.log("token"+token);
    if(!!token)
    {
      let decoded =jwt_decode(token);
      let id=decoded['subject'];
     console.log("id "+id);
     localStorage.setItem('userid',id);
      let type=decoded['type'];
      localStorage.setItem('type',type);
      console.log("logger : "+type);
      if(type=='admin')
      {
        console.log("admin is enterd");
        return true;
      }
      else{
        console.log("user is entered");
        return false;
      }
    }

    else
    {
      console.log("no token cerated");
      return false;
    }
      }
}
