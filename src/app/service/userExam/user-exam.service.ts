import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserExam} from '../../model/user-exam';
import {environment} from '../../../environments/environment';
import {UserAnswer} from "../../model/user-answer";
import { Data } from 'src/app/model/data';
const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class UserExamService {

  constructor(private http: HttpClient) { }

  getAllUserExamsByUserId(id: number): Observable<UserExam[]> {
    return this.http.get<UserExam[]>(API_URL + `/api/userexams/exam-list/${id}`);
  }

  countMark(id: any): Observable<number> {
    return this.http.get<number>(API_URL +`/api/userexams/mark/${id}`);
  }

  submitUserExam(userExam: UserExam): Observable<UserExam>{
    return this.http.post<UserExam>(API_URL + `/api/userexams`, userExam);
  }

  submitUserAnswer(userAnswers: UserAnswer[]): Observable<UserAnswer[]>{
    return this.http.post<UserAnswer[]>(API_URL + `/api/useranswer`, userAnswers);
  }

  getAllUserExams(): Observable<UserExam[]> {
    return this.http.get<UserExam[]>(API_URL + `/api/userexams/`);
  }

  getStatistics(): Observable<Data[]> {
    return this.http.get<Data[]>(API_URL + `/api/userexams/statistics`);
  }
}
