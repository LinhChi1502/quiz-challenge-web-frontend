import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {Question} from '../../model/question';
import {QuestionService} from '../../service/question/question.service';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.scss']
})
export class ListQuestionComponent implements OnInit {
  questions: Question[] = [];
  totalRecords: string = '';
  page:number = 1;
  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
    this.getAllQuestions();
  }
  getAllQuestions() {
    this.questionService.getAllQuestion().subscribe((questions) => {
      this.questions = questions;
      // @ts-ignore
      this.totalRecords = questions.length;
    });
  }
}
