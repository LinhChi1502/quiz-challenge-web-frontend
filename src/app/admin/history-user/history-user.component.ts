import { Component, OnInit } from '@angular/core';
import {AppUser} from '../../model/app-user';
import {any} from 'codelyzer/util/function';
import {UserService} from '../../service/user/user.service';
import {ActivatedRoute} from '@angular/router';
import {UserExamService} from '../../service/userExam/user-exam.service';

@Component({
  selector: 'app-history-user',
  templateUrl: './history-user.component.html',
  styleUrls: ['./history-user.component.scss']
})
export class HistoryUserComponent implements OnInit {

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
              private activatedRoute: ActivatedRoute,
              private userExamService: UserExamService) {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit(): void {
  }

}
