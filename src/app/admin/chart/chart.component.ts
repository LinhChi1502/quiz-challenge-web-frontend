import {Component, OnInit} from '@angular/core';
import {ExamService} from '../../service/exam/exam.service';
import {Data} from '../../model/data';
import {formatNumber} from '@angular/common';
import {any} from 'codelyzer/util/function';
import {async} from 'rxjs';
import {UserExamService} from '../../service/userExam/user-exam.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  title = 'Statistics  in Exam Result';
  type = 'ColumnChart';
  data = [
    ['toan', 12, 10],
    ['sinh', 15, 20],
  ];
  item: Data[] = [];
  columnNames = ['Exam Name', '> 50 point', '<= 50 point'];
  options = {};
  width = 1000;
  height = 400;

  constructor(private userExamService: UserExamService) {

  }

  ngOnInit(): void {
    // this.userExamService.getStatistics().subscribe(datas => {
    //   datas.forEach(data => {
    //     // @ts-ignore
    //     this.item.push(data.examName);
    //     // @ts-ignore
    //     this.item.push(data.up50);
    //     // @ts-ignore
    //     this.item.push(data.down50);
    //     // @ts-ignore
    //     this.data.push(this.item);
    //     this.item = [];
    //   });
    // })
  }
}
//   getStatistics() {
//     this.userExamService.getStatistics().subscribe(datas => {
//         datas.forEach(data => {
//           // @ts-ignore
//           this.item.push(data.examName);
//           // @ts-ignore
//           this.item.push(data.up50);
//           // @ts-ignore
//           this.item.push(data.down50);
//           // @ts-ignore
//           this.data.push(this.item);
//           this.item = [];
//         });
//
//       }
//     );
//
//   }
//
// }




