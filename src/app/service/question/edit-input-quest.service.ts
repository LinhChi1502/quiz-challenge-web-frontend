import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Question} from '../../model/question';
import {HttpClient, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditInputQuestService {

  constructor(private http:HttpClient) { }

  getQuestionById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/questions/${id}`,{responseType:"json"});
  }
}
