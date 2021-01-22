import { Component, OnInit } from '@angular/core';
import {AppUser} from '../../model/app-user';
import {UserExam} from '../../model/user-exam';
import {UserService} from '../../service/user/user.service';
import {ActivatedRoute} from '@angular/router';
import {ExamService} from '../../service/exam/exam.service';
import {UserExamService} from '../../service/userExam/user-exam.service';
import {any} from 'codelyzer/util/function';

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

  // exams: Exam[] = [];
  // exam: Exam = {};
  userExams: UserExam[] = [];
  // userExam: UserExam = {};
  // @ts-ignore
  id: number;

  totalRecords: string = '';
  page: number = 1;
  // @ts-ignore
  marks = [];

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private examService: ExamService,
              private userExamService: UserExamService) {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');


      this.notNullUserExamList(this.id);

      // this.getExamByUserId(this.id);
    });
  }

  ngOnInit(): void {
  }

  // getExamByUserId(id: number) {
  //   this.examService.getExamByUserId(id).subscribe((exams) => {
  //     this.exams = exams;
  //     // @ts-ignore
  //     this.totalRecords = exams.length;
  //   });
  // }

  // getAllUserExamsByUserId(id: number) {
  //   this.userExamService.getAllUserExamsByUserId(id).subscribe((userExams) => {
  //     this.userExams = userExams;
  //     for (let i = 0; i < this.userExams.length; i++) {
  //       this.userExamService.countMark(this.userExams[i].id).subscribe(mark => {
  //           // @ts-ignore
  //           this.userExams[i].mark = mark;
  //         }
  //       );
  //     }
  //   });
  // }

  notNullUserExamList(id: number) {
    this.userExamService.notNullUserExamList(id).subscribe((userExams) => {
      this.userExams = userExams;
      for (let i = 0; i < this.userExams.length; i++) {
        this.userExamService.countMark(this.userExams[i].id).subscribe(mark => {
            // @ts-ignore
            this.userExams[i].mark = mark;
          }
        );
      }
    })
  }



}
