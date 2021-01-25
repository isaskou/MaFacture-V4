import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      required: 'Required',
      invalidEmailAddress: 'Invalid email address'
    };

    return config[validatorName];
  }

  static emailValidator(control) {
    if (
      control.value.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
    ) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }
}
