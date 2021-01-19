import { Component, OnInit } from '@angular/core';
import {AppUser} from "../../model/app-user";
import {UserToken} from "../../model/user-token";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth/auth.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {UserService} from "../../service/user/user.service";
import {Subscription} from "rxjs";
declare var $: any;
@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.scss']
})
export class ChangepassComponent implements OnInit {
  currentUser: AppUser = {};
  // @ts-ignore
  sub: Subscription ;
  currentUserToken: UserToken = {};
  username ='';
  fullname ='';
  newPasswordForm: FormGroup = new FormGroup({
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  constructor(private userServie: UserService,
              private router: Router,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService) {
    // @ts-ignore
    this.authService.currentUser.subscribe(
      currentUser => {
        this.currentUserToken = currentUser;
      }
    );
  }

  ngOnInit() {
    this.getUserProfile();
    $(document).ready(function() {
      $('#changpass').validate({
        rules: {
          password: {
            required: true,
            minlength: 6,
            maxlength: 20,
          },
          confirmPassword: {
            required: true,
            equalTo: '#password'
          }
        },
        messages: {
          password: {
            required: 'Hãy nhập password',
            minlength: 'Bạn phải nhập tối thiểu 6 ký tự',
            maxlength: 'Bạn chỉ được nhập tối đa 20 ký tự'
          },
          confirmPassword: {
            required: 'Hãy nhập lại mật khẩu',
            equalTo: 'Mật khẩu không khớp'
          }
        }
      });

    });
  }

  getUserProfile() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      const id = +paramMap.get('id');
      // @ts-ignore
      this.getUserProfileById(id);
    });
  }

  private getUserProfileById(id: string) {
    this.userServie.getUserProfile(id).subscribe(value => {
      this.currentUser = value;
      // @ts-ignore
      this.username = value.username;
      // @ts-ignore
      this.fullname = value.fullname;
    }, () => {
      console.log('Lỗi!');
    });
  }

  changePassword() {
    const user = this.setNewUser();
    // @ts-ignore
    this.userServie.newPassword(user, this.currentUserToken.id,this.currentUserToken.token).subscribe(() => {
      alert('Đổi mật khẩu thành công');
      this.newPasswordForm.reset();
      this.router.navigate(['/home']);
    }, err => {
      alert("không đổi được mật khẩu");
    });
  }

  private setNewUser() {
    const user: AppUser = {
      username: this.currentUserToken.username,
      password: this.newPasswordForm.value.password,
      fullname: this.currentUserToken.fullname
    };
    return user;
  }
}
