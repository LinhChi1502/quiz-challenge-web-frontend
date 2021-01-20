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
  answerArr: UserAnswer [] = [];
  answerChoosed!: UserAnswer;

  constructor(private activatedRoute: ActivatedRoute, private examService: ExamService) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(async result => {
        // @ts-ignore
        await (this.id = +result.get('id'));
        await this.examService.getExamById(this.id).subscribe(receiveExam => {
          this.currentExam = receiveExam;
          this.answerArr = new Array(this.currentExam.examQuestions.length);
          console.log(this.currentExam);
          console.log(this.answerArr);
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

  selectAnswers(answer: any, type: any, i: number, event: any) {
    //Cái này để xử lý chọn đáp án
    console.log(answer);
    console.log(type);
    console.log(i);
    if (type.name == 'multipleChoice' || type.name == 'trueOrFalse'){
      this.answerChoosed = {
        content: answer.content,
        questionIndex: i,
      };
    } else if (type.name == 'fillInBank'){
      this.answerChoosed = {
        content: event.target.value,
        questionIndex: i,
      };
      console.log(event.target.value.toString());
    }
    this.answerArr[i] = this.answerChoosed;
    console.log(this.answerArr);
  }
}
