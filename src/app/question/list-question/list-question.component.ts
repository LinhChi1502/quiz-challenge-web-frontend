import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {Question} from '../../model/question';
import {Type} from '../../model/type';
import {QuestionService} from '../../service/question/question.service';
import {CategoryService} from '../../service/category/category.service';
import {TypeService} from '../../service/type/type.service';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.scss']
})
export class ListQuestionComponent implements OnInit {
  questions: Question[] = [];
  categories: Category[] = [];
  types: Type[] = [];
  selectedCategory: string = '';
  selectedType: string = '';
  title: string = '';
  totalRecords: string = '';
  page:number = 1;
  constructor(private questionService:QuestionService,
              private categoryService: CategoryService,
              private typeService: TypeService) { }

  ngOnInit(): void {
    this.getAllQuestions();
    this.getAllCategories();
    this.getAllTypes();
  }
  getAllQuestions() {
    this.questionService.getAllQuestion().subscribe((questions) => {
      this.questions = questions;
      // @ts-ignore
      this.totalRecords = questions.length;
    });
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  getAllTypes() {
    this.typeService.getAllTypes().subscribe((types) => {
      this.types = types;
    });
  }

  searchQuestion() {
    this.questionService.searchQuestions(this.title, this.selectedType, this.selectedCategory)
      .subscribe(questions => this.questions = questions);
  }
}
