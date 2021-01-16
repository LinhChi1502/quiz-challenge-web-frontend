import { Component, OnInit } from '@angular/core';
import {Question} from '../../model/question';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../../service/question/question.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {

  question: Question = {
    category: {
      id: 0
    },

    type: {
      id: 0
    },

    answers: [
      {
        id: 0
      }
    ]
  };

  categories: Category[] = [];

  // @ts-ignore
  id: number;
  constructor( private categoryService: CategoryService,
               private questionService:QuestionService,
               private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.questionService.getQuestionById(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllCategories();
    this.getQuestionById(this.id);
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  getQuestionById(id: number) {
    this.questionService.getQuestionById(id).subscribe(question => this.question =  question);
  }
}
