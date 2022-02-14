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
  @Output() show = new EventEmitter();
  @Output() open = new EventEmitter();

  onBurgerClick(event: boolean) {
    this.clicked = event;
    console.log(this.clicked);
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
