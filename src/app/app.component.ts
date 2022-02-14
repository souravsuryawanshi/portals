import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portals';

  loggedIn = false;

  isLogging(item: boolean) {
    this.loggedIn = item;
  }
}
