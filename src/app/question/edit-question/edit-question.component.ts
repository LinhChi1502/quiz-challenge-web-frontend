import {Component, OnInit} from '@angular/core';
import {Question} from '../../model/question';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../../service/question/question.service';
import {Answer} from '../../model/answer';
import {AnswerService} from '../../service/answer/answer.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {

  answers: any = [];

  question: Question = {
    title: '',
    category: {
      id: 0
    },
    type:  {
      id: null,
    },
    answers: []
  };

  categories: Category[] = [];

  // @ts-ignore
  id: number;
  trueAnswerIndex: any[] = [];

  answer: Answer = {
    content: '',
    correct: true
  };

  array = ['A', 'B', 'C', 'D'];
  arrayTF = ['True', 'False'];

  nextAnswer: Answer = {};

  constructor(private categoryService: CategoryService,
              private questionService: QuestionService,
              private activatedRoute: ActivatedRoute,
              private answerService: AnswerService) {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.questionService.getQuestionById(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllCategories();
    this.getQuestionById(this.id);
    console.log(this.question);
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  getQuestionById(id: number) {
    this.questionService.getQuestionById(id).subscribe(question => this.question = question);
  }

  editQuestion(id: number) {
    this.questionService.editQuestion(id, this.question).subscribe(() => alert('Success'),
      () => alert('Fail'));
  }

  changeAnswer(event: any, index: number) {
    this.question.answers[index].content = event.target.value;
  }

  chooseCorrectAnswerMulOne(event: any, index: number) {
    for (let i = 0; i < this.question.answers.length; i++) {
      this.question.answers[i].correct = false;
    }
    this.question.answers[index].correct = true;
  }

  chooseCorrectAnswerMulMul(event: any, index: number) {
    this.question.answers[index].correct = !this.question.answers[index].correct;
  }

  chooseCorrectAnswerTrueFalse(event: any, index: number) {
    for (let i = 0; i < this.question.answers.length; i++) {
      this.question.answers[i].correct = false;
    }
    this.question.answers[index].correct = true;
  }

  // createNewAnswer() {
  //   this.answer.content = this.nextAnswer.content;
  //   this.answerService.createNewAnswer(this.answer).subscribe(answer => this.answer = answer);
  // }

  deleteAnswer() {
    for (let i = 0; i < this.question.answers.length; i++) {
      this.answerService.deleteAnswer(this.question.answers[i].id).subscribe(answer => this.question.answers[i] = answer);
    }
  }

  // addAnswerToArray() {
  //   this.createNewAnswer();
  //   this.answers.push(this.answer);
  //   for (let i = 0; i < this.answers.length; i++) {
  //     this.question.answers.push(this.answers[i]);
  //   }
  //   this.nextAnswer.content = '';
  // }
}
