import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {ExamService} from '../../service/exam/exam.service';
import {Exam} from '../../model/exam';
import {QuestionService} from '../../service/question/question.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {

  examList: Exam[] = [];
  totalRecords: string = '';
  page: number = 1;
  id: number = 0;
  constructor(private examService: ExamService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      console.log(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.examService.getExamList().subscribe((respone) => {
      this.examList = respone;
      // @ts-ignore
      this.totalRecords = respone.length;
    });
  }
}
