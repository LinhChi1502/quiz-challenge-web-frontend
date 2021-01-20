import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserExam} from '../../model/user-exam';
import {environment} from '../../../environments/environment';
const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class UserExamService {

  constructor(private http: HttpClient) { }

  getAllUserExamsByUserId(id: number): Observable<UserExam[]> {
    return this.http.get<UserExam[]>(API_URL + `/api/userexams/${id}`);
  }

  countMark(id: any): Observable<number> {
    return this.http.get<number>(API_URL +`/api/userexams/mark/${id}`);
  }
}
