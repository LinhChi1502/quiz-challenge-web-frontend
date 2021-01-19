import {Component, OnInit} from '@angular/core';
import {Question} from '../../model/question';
import {Category} from '../../model/category';
import {Answer} from '../../model/answer';
import {QuestionService} from '../../service/question/question.service';
import {CategoryService} from '../../service/category/category.service';
import {AnswerService} from '../../service/answer/answer.service';
import {Router} from "@angular/router";

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

  answers: Answer[] = [];
questions : any =[];
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

  onChangeValue: string = '';

  constructor(private questionService: QuestionService,
              private categoryService: CategoryService,
              private answerService: AnswerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllQuestions();
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
    for (let i = 0; i < this.questions.length; i++) {
      if(this.questions[i].type.id ==3 && this.questions[i].title == this.question.title){
        alert("This question existed!");
        this.router.navigate(['/admin/question',{outlets:{question:['create-question-input']}}])
        break;
      }
    }
    this.questionService.createNewQuestion(this.question).subscribe(question => {
        this.question = question;
        alert('Success');
      },
      () => alert('Fail'));
    console.log(this.question);
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
  getAllQuestions() {
    return this.questionService.getAllQuestion().subscribe(value => {
      this.questions = value;
    })}
}
