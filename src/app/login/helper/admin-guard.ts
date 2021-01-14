import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../../service/auth/auth.service";
import {UserToken} from "../../model/user-token";

@Injectable()
export class AdminGuard implements CanActivate {
  currentUser: UserToken | undefined;

  constructor(private router: Router,
              private authService: AuthService) {
    // @ts-ignore
    this.authService.currentUser.subscribe((user: any) => {
      this.currentUser = user;
    });
  }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log(this.currentUser);
      // @ts-ignore
      if ('ROLE_ADMIN' == this.currentUser.roles && this.currentUser) {
        return true;
      } else {
        this.router.navigate(['/login', '/'], {queryParams: {returnUrl: state.url}});
        return false;
      }
    }
}
