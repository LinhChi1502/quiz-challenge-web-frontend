import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {QuestionService} from './question/question.service';

@Injectable()
export class TransferService {

  constructor(
    private router:Router,
    private questionService:QuestionService
  ) { }

  private data: any;

  setData(data: any){
    this.data = data;
  }

  getData(){
    let temp = this.data;
    this.clearData();
    return temp;
  }

  clearData(){
    this.data = undefined;
  }

}
