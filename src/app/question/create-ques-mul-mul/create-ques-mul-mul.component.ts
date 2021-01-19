import {Component, OnInit} from '@angular/core';
import {Question} from '../../model/question';
import {Category} from '../../model/category';
import {QuestionService} from '../../service/question/question.service';
import {CategoryService} from '../../service/category/category.service';
import {AnswerService} from '../../service/answer/answer.service';
import {Answer} from '../../model/answer';
import {forEachComment} from "tslint";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-ques-mul-mul',
  templateUrl: './create-ques-mul-mul.component.html',
  styleUrls: ['./create-ques-mul-mul.component.scss']
})
export class CreateQuesMulMulComponent implements OnInit {
questions : any = [];
  question: Question = {
    category: {
      id: null
    },

    type: {
      id: 4
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

  array = ['A', 'B', 'C', 'D']


  constructor(private questionService: QuestionService,
              private categoryService: CategoryService,
              private answerService: AnswerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCategories();
    for (let i = 0; i < this.question.answers.length; i++) {
        this.question.answers[i].correct=false;
    };
    this.getAllQuestions();

  }

  createNewQuestion() {
    this.question.type.id = 4;
    this.question.active = true;
    for (let i = 0; i < this.questions.length; i++) {
      if(this.questions[i].type.id ==4 && this.questions[i].title == this.question.title){
        alert("This question existed!");
        this.router.navigate(['/admin/question/create-ques-mul-mul'])
      }
    }
    this.questionService.createNewQuestion(this.question).subscribe(() => alert('Success'),
      () => alert('Fail'));
    this.question = {};

  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  createAnswer(event: any, index: number) {
    this.question.answers[index].content = event.target.value;
  }


  chooseCorrectAnswer(event:any, index:number) {
    this.question.answers[index].correct=!this.question.answers[index].correct;
  }
  getAllQuestions(){
    return this.questionService.getAllQuestion().subscribe(value => {
      this.questions =value;
    })
  }
}
