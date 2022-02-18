import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent {
  @Input() isClicked: any;
  @Input() toggle: any;
  @Output() out = new EventEmitter();

  onClickHandler() {
    this.out.emit(true);
  }
}
