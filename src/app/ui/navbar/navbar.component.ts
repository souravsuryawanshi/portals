import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  clicked: boolean = false;
  @Input() isLoggedIn = false;
  @Output() out = new EventEmitter();

  onBurgerClick(event: boolean) {
    this.clicked = event;
    console.log(this.clicked);
  }

  loggingOut() {
    this.isLoggedIn = false;
    this.out.emit(false);
  }
}
