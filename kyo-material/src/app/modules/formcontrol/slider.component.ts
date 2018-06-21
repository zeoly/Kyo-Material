import { Component } from '@angular/core';

@Component({
    selector: 'app-formcontrol-slider',
    templateUrl: 'slider.component.html',
    styleUrls: ['slider.component.css']
})
export class SliderComponent {

    progress: Number = 50;

    roll(): void {
        this.progress = Math.round(Math.random() * 100);
    }

    showValue(value: number | null): number {
        if (!value) {
            return 0;
        }
        return value;
    }
}
