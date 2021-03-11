import {AbstractControl, ValidatorFn} from '@angular/forms';

/**
 * Validator for emails.
 */
export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: boolean} | null => {
    const emailPattern = verifyEmailPattern(control.value);
    if (emailPattern) {
      return null; // If email is OK should return null
    } else {
      return {emailNotValid: true}; // Return the error's name
    }
  };
}

/**
 * Method for checking email validity
 * Means it should be an email (example  asd@asd.com)
 * So there should be letters before @,
 * then @,
 * then letters before .,
 * then . and at least 2 letters after it
 *
 * @param value - email from form.
 * @return boolean - true if value matches a pattern
 */
// tslint:disable-next-line:typedef
function verifyEmailPattern(value) {
  const reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return reg.test(value);
}
