import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Input() name = '';
  @Output() out = new EventEmitter();
  onLoginHandler() {
    console.log('logged in');
    this.out.emit(true);
  }
}
