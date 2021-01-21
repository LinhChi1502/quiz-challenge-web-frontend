import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppUser} from '../../model/app-user';
import {environment} from '../../../environments/environment';
const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
  newPassword(user: AppUser, id: number, token: string): Observable<AppUser> {
    return this.http.put<AppUser>(API_URL + `/new-password/${id}?token=` + token, user);
  }
  getUserProfile(id: string): Observable<AppUser> {
    return this.http.get<AppUser>(API_URL + `/users/${id}`);
  }
  getAllUser(): Observable<AppUser[]> {
    return this.http.get<AppUser[]>(API_URL + `/api/users`);
  }
  addUser(id: number, user: AppUser): Observable<AppUser> {
    return this.http.put<AppUser>(API_URL + `/api/users/${id}`, user);
  }

  getUserById(id: number): Observable<AppUser> {
    return this.http.get<AppUser>(API_URL + `/api/users/${id}`);
  }
  }



