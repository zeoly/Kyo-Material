import { Component } from '@angular/core';

@Component({
    selector: 'app-layout-tabs',
    templateUrl: 'tabs.component.html'
})
export class TabsComponent {

    navLinks = [
        { path: '/formcontrol/autocomplete', label: 'autocomplete' },
        { path: '/formcontrol/input', label: 'input' }
    ];
}
