
import {Question} from '../../../model/question';
import {Category} from '../../../model/category';
import {Type} from '../../../model/type';
import {QuestionService} from '../../../service/question/question.service';
import {CategoryService} from '../../../service/category/category.service';
import {TypeService} from '../../../service/type/type.service';
import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {DataService} from '../../../data.service';
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'app-question-list2',
  templateUrl: './question-list2.component.html',
  styleUrls: ['./question-list2.component.scss']
})
export class QuestionList2Component implements OnInit {
  currentQuestion:any;

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
              private typeService: TypeService,
              private dataService:DataService) {



  }

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


  andQuestionToExam($event: MouseEvent, i: number) {

    this.currentQuestion=this.questions[i];
    this.messageEvent.emit(this.currentQuestion);

  }

  @Output() messageEvent = new EventEmitter<any>();









}
