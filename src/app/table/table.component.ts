import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {PersonService} from '../_service/person.service';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {CategoryDto} from '../_dto/categoryDto';
import {PersonDto} from '../_dto/personDto';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  constructor(private personService: PersonService) { }
  persons = new MatTableDataSource<PersonDto>();

  columnsToDisplay: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'categories',
    'comment',
    'postedDate'
  ];

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.getPersons();
  }

  ngAfterViewInit(): void {
    this.persons.sort = this.sort;
  }

  getPersons(): void {
    this.personService.getPersons().subscribe(
      res => {
        this.persons.data = res;
      },
      error => console.log(error)
    );
  }
  getCategoryName(c: CategoryDto[]): string {
    let result = '';
    c.forEach(cat => {
      result = result.concat(cat.categoryName + '; ');
    });
    return result;
  }

}
