import {Component, OnInit} from '@angular/core';
import {Question} from '../../model/question';
import {Category} from '../../model/category';
import {Answer} from '../../model/answer';
import {QuestionService} from '../../service/question/question.service';
import {CategoryService} from '../../service/category/category.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-question-truefalse',
  templateUrl: './create-question-truefalse.component.html',
  styleUrls: ['./create-question-truefalse.component.scss']
})
export class CreateQuestionTruefalseComponent implements OnInit {
  currentIndex: Number = 0;
  questions: any = [];
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

  array = ['True', 'False'];

  constructor(private questionService: QuestionService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCategories();
    for (let i = 0; i < this.question.answers.length; i++) {
      this.question.answers[i].correct = false;
    }
    this.getAllQuestions();
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  createNewQuestion() {
    this.question.active = true;
    let isExist = false;
    for (let i = 0; i < this.questions.length; i++) {
      if(this.questions[i].type.id ==2 && this.questions[i].title == this.question.title){
        isExist = true;
        break;
      }
    }
    if(isExist){
      alert("This question existed!");
    }else {
      this.questionService.createNewQuestion(this.question).subscribe(() => alert('Success'),
        () => alert('Fail'));
    }
    this.question = {
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
      ]};
  }

  createAnswer(event: any, index: number) {
    this.question.answers[index].content = event.target.value;
    this.chooseCorrectAnswer(event, index);
  }


  chooseCorrectAnswer(event: any, index: number) {

    for (let i = 0; i < this.question.answers.length; i++) {
      this.question.answers[i].correct = false;
    }
    this.question.answers[index].correct = true;
    this.question.answers[index].content = event.target.value;

  }
  getAllQuestions() {
    return this.questionService.getAllQuestion().subscribe(value => {
      this.questions = value;
    })}
}
