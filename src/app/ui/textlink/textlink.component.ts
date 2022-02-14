import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textlink',
  templateUrl: './textlink.component.html',
  styleUrls: ['./textlink.component.scss'],
})
export class TextLinkComponent {
  @Input() txt = '';
  @Input() link = '';

  onClickHandler() {
    alert('Not Registering You');
  }
}
