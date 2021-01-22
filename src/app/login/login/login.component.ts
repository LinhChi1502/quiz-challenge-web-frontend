import { Component, OnInit } from '@angular/core';
import {UserToken} from "../../model/user-token";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../service/auth/auth.service";
import {first} from "rxjs/operators";
import {FormControl, FormGroup} from "@angular/forms";

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  returnUrl: string ='';
  loading = false;
  submitted = false;
  currentUser: UserToken = {};
  hasRoleAdmin = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {
    // @ts-ignore
    this.authService.currentUser.subscribe(value => this.currentUser = value);
    if (!this.currentUser ||  this.currentUser == 'null' ) {
      this.router.navigate(['/login']);
      return;
    }
    if (this.currentUser  ) {
      if(this.currentUser != 'null'){
        const roleList = this.currentUser.roles;
        for (const role of roleList) {
          if (role.authority === 'ROLE_ADMIN') {
            this.hasRoleAdmin = true;
          }
        }
      }
    }
    if (this.authService.currentUserValue) {
      if (this.hasRoleAdmin) {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/']);
      }
    }
  }

  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
    $(document).ready(function() {
      $('#login-form').validate({
        rules: {
          username: {
            required: true,
            minlength: 6,
            maxlength: 20,
          },
          password: {
            required: true,
            minlength: 6,
            maxlength: 20,
          }
        },
        messages: {
          username: {
            required: 'Hãy nhập tên tài khoản',
            minlength: 'Bạn phải nhập tối thiểu 6 ký tự',
            maxlength: 'Bạn chỉ được nhập tối đa 20 ký tự'
          },
          password: {
            required: 'Hãy nhập password',
            minlength: 'Bạn phải nhập tối thiểu 6 ký tự',
            maxlength: 'Bạn chỉ được nhập tối đa 20 ký tự'
          },
         }
      });

    });
  }

  login() {
    this.submitted = true;
    this.loading = true;
    this.authService.login(this.loginForm.value.username , this.loginForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          localStorage.setItem('ACCESS_TOKEN', data.accessToken);
          const roleList = data.roles;
          for (const role of roleList) {
            if (role.authority === 'ROLE_ADMIN') {
              this.returnUrl = "/admin/question";
            }else {
              this.returnUrl= "/home"
            }
          }
          this.router.navigate([this.returnUrl]).finally(() => {
            alert("Đăng nhập thành công")
          });
        },
        () => {
         alert("Không thể đăng nhập")
        });
  }
}
