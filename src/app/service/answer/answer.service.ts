import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Category} from '../../model/category';
import {Observable} from 'rxjs';
import {Answer} from '../../model/answer';

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }

  createNewAnswer(answer: Answer): Observable<Answer> {
    return this.http.post<Answer>(API_URL + '/api/answers', answer);
  }

}
