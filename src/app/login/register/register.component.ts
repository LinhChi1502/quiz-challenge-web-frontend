import { Component, OnInit } from '@angular/core';
import {AppUser} from "../../model/app-user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  successMessage = '';
  failMessage = '';
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    fullname: new FormControl('', [Validators.required, Validators.minLength(2)])
  });


  constructor(private userService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  register() {
    const user = this.setNewUser();
    this.userService.register(user).subscribe(() => {
      alert('Đăng ký thành công');
      this.registerForm.reset();
      this.router.navigate(['/login']);
    }, err => {
      console.log(err);
    });
    console.log(user);
  }

  private setNewUser() {
    const user: AppUser = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      // @ts-ignore
      confirmPassword: this.registerForm.value.confirmPassword,
      fullname: this.registerForm.value.fullname
    };
    return user;
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }
}
