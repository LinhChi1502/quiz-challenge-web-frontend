import {Component, OnInit} from '@angular/core';
import {Exam} from '../model/exam';
import {UserExam} from "../model/user-exam";
import {ExamService} from "../service/exam/exam.service";

declare var $: any;
declare var jQuery: any;
declare var Chart: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  exams: Exam[] = [];
  examname = ["thang1", "thang2", "thag3"];
  up50 = [];
  down50 = [];

  constructor(private examService: ExamService) {
  }

  ngOnInit(): void {
    this.getAllTestedExam();
    console.log(this.examname);
    console.log(this.up50);
    console.log(this.down50);
    let areaChartData = {
      labels: this.examname ,
      datasets: [
        {
          label: 'Up50',
          backgroundColor: 'rgba(60,141,188,0.9)',
          borderColor: 'rgba(60,141,188,0.8)',
          pointRadius: false,
          pointColor: '#3b8bba',
          pointStrokeColor: 'rgba(60,141,188,1)',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(60,141,188,1)',
          data: this.up50
        },
        {
          label: 'Down50',
          backgroundColor: 'rgba(210, 214, 222, 1)',
          borderColor: 'rgba(210, 214, 222, 1)',
          pointRadius: false,
          pointColor: 'rgba(210, 214, 222, 1)',
          pointStrokeColor: '#c1c7d1',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: this.down50
        },
      ]
    }
    let barChartData = jQuery.extend(true, {}, areaChartData)
    let stackedBarChartCanvas = $('#stackedBarChart').get(0).getContext('2d')
    // @ts-ignore
    let stackedBarChartData = jQuery.extend(true, {}, barChartData)

    let stackedBarChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          stacked: true,
        }],
        yAxes: [{
          stacked: true
        }]
      }
    }

    let stackedBarChart = new Chart(stackedBarChartCanvas, {
      type: 'bar',
      data: stackedBarChartData,
      options: stackedBarChartOptions
    })
  }

  getAllTestedExam() {
    return this.examService.getAllTestedExams().subscribe(exams => {
      exams.forEach(value => {
        this.exams.push(value)
        for (let i = 0; i < this.exams.length; i++) {
          // @ts-ignore
          this.examname.push(this.exams[i].name)
          // @ts-ignore
          this.examService.get50UpUserCountByExamId(this.exams[i].id).subscribe(up50 => {
            // @ts-ignore
            this.up50.push(up50);
          })
          // @ts-ignore
          this.examService.get50DownUserCountByExamId(this.exams[i].id).subscribe(down50 => {
            // @ts-ignore
            this.down50.push(down50);
          })
        };
        console.log(this.examname);
        console.log(this.up50);
        console.log(this.down50);
      });
    })
  }
}
