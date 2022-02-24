import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Flags } from './flags';

@Injectable({
  providedIn: 'root',
})
export class LoginStatus {
  status = new Subject<Flags>();

  onLoginSuccess() {
    this.status.next({
      login_status: true,
      show_login_form: false,
    });
  }

  logoutClicked() {
    this.status.next({
      login_status: false,
      show_login_form: true,
    });
  }

  showLoginForm() {
    this.status.next({
      login_status: false,
      show_login_form: true,
    });
  }

  getStream() {
    return this.status;
  }
}
