import {QuestionService} from '../../service/question/question.service';
import {TypeService} from '../../service/type/type.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../data.service';
import {Question} from '../../model/question';
import {ExamService} from '../../service/exam/exam.service';
import {Exam} from '../../model/exam';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss']
})
export class CreateExamComponent implements OnInit {
  constructor(private questionService: QuestionService,
              private examService: ExamService,
              private typeService: TypeService,
              private dataService: DataService,
              private router: Router) {
  }
  ngOnInit(): void {
  }

  selectTime:number=0;
  exam:Exam={};
  currentQuestion: any;
  questions: Question[] = [];
  check:Boolean = false;
  time: number[] = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];


  // @ts-ignore
  receiveMessage($event) {
    this.currentQuestion = $event;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].id == this.currentQuestion.id) {
        this.check=true;
        break;
      } else {
        this.check=false;
      }
    }
    if (this.check==false){
      this.questions.push(this.currentQuestion);
      console.log(this.questions);
    }
  }

  Submit($event: MouseEvent) {
    this.exam.examQuestions=this.questions;

    console.log(this.exam.countDown);
this.examService.saveExam(this.exam).subscribe(value =>{ alert("thanh cong");

    // @ts-ignore
    this.questionService.addQuestionListToExam(this.questions).subscribe(value =>
    {
      this.questions=value;
      console.log(value);
      this.router.navigate(['admin/exam'])
    })

  }
   ,error => alert("that bai")

);
  }

  REMOVE($event: MouseEvent, i: number) {
   this.questions.splice(i,1);

  }

}
