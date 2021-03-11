import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {PersonService} from '../_service/person.service';
import {MatTableDataSource} from '@angular/material/table';
import {PersonDto} from '../_dto/personDto';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  constructor(private personService: PersonService) { }
  persons = new MatTableDataSource<PersonDto>();

  columnsToDisplay: string[] = [
    'Id',
    'Name',
    'Email',
    'Categories',
    'Comment',
    'PostedDate'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.getPersons();
  }

  ngAfterViewInit(): void {
    this.persons.paginator = this.paginator;
  }

  /**
   * Save all persons from API into array.
   *
   */
  getPersons(): void {
    this.personService.getPersons().subscribe(
      res => {
        this.persons.data = res;
      },
      error => console.log(error)
    );
  }

  /**
   * Helper method to extract person's categories
   *
   */
  getCategoryName(c: string): string {
    let result = '';

    c.split(',').forEach(cat => {
      result = result.concat(cat + '; ');
    });
    return result;
  }

  /**
   * Method to combine two string into one
   *
   * @param first - First name
   * @param last - Last name
   */
  // tslint:disable-next-line:typedef
  getFullName(first: string, last: string) {
    return first.concat(' ').concat(last);
  }
}
