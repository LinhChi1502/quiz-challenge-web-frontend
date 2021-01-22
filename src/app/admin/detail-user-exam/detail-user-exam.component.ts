import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../../service/question/question.service';
import {ExamService} from '../../service/exam/exam.service';
import {AuthService} from '../../service/auth/auth.service';
import {UserToken} from '../../model/user-token';
import { Exam } from 'src/app/model/exam';

@Component({
  selector: 'app-detail-user-exam',
  templateUrl: './detail-user-exam.component.html',
  styleUrls: ['./detail-user-exam.component.scss']
})
export class DetailUserExamComponent implements OnInit {

  // exam: Exam = {};
  // @ts-ignore
  id: number;
  used:number=0;
  questions: any[] = [];
  userAnswers: any[] = [];
  currentUser: UserToken = {};
  exam:Exam={} ;


  constructor(private activatedRoute: ActivatedRoute,
              private questService: QuestionService,
              private authService: AuthService,
              private examService: ExamService) {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      // @ts-ignore
      this.id = paramMap.get('id');
      // @ts-ignore
      this.used=paramMap.get('id2');


    });

  }

  ngOnInit(): void {
    this.examService.getExamById(this.id).subscribe(value =>

    {

      this.exam.name=value.name;
      console.log(this.exam)
    })
    this.questService.toan_getAllQuestionByExamId(this.id).subscribe((value) => {
      value.forEach(value1 =>
        this.questions.push(value1)
      )
    });
    this.currentUser = this.authService.currentUserValue;
    // @ts-ignore
    this.questService.toan_getCurrentUserAnswer(this.used,this.id).subscribe((value) => {
        value.forEach(value1 =>{
            this.userAnswers.push(value1)
          }
        )
      }
    );
  }
}
