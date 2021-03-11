import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {emailValidator} from '../_validators/email.validator';
import {nameValidator} from '../_validators/name.validator';
import {PersonService} from '../_service/person.service';
import {PersonDto} from '../_dto/personDto';
import {DatePipe} from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [DatePipe]
})
export class FormComponent implements OnInit {
  constructor(
    private personService: PersonService,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    @Inject(DOCUMENT) private document: Document
    ) { }

  form: FormGroup;
  selected: string[];
  categories: string[] = [
    'Pets',
    'Jewelery',
    'Food & Drinks',
    'Clothes'
  ];

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Method for form initialize.
   *
   */
  private initForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, nameValidator()]],
      email: ['', [Validators.required, emailValidator()]],
      comment: ['', [Validators.required]]
    });
  }

  /**
   * Add person to db according to it's fields in form
   *
   */
  savePerson(): void {
    const arrayOfName = this.form.value.name.split(' ');
    const tempPersonDto = new PersonDto(
      arrayOfName[0],
      arrayOfName[1],
      this.form.value.email,
      this.form.value.comment,
      this.createCategories(),
      this.datePipe.transform(new Date(), 'yyyy-MM-dd')
    );
    this.personService.addPerson(tempPersonDto).then(r => console.log(r));
    this.form.reset();
    this.selected = null;
    this.document.defaultView.location.reload();
  }

  /**
   * Helper method to extract categories.
   *
   */
  // tslint:disable-next-line:typedef
  createCategories() {
    let result = '';
    for (const category of this.selected) {
      console.log(this.selected.indexOf(category));
      console.log(this.selected.length);
      result = result.concat(category + ',');
    }
    return result.slice(0, -1);
  }
}
