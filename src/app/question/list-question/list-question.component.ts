import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {Question} from '../../model/question';
import {QuestionService} from '../../service/question/question.service';
import {CategoryService} from '../../service/category/category.service';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.scss']
})
export class ListQuestionComponent implements OnInit {
  questions: Question[] = [];
  categories: Category[] = [];
  selectedCategory: string = '';
  totalRecords: string = '';
  page:number = 1;
  constructor(private questionService:QuestionService,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllQuestions();
    this.getAllCategories();
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

  searchCategory() {}
}
