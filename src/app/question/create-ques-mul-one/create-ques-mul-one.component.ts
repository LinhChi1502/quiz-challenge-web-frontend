import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../../service/question/question.service";
import {Question} from "../../model/question";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category/category.service";
import {Answer} from "../../model/answer";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
    status: false
  };
  answer2: Answer = {
    id: 0,
    content: '',
    // @ts-ignore
    status: false
  };
  answer3: Answer = {
    id: 0,
    content: '',
    // @ts-ignore
    status: false
  };
  answer4: Answer = {
    id: 0,
    content: '',
    // @ts-ignore
    status: false
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
  questionForm: FormGroup;
  private formDirective: any;
  cateadd = "/admin/categories/add" ;
  constructor(private fb: FormBuilder,
              private service: QuestionService,
              private router: Router,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getcategoryList();
    this.createForm();
  }
  submit() {
    debugger // @ts-ignore
    console.log("ko vào")
      this.question.title = this.questionForm.get('title').value;
      console.log(this.question.title);
      this.answer1.content = this.questionForm.get('answer1').value;
      console.log(this.answer1.content);
      this.answer2.content = this.questionForm.get('answer2').value;
      console.log(this.answer2.content);
      this.answer3.content = this.questionForm.get('answer3').value;
      console.log(this.answer3.content);
      this.answer4.content = this.questionForm.get('answer4').value;
      console.log(this.answer4.content);
      this.question.category = this.questionForm.get('category').value;
      this.question.type = 1;
      this.question.active = true;
      this.service.insertQuestions(this.question)
        .subscribe(() => {
          this.message = 'Success!';
        });
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
  createForm() {
    this.questionForm = this.fb.group({
      title: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      answer4: ['', Validators.required],
      category: ['', Validators.required]
    });
  }
  getcategoryList(){
    this.categoryService.getAllCategories().subscribe(categoryList =>{
      this.categoryList= categoryList;
    })
  };
}
