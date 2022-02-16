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
  @Output() show = new EventEmitter();
  @Output() open = new EventEmitter();

  onBurgerClick(event: boolean) {
    this.clicked = true;
    this.burgerClick = !this.burgerClick;
    // console.log(this.burgerClick);
  }
  display(item: boolean) {
    this.show.emit(item);
  }
  loggingOut() {
    this.isLoggedIn = false;
    this.out.emit(false);
  }

  formOpen(item: boolean) {
    this.open.emit(true);
  }
}
