import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CategoryDto} from '../_dto/categoryDto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  readonly apiUrl = 'http://localhost:8080/api/v1/category/all';
  constructor(private http: HttpClient) {}


  public getCategories(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(this.apiUrl);
  }
}
