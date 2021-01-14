import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot
} from '@angular/router';
// @ts-ignore
import {UserToken} from '../model/user-token';
import {AuthService} from "../../service/auth/auth.service";
// @ts-ignore

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  currentUser: UserToken;

  constructor(private router: Router,
              private authService: AuthService) {
    // @ts-ignore
    this.authService.currentUser.subscribe((user: any) => {
      this.currentUser = user;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentUser) {
      return true;
    } else {
      this.router.navigate(['/login', '/'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentUser) {
      return true;
    } else {
      this.router.navigate(['/login', '/'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }
}

