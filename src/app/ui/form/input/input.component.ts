import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() txt = '';

  @Input() fieldValues: any;

  //password   ^(?=.*[^a-zA-Z]).{8,40}$
  //email    [A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}
  //format console.log(/^([a-z0-9]{5,})$/.test('abc123'));

  //from here deleted
  // @Input() type = '';
  // @Input() name = '';
  // @Input() validator: boolean = true;
  // @Input() errorMessage = '';
  // @Output() itm = new EventEmitter();

  // validateCred() {
  //   if (this.type === 'email') {
  //     this.errorMessage = 'Invalid email';
  //     if (this.name.length > 0) {
  //       this.validator = true;
  //       this.itm.emit(this.validator);
  //       return true;
  //     } else {
  //       this.validator = false;
  //       this.itm.emit(this.validator);
  //       return false;
  //     }
  //   }

  //   if (this.type === 'password') {
  //     this.errorMessage = 'Invalid Password';
  //     if (this.name.length > 0) {
  //       this.validator = true;
  //       this.itm.emit(this.validator);
  //       return true;
  //     } else {
  //       this.validator = false;
  //       this.itm.emit(this.validator);
  //       return false;
  //     }
  //   }

  //   return false;
  // }
}
