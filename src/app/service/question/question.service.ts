import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from '../../model/question';

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getAllQuestion(): Observable<Question[]> {
    return this.http.get<Question[]>(API_URL + `/api/questions`);
  }
}
