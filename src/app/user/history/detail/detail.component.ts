import { Component, OnInit } from '@angular/core';
import {ExamService} from "../../../service/exam/exam.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserExamService} from "../../../service/userExam/user-exam.service";
import {Exam} from "../../../model/exam";
import {UserAnswer} from "../../../model/user-answer";
import {UserExam} from "../../../model/user-exam";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  idDetail:any;
  currentExam!: Exam;
  userAnswers: UserAnswer[] = [];
  userAnswerIdArr = [];
  userExam!: UserExam;

  constructor(private examService: ExamService, private router: Router,
              private activatedRoute: ActivatedRoute, private userExamsService: UserExamService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(async result =>{
      // @ts-ignore
      await (this.idDetail = +result.get('id'));
      await this.userExamsService.getUserExamById(this.idDetail).subscribe(result =>{
        this.currentExam = result.exam;
      });
      this.userAnswers
    })
  }

}
