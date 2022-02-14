import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portals';
  show: boolean = false;

  loggedIn = false;

  isLogging(item: boolean) {
    this.loggedIn = item;
  }

  toDisplay(item: boolean) {
    this.show = item;
  }

  toDisplayed(item: boolean) {
    this.show = !item;
  }
}
