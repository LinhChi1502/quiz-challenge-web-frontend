import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ExamService} from '../../../service/exam/exam.service';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-list-exam',
  templateUrl: './list-exam.component.html',
  styleUrls: ['./list-exam.component.scss']
})
export class ListExamComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns = ['id', 'name', 'option'];
  filteredListExams!: MatTableDataSource<any>;

  constructor(private examService: ExamService) { }

  ngOnInit(): void {
    this.getAll();
  }

  // tslint:disable-next-line:typedef
  getAll(){
    this.examService.getExamList().subscribe(result => {
      const receiveArray = result.map(item => {
        return {
          id: item.id,
          name: item.name,
          examQuestion: item.examQuestions,
        };
      });
      this.filteredListExams = new MatTableDataSource(receiveArray);
      this.filteredListExams.paginator = this.paginator;
      this.filteredListExams.sort = this.sort;
    });
  }
}


