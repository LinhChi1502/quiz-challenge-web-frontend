import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from "rxjs";
import {UserAnswer} from "../../model/user-answer";
const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class UserAnswerService {

  constructor(private http: HttpClient) { }

  getUserAnswersByUserExamId(id: any): Observable<UserAnswer[]> {
    return this.http.get<UserAnswer[]>(API_URL + `/api/useranswer/${id}`);
  }
}
