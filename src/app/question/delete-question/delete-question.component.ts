import { Component, OnInit } from '@angular/core';
import {Question} from '../../model/question';
import {QuestionService} from '../../service/question/question.service';
import {ActivatedRoute} from '@angular/router';
import {Answer} from '../../model/answer';

@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.scss']
})
export class DeleteQuestionComponent implements OnInit {
  answers: Answer[] = [];

  question: Question = {
    title: '',

    category: {
      id: 0
    },

    type: {
      id: 0
    },
  };

  // @ts-ignore
  id: number;

  constructor(private questionService: QuestionService,
              private activatedRoute: ActivatedRoute,
              ) {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.questionService.getQuestionById(this.id);
    });
  }

  ngOnInit(): void {
    this.getQuestionById(this.id);
  }

  getQuestionById(id: number) {
    this.questionService.getQuestionById(id).subscribe(question => this.question = question);
  }

  deleteQuestion(id: number) {
    if (confirm("Are you sure?")) {
      this.questionService.deleteQuestion(id).subscribe(() => alert("Success"), () => alert("Cau hoi da co trong bai thi"));
    }
  }

}
