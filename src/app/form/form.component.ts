import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../_service/category.service';
import {CategoryDto} from '../_dto/categoryDto';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {emailValidator} from '../_validators/email.validator';
import {nameValidator} from '../_validators/name.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder) { }
  categories: CategoryDto[] = [];

  form: FormGroup;
  selected: string;

  ngOnInit(): void {
    this.getCategories();
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, nameValidator()]],
      email: ['', [Validators.required, emailValidator()]],
      comment: ['', [Validators.required]]
    });
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe( categoriesApi => {
      categoriesApi.forEach(cat => {
        this.categories.push(cat);
      });
    });
  }

  buttonClick(): void {
    console.log(this.selected);
    console.log(this.form.get('name').value);
    console.log(this.form.get('email').value);
    console.log(this.form.get('comment').value);
  }
}
