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
    id:0,
    content: '',
    correct:true
  };



  answers: Answer[] = [];

  question: Question = {
    id:0,
    active:true,
    category: {
      id: null
    },
    type:{
      id:3
    },
    title:'',
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

  }
  createNewAnswer() {
    this.answerService.createNewAnswer(this.answer).subscribe(answer => this.answer = answer);
  }

  addAnswerToArray() {
    this.createNewAnswer();
    console.log(this.answer);
    this.answers.push(this.answer);
    console.log(this.answers);
  }
}
