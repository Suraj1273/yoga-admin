import { Inject, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {WebapiService} from './webapi.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(@Inject(String) private web:WebapiService,private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  return true;
    if(this.web.isLogedIn()){
      return true;
    //  alert(this.service.isLogedIn());
    }else{
      alert("Please login first");
       this.router.navigate(['/user/login']);
      return false;
    }
  }

}
