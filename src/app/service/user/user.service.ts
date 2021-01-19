import { Injectable } from '@angular/core';
import {AppUser} from "../../model/app-user";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  newPassword(user: AppUser, id: number, token: string): Observable<AppUser> {
    return this.http.put<AppUser>(API_URL + `/new-password/${id}?token=` + token, user);
  }
  getUserProfile(id: string): Observable<AppUser> {
    return this.http.get<AppUser>(API_URL + `/users/${id}`);
  }
}
