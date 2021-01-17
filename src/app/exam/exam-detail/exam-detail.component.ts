import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {async} from 'rxjs';
import {QuestionService} from '../../service/question/question.service';
import {Question} from '../../model/question';
import {valueReferenceToExpression} from '@angular/compiler-cli/src/ngtsc/annotations/src/util';
import {formatI18nPlaceholderName} from '@angular/compiler/src/render3/view/i18n/util';
import {ExamService} from '../../service/exam/exam.service';
import {Exam} from '../../model/exam';

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.scss']
})
export class ExamDetailComponent implements OnInit {
  // exam: Exam = {};
  // @ts-ignore
  id: number;
  questions: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private questService: QuestionService,
              private examService: ExamService) {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit(): void {
    this.questService.getAllQuestionByExamId(this.id).subscribe((value) =>
      this.questions = value);
    //
    // this.getExamById(this.id);

  }

  // getExamById(id: number) {
  //   this.examService.getExamById(id).subscribe(exam => this.exam = exam);
  // }
}
