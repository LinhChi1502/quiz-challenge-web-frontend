import { Component, OnInit } from '@angular/core';
import {AppUser} from '../../model/app-user';
import {CategoryService} from '../../service/category/category.service';
import {UserService} from '../../service/user/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  users: AppUser[] = [];
  totalRecords: string = '';
  page:number = 1;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
      // @ts-ignore
      this.totalRecords = users.length;
    });
  }
}
