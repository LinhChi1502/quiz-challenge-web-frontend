import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ExamService} from "../../../service/exam/exam.service";
import {Exam} from "../../../model/exam";
import {UserAnswer} from "../../../model/user-answer";

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

  constructor(private activatedRoute: ActivatedRoute, private examService: ExamService) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(async result => {
        // @ts-ignore
        await (this.id = +result.get('id'));
        await this.examService.getExamById(this.id).subscribe(receiveExam => {
          this.currentExam = receiveExam;
        })
      }
    )
  }


  submit() {
    //đang để cho vui
  }

  cancel() {
    //Cũng là để cho vui đã
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
      };
      this.answerArr = this.answerArr.filter(result => (result.questionIndex !== this.answerChoosed.questionIndex))
      this.answerArr.push(this.answerChoosed);
    } else if (question.type.name == 'fillInBank'){
      this.answerChoosed = {
        content: event.target.value,
        questionIndex: question.id,
      };
      this.answerArr = this.answerArr.filter(result => (result.questionIndex !== this.answerChoosed.questionIndex))
      this.answerArr.push(this.answerChoosed);
      // console.log(event.target.value.toString());
    } else {
      this.answerChoosed = {
        content: answer.content,
        questionIndex: question.id,
      }
      if (event.checked){
        this.answerArr.push(this.answerChoosed);
      } else {
        this.answerArr = this.answerArr.filter(result => (result.content !== this.answerChoosed.content));
      }
      // console.log(event.checked);
    }
    console.log(this.answerArr);
  }
}
