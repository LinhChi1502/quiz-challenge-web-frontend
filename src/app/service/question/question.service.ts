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

  searchQuestions(searchText: string, questType: string, category: string): Observable<Question[]> {
    return this.http.get<Question[]>(API_URL + `/api/questions/search`, {params: {
        searchText: searchText,
        questType: questType,
        category: category
      }})
  }
  insertQuestions(question: Question ): Observable<Question> {
    console.log(this.http.post<Question>(API_URL + `/api/questions`, question));
    return  this.http.post<Question>(API_URL + `/api/questions`, question);

  }
}
