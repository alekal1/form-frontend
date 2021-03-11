import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PersonDto} from '../_dto/personDto';

/**
 * Person service
 */

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  readonly apiUrl = 'http://localhost:8080/api/v1/person'; // Api where to get persons from
  constructor(private http: HttpClient) {}  // Fetch data using httpClient


  /**
   * GET all persons from the API
   * @return Observable<Employee[]> - Array of persons from given url
   */
  public getPersons(): Observable<PersonDto[]> {
    return this.http.get<PersonDto[]>(`${this.apiUrl}/all`, httpOptions);
  }

  /**
   * POST method for sending to Backend
   * @param personDto - Model of response body
   */
  public addPerson(personDto: PersonDto): Promise<PersonDto> {
    return this.http.post<PersonDto>(`${this.apiUrl}/add`, personDto, httpOptions).toPromise();
  }
}
