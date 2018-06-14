import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons-button',
  templateUrl: 'button.component.html'
})
export class ButtonComponent {

  clickevent(e): void {
    alert('点击有效！');
    console.log(e);
  }
}
