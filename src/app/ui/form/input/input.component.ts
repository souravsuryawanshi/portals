import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() txt = '';

  //from here deleted
  @Input() type = '';
  @Input() name = '';
  @Input() validator: boolean = true;
  @Input() errorMessage = '';
  @Output() itm = new EventEmitter();

  validateCred() {
    if (this.type === 'email') {
      this.errorMessage = 'Invalid email';
      if (this.name.length > 0) {
        this.validator = true;
        this.itm.emit(this.validator);
        return true;
      } else {
        this.validator = false;
        this.itm.emit(this.validator);
        return false;
      }
    }

    if (this.type === 'password') {
      this.errorMessage = 'Invalid Password';
      if (this.name.length > 0) {
        this.validator = true;
        this.itm.emit(this.validator);
        return true;
      } else {
        this.validator = false;
        this.itm.emit(this.validator);
        return false;
      }
    }

    return false;
  }
}
