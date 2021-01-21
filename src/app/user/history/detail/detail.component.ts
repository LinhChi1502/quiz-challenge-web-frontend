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
  currentExam: Exam = {
    id: 1,
    name: "kiem tra Toan",
    countDown: 10,
    // date: null,
    examQuestions: [
      {
        id: 2,
        question: {
          id: 2,
          title: "tam giac vuong co 1 goc vuong ?",
          active: true,
          category: {
            id: 1,
            name: "math"
          },
          type: {
            id: 2,
            name: "trueOrFalse"
          },
          answers: [
            {
              id: 5,
              content: "true",
              correct: true
            },
            {
              id: 6,
              content: "false",
              correct: false
            }
          ]
        }
      },
    ]
  };
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
