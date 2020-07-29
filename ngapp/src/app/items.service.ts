import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }
getitems()
{
  return  this.http.get("http://localhost:3000/api/display")
}
newitem(item)
{
  console.log("call reached in item service");
  return this.http.post("http://localhost:3000/api/insert",{"menu":item})
  .subscribe(data=>{
    console.log("item service returned from server");
    alert("add success")
  })
}
cart(item)
{
  console.log("call reached in item service");
  return this.http.post("http://localhost:3000/api/cart",{"menu":item})
  .subscribe(data=>{
    console.log("item service returned from server to cart");
    alert("added  to cart")
  })

}
cancelitem(id){
  console.log("delete id :"+id);
  return this.http.get(`http://localhost:3000/api/delete/${id}`)
  /*.subscribe(data=>
    {
      console.log("item delete in item service");
      alert("deleted");

    })*/
}
viewoneitem(id)
{
  localStorage.setItem("upid",id);
  console.log("id to update: ",id);
  return this.http.get(`http://localhost:3000/api/view/${id}`)
}

/*updateview(item)
{
  

}*/
getupdate(id)
  { 

    console.log("get update id  coming:",id);
   return  this.http.get(`http://localhost:3000/api/views/${id}`);
   
  
}
updating(item)
{
console.log("update function called");
  return this.http.post("http://localhost:3000/api/updating",{"items":item})
  .subscribe(data=>{
    console.log("retun updating"+data);
  })

}
order(item)
{
  
console.log("order function called"+item);
return this.http.post("http://localhost:3000/api/order",{"menu":item})
.subscribe(data=>{

 console.log("retun order from server");
 alert("added to cart");
})
}
getorders()
{
  return  this.http.get("http://localhost:3000/api/vieworders")
}

getorderdetails(id)
{
  return  this.http.get(`http://localhost:3000/api/findorder/${id}`)
  
}



}
