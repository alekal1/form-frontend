import {CategoryDto} from './categoryDto';

export class PersonDto {

  id: number;
  firstName: string;
  lastName: string;
  email: string;
  text: string;
  categories: CategoryDto[];
  postedDate: string;
}
