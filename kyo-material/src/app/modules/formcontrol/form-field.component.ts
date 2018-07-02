import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-formcontrol-form-field',
    templateUrl: 'form-field.component.html',
    styleUrls: ['form-field.component.css']
})
export class FormFieldComponent {

    errMsgControl = new FormControl('', []);

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    selectedControl = new FormControl('valid', [
        Validators.required,
        Validators.pattern('valid'),
    ]);

    checkboxControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    matcher = new MyErrorStateMatcher();
}
