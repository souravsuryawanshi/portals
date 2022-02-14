import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent {
  @Input() linkName = '';
  @Input() burgerClick: boolean = false;
  onClickHandler() {
    console.log('clicked');
  }
}
