import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-formcontrol-autocomplete',
    templateUrl: 'autocomplete.component.html'
})
export class AutocompleteComponent {

    myControl: FormControl = new FormControl();

    options = [
        'One',
        'Two',
        'Three'
    ];
}
