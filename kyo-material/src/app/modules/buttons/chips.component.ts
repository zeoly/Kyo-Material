import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
    selector: 'app-buttons-chips',
    templateUrl: 'chips.component.html',
    styleUrls: ['chips.component.css']
})

export class ChipsComponent {

    visible: Boolean = true;
    selectable: Boolean = true;
    removable: Boolean = true;
    addOnBlur: Boolean = true;

    separatorKeysCodes = [ENTER, COMMA];

    appliances = [
        { name: '彩电' },
        { name: '冰箱' },
        { name: '空调' },
        { name: '洗衣机' }
    ];

    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        // Add our fruit
        if ((value || '').trim()) {
            this.appliances.push({ name: value.trim() });
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    remove(fruit: any): void {
        const index = this.appliances.indexOf(fruit);

        if (index >= 0) {
            this.appliances.splice(index, 1);
        }
    }
}
