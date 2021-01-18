import {Component, OnInit} from '@angular/core';
import {Question} from '../../model/question';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../../service/question/question.service';
import {Answer} from '../../model/answer';
import {AnswerService} from '../../service/answer/answer.service';
import {any} from 'codelyzer/util/function';
import {EditInputQuestService} from '../../service/question/edit-input-quest.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {

  answers: any[] = [];

  question: Question = {
    title: '',
    category: {
      id: 0
    },
    type: {
      id: 0,
    },
    answers: any
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

  onChangeValue: string = '';

  constructor(public categoryService: CategoryService,
              public questionService: QuestionService,
              public activatedRoute: ActivatedRoute,
              public answerService: AnswerService,
              public editInputQuestService: EditInputQuestService) {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');

      this.questionService.getQuestionById(this.id).subscribe(value => {
          this.question.id = value.id;
          this.question.title = value.title;
          this.question.type = value.type;
          this.question.answers = value.answers;
          this.question.category = value.category;
          this.question.active = value.active;
          if (this.question.type.id === 3) {
            for (let i = 0; i < this.question.answers.length; i++) {
              this.deleteAnswer(this.question.answers[i].id);
            }
          }
        }
      );


    });
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  getQuestionById(id: number) {
    this.questionService.getQuestionById(id).subscribe(question => {
        this.question = question;
      }
    );
  }

  editQuestion(id: number) {
    this.question.answers = [];
    for (let i = 0; i < this.answers.length; i++) {
      this.question.answers.push(this.answers[i]);
    }
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
    this.question.answers[index].content = event.target.value;
  }


  deleteAnswer(id: number) {
    this.answerService.deleteAnswer(id).subscribe(() => console.log('a'));
  }

  createNewAnswer() {
    // this.answer.content = this.nextAnswer.content;
    let answer1 = {
      id: null,
      content: '',
      correct: true
    };
    // @ts-ignore
    answer1.content = this.onChangeValue;
    // @ts-ignore
    this.answerService.createNewAnswer(this.answer).subscribe(answer => answer1 = answer);
    // @ts-ignore
    this.answer = answer1;
  }

  addAnswerToArray() {
    this.createNewAnswer();
    this.answers.push(this.answer);
  }

  getValue(event: any) {
    this.onChangeValue = event.target.value;
    event.target.value = '';
  }
}
