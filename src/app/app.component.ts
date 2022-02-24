import { Component } from '@angular/core';
import { LoginStatus } from './services/authenticate.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  show_login_form: boolean = false;

  constructor(private _log: LoginStatus) {
    this._log
      .getStream()
      .subscribe((res: any) => (this.show_login_form = res.show_login_form));
  }
}
