import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from "@angular/router";
import {ExamService} from "../../../service/exam/exam.service";
import {Exam} from "../../../model/exam";
import {UserAnswer} from "../../../model/user-answer";
import {UserExam} from "../../../model/user-exam";
import {AuthService} from "../../../service/auth/auth.service";
import {AppUser} from "../../../model/app-user";
import {UserExamService} from "../../../service/userExam/user-exam.service";
import {PlatformLocation} from "@angular/common";

@Component({
  selector: 'app-process-exam',
  templateUrl: './process-exam.component.html',
  styleUrls: ['./process-exam.component.scss']
})
export class ProcessExamComponent implements OnInit {

  id!: number;
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
  answerArr: any [] = [];
  answerChoosed!: UserAnswer;
  currentUser: AppUser = {};
  currentUserExam: UserExam = {};
  allUserExam: UserExam[] = [];

  constructor(private activatedRoute: ActivatedRoute, private examService: ExamService,
              private authService: AuthService, private userExamService: UserExamService,
              private router: Router, location: PlatformLocation) {
    this.currentUser.id = this.authService.currentUserValue.id;
    this.currentUserExam.appUser = this.currentUser;
    // location.onPopState(() => {
    //   if (confirm("Are you sure want to go back?? Result will be delete!!") == true){
    //     // @ts-ignore
    //     this.userExamService.deleteNewestUserExamById(this.currentUser.id).subscribe();
    //   }
    // })
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(async result => {
        // @ts-ignore
        await (this.id = +result.get('id'));
        await this.examService.getExamById(this.id).subscribe(receiveExam => {
          this.currentExam = receiveExam;
        })
      }
    );
    this.userExamService.submitUserExam(this.currentUserExam).subscribe(() => {
      this.userExamService.getAllUserExams().subscribe( async result => {
        for (let i = 0; i < result.length; i++) {
          if (result[i].appUser.id == this.currentUser.id){
            this.allUserExam.push(result[i])
          }
        }
        let ids = this.allUserExam.map((id) => id.id);
        // @ts-ignore
        let maxId = Math.max.apply(null, ids);
        this.currentUserExam.id = maxId;
        console.log(maxId);
      })
    });
  }


  submit() {
    //Cái này đang để cho vui
    if (confirm("Are you sure submit the Quiz??") == true){
      this.currentUserExam.exam = this.currentExam;
      this.currentUserExam.appUser = this.currentUser;
      this.currentUserExam.userAnswers = this.answerArr;
      this.userExamService.submitUserAnswer(this.answerArr).subscribe();
      this.userExamService.submitUserExam(this.currentUserExam).subscribe();
      this.router.navigate([`history/detail/${this.currentUserExam.id}`])
    }
    console.log(this.currentUserExam);
  }

  cancel() {
    //Cũng là để cho vui đã
    if (confirm("Are you sure abort the Quiz?? Current result will not be saved!") == true){
      // @ts-ignore
      this.router.navigate(['examination/list']);
    }
  }

  selectAnswers(answer: any, question: any, i: number, event: any) {
    //Cái này để xử lý chọn đáp án
    // console.log(answer);
    // console.log(type);
    // console.log(i);
    if (question.type.name == 'multipleChoice' || question.type.name == 'trueOrFalse'){
      this.answerChoosed = {
        content: answer.content,
        questionIndex: question.id,
        userExam: {id: this.currentUserExam.id}
      };
      this.answerArr = this.answerArr.filter(result => (result.questionIndex !== this.answerChoosed.questionIndex))
      this.answerArr.push(this.answerChoosed);
    } else if (question.type.name == 'fillInBank'){
      this.answerChoosed = {
        content: event.target.value,
        questionIndex: question.id,
        userExam: {id: this.currentUserExam.id}
      };
      this.answerArr = this.answerArr.filter(result => (result.questionIndex !== this.answerChoosed.questionIndex))
      this.answerArr.push(this.answerChoosed);
      // console.log(event.target.value.toString());
    } else {
      this.answerChoosed = {
        content: answer.content,
        questionIndex: question.id,
        userExam: {id: this.currentUserExam.id}
      }
      if (event.checked){
        this.answerArr.push(this.answerChoosed);
      } else {
        this.answerArr = this.answerArr.filter(result => (result.content !== this.answerChoosed.content));
      }
      // console.log(event.checked);
    }
    // console.log(this.answerArr);
    // console.log(this.authService.currentUserValue);
  }
}
