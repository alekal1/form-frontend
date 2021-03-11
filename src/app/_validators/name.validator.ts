import {AbstractControl, ValidatorFn} from '@angular/forms';

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: boolean} | null => {
    if (verifyOnlyLetters(control.value)) {
      return null; // If name is OK should return null
    } else {
      return {nameNotContainsLetters: true}; // Return the error's name
    }
  };
}

// tslint:disable-next-line:typedef
function verifyOnlyLetters(value) {
  const regOnlyLetters = /^[^ ][a-zA-Z\s]*$/;
  return regOnlyLetters.test(value);
}
