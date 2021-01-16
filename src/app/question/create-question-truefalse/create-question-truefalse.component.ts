import { Component, OnInit } from '@angular/core';
import {Question} from '../../model/question';
import {Category} from '../../model/category';
import {Answer} from '../../model/answer';
import {QuestionService} from '../../service/question/question.service';
import {CategoryService} from '../../service/category/category.service';

@Component({
  selector: 'app-create-question-truefalse',
  templateUrl: './create-question-truefalse.component.html',
  styleUrls: ['./create-question-truefalse.component.scss']
})
export class CreateQuestionTruefalseComponent implements OnInit {

  question: Question = {
    category: {
      id: null
    },

    type: {
      id: 2
    },

    answers: [
      {
        id: null
      },
      {
        id: null
      }
      ]
  };

  categories: Category[] = [];

  answer: Answer = {};

  array = ['True', 'False']

  constructor(private questionService: QuestionService,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories();
    for (let i = 0; i < this.question.answers.length; i++) {
      this.question.answers[i].correct=false;
    }
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  createNewQuestion() {
    this.question.active = true;
    this.questionService.createNewQuestion(this.question).subscribe(() => alert('Success'),
      () => alert('Fail'));
    this.question = {};
  }

  createAnswer(event: any, index: number) {
    this.question.answers[index].content = event.target.value;
    this.chooseCorrectAnswer(event,index);
  }


  chooseCorrectAnswer(event:any, index:number) {
    for (let i = 0; i < this.question.answers.length; i++) {
      this.question.answers[i].correct = false;
    }
    this.question.answers[index].correct=true;
  }
}
