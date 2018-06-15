import { Component } from '@angular/core';

@Component({
    selector: 'app-buttons-badge',
    templateUrl: 'badge.component.html'
})

export class BadgeComponent {

    visible: Boolean = true;

    toggoleVisibility(): void {
        this.visible = !this.visible;
    }

}
