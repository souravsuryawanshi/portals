import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  clicked: boolean = false;
  onBurgerClick(event: boolean) {
    this.clicked = event;
    console.log(this.clicked);
  }
}
