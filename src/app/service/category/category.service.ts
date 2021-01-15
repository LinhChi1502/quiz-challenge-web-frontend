import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../../model/category';

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + `/api/categories`);
  }

  createNewCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(API_URL + '/api/categories', category);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(API_URL + `/api/categories/${id}`);
  }

  editCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(API_URL + `/api/categories/${id}`, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(API_URL + `/api/categories/${id}`);
  }
}
