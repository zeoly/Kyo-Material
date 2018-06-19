import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-buttons-progress-bar',
    templateUrl: 'progress-bar.component.html'
})
export class ProgressBarComponent {

    progress: Number = 50;

    OnInit() {
        this.roll();
    }

    roll(): void {
        this.progress = Math.round(Math.random() * 100);
    }
}
