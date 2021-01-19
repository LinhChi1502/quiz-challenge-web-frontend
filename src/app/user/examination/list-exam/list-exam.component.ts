import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ExamService} from '../../../service/exam/exam.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Router} from "@angular/router";

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
  searchKey!: string;

  constructor(private examService: ExamService, private router: Router) { }

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

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }
  applyFilter() {
    this.filteredListExams.filter = this.searchKey.trim().toLowerCase();
  }

  // @ts-ignore
  processExam(id) {
    this.router.navigate([`examination/process/${id}`]).then(r => r);
  }
}


