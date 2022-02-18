import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  show: boolean = false;
  loggedIn: boolean = false;

  onEvent(item: any) {
    switch (item.type) {
      case 'log_out':
        this.loggedIn = item.value;
        this.show = !item.value;
        break;

      case 'form_submitted':
        this.show = !item.value;
        this.loggedIn = true;
        break;

      case 'display_form':
        this.show = item.value;
    }
  }
}
