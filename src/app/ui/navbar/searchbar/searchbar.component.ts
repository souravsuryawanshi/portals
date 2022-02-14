import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  @Input() search = '';
}
