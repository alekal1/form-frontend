import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PersonDto} from '../_dto/personDto';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  readonly apiUrl = 'http://localhost:8080/api/v1/person/all';
  constructor(private http: HttpClient) {}


  public getPersons(): Observable<PersonDto[]> {
    return this.http.get<PersonDto[]>(this.apiUrl);
  }
}
