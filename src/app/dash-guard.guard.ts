import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Common } from './commonservice'

import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DashGuardGuard implements CanActivate {

constructor(private auth:Common, private myRoute: Router){

}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (localStorage.getItem('loggedIn')=="true") {
        return true;
      } 
      else{
        this.myRoute.navigate(["/"]);
    return false;
      }
  }
}
