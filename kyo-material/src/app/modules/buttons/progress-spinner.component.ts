import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-buttons-progress-spinner',
    templateUrl: 'progress-spinner.component.html'
})
export class ProgressSpinerComponent {

    progress: Number = 50;

    OnInit() {
        this.roll();
    }

    roll(): void {
        this.progress = Math.round(Math.random() * 100);
    }
}
