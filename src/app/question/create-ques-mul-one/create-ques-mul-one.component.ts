import {Component, OnInit} from '@angular/core';
import {Question} from '../../model/question';
import {Category} from '../../model/category';
import {Answer} from '../../model/answer';
import {QuestionService} from '../../service/question/question.service';
import {CategoryService} from '../../service/category/category.service';
import {AnswerService} from '../../service/answer/answer.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-ques-mul-one',
  templateUrl: './create-ques-mul-one.component.html',
  styleUrls: ['./create-ques-mul-one.component.scss']
})
export class CreateQuesMulOneComponent implements OnInit {
questions: any = [];
  question: Question = {
    category: {
      id: null
    },

    type: {
      id: 1
    },

    answers: [
      {
        id: null
      },
      {
        id: null
      },
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

  array = ['A', 'B', 'C', 'D'];

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
    this.question.type.id = 1;
    this.question.active = true;
    for (let i = 0; i < this.questions.length; i++) {
      if(this.questions[i].type.id ==1 && this.questions[i].title == this.question.title){
        alert("This question existed!");
        this.router.navigate(['/admin/question/create-ques-mul-one'])
        break;
      }
    }
    this.questionService.createNewQuestion(this.question).subscribe(() => alert('Success'),
      () => alert('Fail'));
    this.question = {};
  }

  createAnswer(event: any, index: number) {
    this.question.answers[index].content = event.target.value;
  }


  chooseCorrectAnswer(event: any, index: number) {
    for (let i = 0; i < this.question.answers.length; i++) {
      this.question.answers[i].correct = false;
    }
    this.question.answers[index].correct = true;
  }
  getAllQuestions() {
    return this.questionService.getAllQuestion().subscribe(value => {
      this.questions = value;
    })
  }
}
