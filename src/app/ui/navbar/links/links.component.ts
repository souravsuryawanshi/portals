import { FormsModule } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent {
  @Input() linkName = '';
  @Input() burgerClick: boolean = false;

  @Output() out = new EventEmitter();

  onClickHandler() {
    console.log('clicked');
    this.out.emit(true);
  }
}
