import {Component, OnInit, Output} from '@angular/core';
import {Question} from '../../model/question';


@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss']
})
export class CreateExamComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
currentQuestion:any;




}
