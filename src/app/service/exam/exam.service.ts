import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Exam} from '../../model/exam';
import {Question} from '../../model/question';
import {environment} from '../../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private httpClient: HttpClient) {
  }

  getExamList(): Observable<Exam[]> {
    return this.httpClient.get<Exam[]>(API_URL + `/api/exams`);
  }

  saveExam(exam: Exam): Observable<Exam> {
    return this.httpClient.post<Exam>(`http://localhost:8080/api/exams`,exam);
  }

  // getExamById(id: number): Observable<Exam> {
  //   return this.httpClient.get<Question>(API_URL + `/api/exams/${id}`);
  // }
}
