import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../../service/question/question.service';
import {ExamService} from '../../service/exam/exam.service';

@Component({
  selector: 'app-detail-user-exam',
  templateUrl: './detail-user-exam.component.html',
  styleUrls: ['./detail-user-exam.component.scss']
})
export class DetailUserExamComponent implements OnInit {

  // exam: Exam = {};
  // @ts-ignore
  id: number;
  questions: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private questService: QuestionService,
              private examService: ExamService) {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit(): void {
    this.questService.getAllQuestionByExamId(this.id).subscribe((value) => {
      console.log(this.id)
      console.log(value);
      this.questions = value
    })

    this.questService.getCurrentUserAnswer()


  }





}
