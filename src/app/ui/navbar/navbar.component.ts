import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginStatus } from 'src/app/services/authenticate.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  burgerClick = false;
  clicked = false;
  login_status: boolean = false;

  constructor(private _log: LoginStatus) {
    this._log
      .getStream()
      .subscribe((res: any) => (this.login_status = res.login_status));
  }

  @Output() out = new EventEmitter();

  onBurgerClick(item: boolean) {
    this.clicked = item;
    this.burgerClick = !this.burgerClick;
  }

  showLoginForm(item: boolean) {
    this._log.showLoginForm();
  }

  logoutClicked(item: boolean) {
    this._log.logoutClicked();
  }
}
