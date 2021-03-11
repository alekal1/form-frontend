/**
 * Person model
 */
export class PersonDto {
  firstName: string;
  lastName: string;
  email: string;
  text: string;
  categories: string;
  postedDate: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    text: string,
    categories: string,
    postedDate: string
    ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.text = text;
    this.categories = categories;
    this.postedDate = postedDate;
  }
}
