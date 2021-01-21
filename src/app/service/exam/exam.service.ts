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
    return this.httpClient.post<Exam>(API_URL + `/api/exams`,exam);
  }

  getExamById(id: number): Observable<Exam> {
    return this.httpClient.get<Question>(API_URL + `/api/exams/${id}`);
  }

  getAllTestedExams(): Observable<Exam[]> {
    return this.httpClient.get<Exam[]>(API_URL + `/api/exams/tested`);
  }

  get50UpUserCountByExamId(id: any): Observable<any> {
    return this.httpClient.get<number>(API_URL + `/api/exams/up50/${id}`);
  }

  get50DownUserCountByExamId(id: any): Observable<any> {
    return this.httpClient.get<number>(API_URL + `/api/exams/down50/${id}`);
  }
}
