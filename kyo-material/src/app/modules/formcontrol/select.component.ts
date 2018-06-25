import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-formcontrol-select',
    templateUrl: 'select.component.html'
})
export class SelectComponent {

    formControl = new FormControl();

    appliences = ['彩电', '冰箱', '空调', '洗衣机'];

    warriors = [
        {
            name: '魏',
            warrior: ['曹操', '典韦', '夏侯惇']
        },
        {
            name: '蜀',
            warrior: ['刘备', '关羽', '张飞']
        },
        {
            name: '吴',
            warrior: ['大乔', '小乔']
        }
    ];
}
