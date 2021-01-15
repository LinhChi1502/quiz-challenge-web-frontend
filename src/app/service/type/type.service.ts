import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../../model/category';
import {Type} from '../../model/type';

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) { }

  getAllTypes(): Observable<Type[]> {
    return this.http.get<Category[]>(API_URL + `/api/types`);
  }
}
