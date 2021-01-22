import { Component, OnInit } from '@angular/core';
import {ExamService} from "../../../service/exam/exam.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserExamService} from "../../../service/userExam/user-exam.service";
import {Exam} from "../../../model/exam";
import {UserAnswer} from "../../../model/user-answer";
import {UserExam} from "../../../model/user-exam";
import {UserAnswerService} from "../../../service/userAnswer/user-answer.service";
import {Answer} from "../../../model/answer";

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
  correctAnswer: UserAnswer = {};
  correctAnswers: UserAnswer[] = [];
  userExam: UserExam = {};
  multiAnswer: Answer[] = [];

  constructor(private examService: ExamService, private router: Router,
              private activatedRoute: ActivatedRoute, private userExamsService: UserExamService,
              private userAnswerService: UserAnswerService) {
    this.activatedRoute.paramMap.subscribe(async result =>{
      // @ts-ignore
      await (this.idDetail = +result.get('id'));
      // console.log(this.idDetail);
      await this.userExamsService.getUserExamById(this.idDetail).subscribe(result =>{
        this.currentExam = result.exam;
        console.log(this.currentExam);
        this.getCorrectAnswers();
      });
      await this.userExamsService.countMark(this.idDetail).subscribe(result => {
        this.userExam.mark = result;
      })
      await this.userAnswerService.getUserAnswersByUserExamId(this.idDetail).subscribe( result => {
        this.userAnswers = result;
        console.log(this.userAnswers);
      })
    })
  }

  ngOnInit(): void {

  }

  getCorrectAnswers(){
    for (let i = 0; i < this.currentExam.examQuestions.length; i++) {
      for (let j = 0; j < this.currentExam.examQuestions[i].question.answers.length; j++) {
        if (this.currentExam.examQuestions[i].question.answers[j].correct == true){
          this.correctAnswer.questionIndex = this.currentExam.examQuestions[i].question.id;
          this.correctAnswer.content = this.currentExam.examQuestions[i].question.answers[j].content;
          // @ts-ignore
          this.correctAnswers.push(this.correctAnswer);
          this.correctAnswer = {};
        }
      }
    }
  }

  checkMulti(userAnswer: UserAnswer){
    for (let i = 0; i < this.correctAnswers.length; i++) {
      if (userAnswer.content == this.correctAnswers[i].content){
        return true;
      }
    }
    return false;
  }

  backToList() {
    this.router.navigate([`/history/list`]);
  }
}
