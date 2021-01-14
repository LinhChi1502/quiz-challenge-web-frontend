import { Component, OnInit } from '@angular/core';
import {UserToken} from "../../model/user-token";
import {AppUser} from "../../model/app-user";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../service/auth/auth.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  currentUser: UserToken | undefined;
  user: AppUser = {
    username: '',
    password: ''
  };
  returnUrl = '';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService) {
    // @ts-ignore
    this.authService.currentUser.subscribe(value => this.currentUser = value);
  }

  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
  }

  login() {
    // @ts-ignore
    this.authService.login(this.user.username, this.user.password)
      .pipe(first())
      .subscribe(data => {
        this.router.navigate([this.returnUrl]);
      });
  }
}
