import { Component, OnInit } from '@angular/core';
import {AppUser} from "../../model/app-user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth/auth.service";
import {Router} from "@angular/router";
declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    fullname: new FormControl('')
  });
  isSubmitted = false;

  constructor(private  authService: AuthService,
              private router: Router) {
  }
  ngOnInit(): void {
    $(document).ready(function() {
      $('#register-form').validate({
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
          },
          confirmPassword: {
            required: true,
            equalTo: '#password'
          },
          fullname: {
            required: true,
            minlength: 6,
            maxlength: 20
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
          fullname: {
            required: 'Hãy nhập tên tài khoản',
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
  register(){
    this.isSubmitted = true;
    const  user: AppUser = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      fullname: this.registerForm.value.fullname
    };
    if(user.username !== "" && user.password !== "" && user.fullname !== ""){
      this.authService.register(user).subscribe( ()=> {
        this.registerForm.reset();
        alert("Đăng kí thành công");
        this.router.navigate(['/login']).finally(()=>{});
      })

    }else { alert("Đăng kí thất bại" )}
  }

}
