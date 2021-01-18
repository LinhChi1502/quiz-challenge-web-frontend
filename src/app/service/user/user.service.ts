import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../../model/category';
import {AppUser} from '../../model/app-user';
import {Question} from '../../model/question';

const API_URL = `${environment.apiUrl}`


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<AppUser[]> {
    return this.http.get<AppUser[]>(API_URL + `/api/users`);
  }

  addUser(id: number, user: AppUser): Observable<AppUser> {
    return this.http.put<AppUser>(API_URL + `/api/users/${id}`, user);
  }

  getUserById(id: number): Observable<AppUser> {
    return this.http.get<AppUser>(API_URL + `/api/users/${id}`);
  }
}
