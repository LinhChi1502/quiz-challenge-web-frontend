import { Component, OnInit } from '@angular/core';
import {AppUser} from '../../model/app-user';
import {UserService} from '../../service/user/user.service';
import {ActivatedRoute} from '@angular/router';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  appUsers: any =[]

  appUser: AppUser = {
    id: 0,
    roles: any,
    username: '',
    password: '',
    fullname: ''
  };


  // @ts-ignore
  id: number;

  totalRecords: string = '';
  page: number = 1;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((users) => {
      this.appUsers = users;
      // @ts-ignore
      this.totalRecords = users.length;
    });
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe(value => {
      this.appUser.id = value.id;
      this.appUser.roles = value.roles;
      this.appUser.username = value.username;
      this.appUser.fullname = value.fullname;
      this.appUser.password = value.password;
    });
  }


  addUser(id: any) {
    this.getUserById(id);
    if (this.appUser.roles == 2) {
      alert('fail');
    } else {
      if (this.appUser.roles[0].name == 'ROLE_ADMIN') {
        alert('fail');
      } else if (this.appUser.roles[0].name == 'ROLE_USER') {
        if (confirm('Are you sure?')) {
          this.userService.addUser(id, this.appUser).subscribe(value => {
            this.appUser.id = value.id;
            this.appUser.roles = value.roles;
            this.appUser.username = value.username;
            this.appUser.fullname = value.fullname;
            this.appUser.password = value.password;
            this.getAllUsers();
          });
        }
      }
    }
  }

}
