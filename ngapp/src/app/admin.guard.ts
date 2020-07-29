import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {  AuthService} from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

    constructor(private _auth:AuthService,private _router:Router)
    {
  
    }
   canActivate():boolean{
     if(this._auth.isadmin())
     {
        console.log(' admin true');
        return true;
     }
     else{
        console.log("admin false");
        this._router.navigate(['/login'])
        return false
     }
   }
/*next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  */
}
