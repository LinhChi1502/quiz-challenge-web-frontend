import { Component, OnInit } from '@angular/core';
import {Question} from '../../model/question';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {

  question: Question = {};

  categories: Category[] = [];

  // @ts-ignore
  id: number;
  constructor( private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories();
  }

}
