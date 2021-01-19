import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from '../../model/question';
import {Category} from '../../model/category';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) {
  }

  getAllQuestion(): Observable<Question[]> {
    return this.http.get<Question[]>(API_URL + `/api/questions`);
  }

  searchQuestions(searchText: string, questType: string, category: string): Observable<Question[]> {
    return this.http.get<Question[]>(API_URL + `/api/questions/search`, {
      params: {
        searchText: searchText,
        questType: questType,
        category: category
      }
    });
  }

  editQuestion(id: number, question: Question): Observable<Question> {
    return this.http.put<Question>(API_URL + `/api/questions/${id}`, question);
  }

  getQuestionById(id: number): Observable<Question> {
    return this.http.get<Question>(API_URL + `/api/questions/${id}`);
  }

  deleteQuestion(id: number): Observable<Question> {
    return this.http.delete<Question>(API_URL + `/api/questions/${id}`);
  }


  createNewQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(API_URL + `/api/questions`, question);
  }


  getAllQuestionByExamId(id: number): Observable<Question[]> {
    return this.http.get<Question[]>(`http://localhost:8080/api/questions/quest-list/${id}`);
  }

  addQuestionListToExam(questions: Question[]): Observable<Question[]> {
    return this.http.post<Question[]>(`http://localhost:8080/api/questions/listquest`, questions);

  }
  insertQuestions(question: Question ): Observable<Question> {
    console.log(this.http.post<Question>(API_URL + `/api/questions`, question));
    return  this.http.post<Question>(API_URL + `/api/questions`, question);

  }
}
