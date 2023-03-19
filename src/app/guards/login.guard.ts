import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable, Subscription} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  isLoggedId: Subscription | undefined

  canActivate(): Observable<boolean>{
    return this.auth.isLogged$.pipe(
      map((logged) => {
        if(logged) {
          return true;
        }
        this.router.navigateByUrl('/')
        return false;
      } )
    )
  }
  constructor(private auth: AuthService, private router: Router) {
  }

}
