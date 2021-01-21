import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {ExamService} from "../../../service/exam/exam.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserExamService} from "../../../service/userExam/user-exam.service";
import {AuthService} from "../../../service/auth/auth.service";
import {AppUser} from "../../../model/app-user";
import {UserExam} from "../../../model/user-exam";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns = ['id', 'name', 'mark', 'date', 'action'];
  filteredListHistory = new MatTableDataSource<UserExam>([]);
  searchKey!: string;
  currentUser: AppUser = {};
  currentUserId: any;
  constructor(private userExamService: UserExamService, private router: Router,
              private activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.currentUserId = this.authService.currentUserValue.id;
  }


  ngOnInit(): void {
    this.getAllUserExamByUserId();
  }

  getAllUserExamByUserId(){
    this.userExamService.getAllUserExamsByUserId(this.currentUserId).subscribe( async result => {
      this.filteredListHistory.data = result;
      this.filteredListHistory.paginator = this.paginator;
      this.filteredListHistory.sort = this.sort;
      for (let i = 0; i < this.filteredListHistory.data.length; i++) {
        this.userExamService.countMark(this.filteredListHistory.data[i].id).subscribe(async result => {
          this.filteredListHistory.data[i].mark = result;
          console.log(result);
        })
      }
    });
    console.log(this.filteredListHistory);
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }
  applyFilter() {
    this.filteredListHistory.filter = this.searchKey.trim().toLowerCase();
  }
}
