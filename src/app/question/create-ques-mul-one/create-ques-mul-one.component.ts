import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../../service/question/question.service";
import {Question} from "../../model/question";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category/category.service";
import {Answer} from "../../model/answer";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-ques-mul-one',
  templateUrl: './create-ques-mul-one.component.html',
  styleUrls: ['./create-ques-mul-one.component.scss']
})
export class CreateQuesMulOneComponent implements OnInit {
categoryList: Category[]=[];
  // @ts-ignore
  answer1: Answer = {
    id: 0,
    content: '',
    // @ts-ignore
    correct: false
  };
  answer2: Answer = {
    id: 0,
    content: '',
    // @ts-ignore
    correct: false
  };
  answer3: Answer = {
    id: 0,
    content: '',
    // @ts-ignore
    correct: false
  };
  answer4: Answer = {
    id: 0,
    content: '',
    // @ts-ignore
    correct: false
  };

  typeCheckBox = 1;
  typeSelect = 0;

  question: Question = {
    id: 0,
    title: '',
    type: -1,
    active: true,
    category: {
      id: 0
    },
    answers: [this.answer1, this.answer2, this.answer3, this.answer4]
  };
  message = '';
  // @ts-ignore
  questionForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    answer1: new FormControl(''),
    answer2: new FormControl(''),
    answer3: new FormControl(''),
    answer4: new FormControl(''),
    category: new FormControl(''),
    correct: new FormControl(''),
  });
  private formDirective: any;
  cateadd = "/admin/categories/add" ;
  constructor(private fb: FormBuilder,
              private service: QuestionService,
              private router: Router,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getcategoryList();
  }
  submit() {
    debugger // @ts-ignore
      this.createQuestion();

  }

  selectedA(): void{
    debugger
    this.answer1.correct = !this.answer1.correct;
  }
  selectedB(): void{
    this.answer2.correct = !this.answer2.correct;
  }
  selectedC(): void{
    this.answer3.correct = !this.answer3.correct;
  }
  selectedD(): void{
    this.answer4.correct = !this.answer4.correct;
  }
  cancel() {
    this.router.navigate(['admin/questions/list'])
  }
  createQuestion() {
    const question = {
      title: this.questionForm.value.title,
      answers: [this.questionForm.value.answer1, this.questionForm.value.answer2,
        this.questionForm.value.answer3,this.questionForm.value.answer4],
      category: {
        id: this.questionForm.value.category
      },
      active: true,
      type: {
        id: 1
      },
    }
    console.log(question);
    this.service.insertQuestions(question)
      .subscribe(() => {
        this.message = 'Success!';
      });
  }

  //id?: number;
  //   active?: boolean;
  //   title?: string;
  //   category?: any;
  //   type?: any;
  //   answers?: any;
  getcategoryList(){
    this.categoryService.getAllCategories().subscribe(categoryList =>{
      this.categoryList= categoryList;
    })
  };
}
