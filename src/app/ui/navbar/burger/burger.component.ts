import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss'],
})
export class BurgerComponent {
  @Output() out = new EventEmitter();

  onClickHandler() {
    this.out.emit(true);
  }
}
