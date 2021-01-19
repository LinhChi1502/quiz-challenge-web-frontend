import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ExamService} from "../../../service/exam/exam.service";
import {Exam} from "../../../model/exam";

@Component({
  selector: 'app-process-exam',
  templateUrl: './process-exam.component.html',
  styleUrls: ['./process-exam.component.scss']
})
export class ProcessExamComponent implements OnInit {

  id!: number;
  currentExam: Exam = {
    name: 'Exam Name',
  };

  constructor(private activatedRoute: ActivatedRoute, private examService: ExamService) {
    this.activatedRoute.paramMap.subscribe(async result => {
      // @ts-ignore
      await (this.id = +result.get('id'));
      await this.examService.getExamById(this.id).subscribe(receiveExam => {
        this.currentExam = receiveExam;
        console.log(this.currentExam);
      })
    }
    )
  }

  ngOnInit(): void {
  }


}
