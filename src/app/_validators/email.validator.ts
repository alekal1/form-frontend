import {AbstractControl, ValidatorFn} from '@angular/forms';

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

// tslint:disable-next-line:typedef
function verifyEmailPattern(value) {
  const reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return reg.test(value);
}
