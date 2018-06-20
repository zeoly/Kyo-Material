import { Component } from '@angular/core';

@Component({
    selector: 'app-layout-list',
    templateUrl: 'list.component.html'
})
export class ListComponent {

    appliances = ['冰箱', '空调', '洗衣机'];
}
