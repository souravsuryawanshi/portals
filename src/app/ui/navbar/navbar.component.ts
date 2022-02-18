import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() isLoggedIn = false;
  burgerClick = false;
  clicked = false;

  @Output() out = new EventEmitter();

  onBurgerClick(item: boolean) {
    this.clicked = item;
    this.burgerClick = !this.burgerClick;
  }

  logOut(item: boolean) {
    this.isLoggedIn = !item;
    this.out.emit({
      type: 'log_out',
      value: !item,
    });
  }

  displayForm(item: boolean) {
    this.out.emit({
      type: 'display_form',
      value: item,
    });
  }
}
