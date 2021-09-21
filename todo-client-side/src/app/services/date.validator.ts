import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function DateValidator(): ValidatorFn {
  return (control: AbstractControl):{ [key: string]: any } | null => {
    console.log(control.value)
    console.log(' is here')
    return {'invalidDate': true};
    //return null;
  }
}
