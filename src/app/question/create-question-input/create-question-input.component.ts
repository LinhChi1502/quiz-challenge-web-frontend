import {Component, OnInit} from '@angular/core';
import {Question} from '../../model/question';
import {Category} from '../../model/category';
import {Answer} from '../../model/answer';
import {QuestionService} from '../../service/question/question.service';
import {CategoryService} from '../../service/category/category.service';
import {AnswerService} from '../../service/answer/answer.service';

@Component({
  selector: 'app-create-question-input',
  templateUrl: './create-question-input.component.html',
  styleUrls: ['./create-question-input.component.scss']
})
export class CreateQuestionInputComponent implements OnInit {
  answer: Answer = {
    content: '',
    correct: true
  };

  nextAnswer: Answer = {};

  answers: Answer[] = [];

  question: Question = {

    active: true,
    category: {
      id: null
    },
    type: {
      id: 3
    },
    title: '',
    answers: []
  };

  categories: Category[] = [];

  constructor(private questionService: QuestionService,
              private categoryService: CategoryService,
              private answerService: AnswerService) {
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  createNewQuestion() {
    for (let i = 0; i < this.answers.length; i++) {
      this.question.answers.push(this.answers[i]);
    }
    this.question.active = true;
    this.questionService.createNewQuestion(this.question).subscribe(() => alert('Success'),
      () => alert('Fail'));
  }

  createNewAnswer() {
    this.answer.content = this.nextAnswer.content;
    this.answerService.createNewAnswer(this.answer).subscribe(answer => this.answer = answer);
  }

  addAnswerToArray() {
    this.createNewAnswer();
    this.answers.push(this.answer);
    this.nextAnswer.content = '';
  }
}
