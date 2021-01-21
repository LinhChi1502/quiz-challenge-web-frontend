import {Component, OnInit} from '@angular/core';
import {ExamService} from '../../service/exam/exam.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  title = 'Population (in millions)';
  type = 'ColumnChart';
  data = [
    // ['sinh', 20, 30],
    // ['toan', 15, 5],
    // ['hoa', 10, 25],
    // ['van', 25, 5],
    // ['the duc', 10, 12],
    // ['dia ly', 5, 20],
    // ['lich su', 11, 40],
    // ['nhac', 10, 11],

  ];
  item :any= [];
  columnNames = ['Year', 'Asia', 'Europe'];
  options = {};
  width = 1000;
  height = 400;
  // @ts-ignore
  up50: number=0;
  // @ts-ignore
  down50: number=0;

  constructor(private examService: ExamService) {
  }

  ngOnInit(): void {
    this.getAllTestedExams();
    console.log("dsfdsfsdf")
    console.log(this.up50)
  }

  getAllTestedExams() {
    return this.examService.getAllTestedExams().subscribe((exams) => {
      exams.forEach((exam) => {
        // @ts-ignore
        this.item.push(exam.name);
        // @ts-ignore
        this.get50UpUserCountByExamId(exam.id);
        // @ts-ignore
        this.item.push(this.up50);
        // @ts-ignore
        this.get50DownUserCountByExamId(exam.id);
        // @ts-ignore
        this.item.push(this.down50);
        // @ts-ignore
        this.data.push(this.item);
        this.item = [];
      });
      console.log(this.data)
    });
  }

  get50UpUserCountByExamId(id: number) {
    return this.examService.get50UpUserCountByExamId(id).subscribe((up50) => {this.up50 = up50
      console.log("saad")
    console.log(up50)
    console.log(this.up50)
    });
  }

  get50DownUserCountByExamId(id: number) {
    return this.examService.get50DownUserCountByExamId(id).subscribe((down50) => this.down50 = down50);
  }
}




