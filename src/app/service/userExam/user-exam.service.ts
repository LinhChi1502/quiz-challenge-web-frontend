import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserExam} from '../../model/user-exam';

const API_URL = `${environment.apiUrl}`


@Injectable({
  providedIn: 'root'
})
export class UserExamService {

  constructor(private http: HttpClient) { }

  getAllUserExamsByUserId(id: number): Observable<UserExam[]> {
    return this.http.get<UserExam[]>(API_URL + `/api/userexams/userexam-list/${id}`);
  }

}
