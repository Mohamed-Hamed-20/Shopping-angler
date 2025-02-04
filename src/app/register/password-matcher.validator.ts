import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPasswordControl = control.get('confirmPassword');

    if (!confirmPasswordControl) return null;

    if (!confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ required: true });
      return { required: true };
    }

    if (password !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ mismatch: true }); 
      return { mismatch: true };
    }

    confirmPasswordControl.setErrors(null); 
    return null;
  };
}
