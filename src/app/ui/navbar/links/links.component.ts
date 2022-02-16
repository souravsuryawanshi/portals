import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent {
  @Input() linkName = '';
  @Input() isClicked: any;
  @Input() toggle: any;
  @Output() out = new EventEmitter();

  onClickHandler() {
    console.log('clicked');
    this.out.emit(true);
  }
}
