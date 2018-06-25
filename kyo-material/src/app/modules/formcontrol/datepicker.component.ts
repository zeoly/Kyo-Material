import { Component } from '@angular/core';

@Component({
    selector: 'app-formcontrol-datepicker',
    templateUrl: 'datepicker.component.html'
})
export class DatepickerComponent {

    startDate = new Date(1989, 6, 4);
}
