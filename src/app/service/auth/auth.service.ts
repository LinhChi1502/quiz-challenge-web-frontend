import {EventEmitter, Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserToken} from '../../model/user-token';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {AppUser} from "../../model/app-user";

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  update = new EventEmitter<string>();
currentUserSubject: BehaviorSubject<UserToken> | undefined;
currentUser: Observable<UserToken> | undefined;

  constructor(private http: HttpClient) {
     // @ts-ignore
    this.currentUserSubject = new  BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('user')));
    this.currentUser= this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): UserToken {
    // @ts-ignore
    return this.currentUserSubject.value;
  }
  login(username: string, password: string){
    return this.http.post(API_URL + "/login", {username, password})
      .pipe(map(user => {
        // @ts-ignore
        localStorage.setItem('user', JSON.stringify(user));
        // @ts-ignore
        this.currentUserSubject.next(user);
        this.update.emit('login');
        return user;
      }))
  }
  logout(){
    localStorage.removeItem('user');
    // @ts-ignore
    this.currentUserSubject.next('null');
  }
  register(user: AppUser): Observable<AppUser> {
    return this.http.post<AppUser>(API_URL + '/register', user);
  }
newpass(user: AppUser, id: number){
    return this.http.post<AppUser>(API_URL +'/new-password/{id}', user);
}
}
