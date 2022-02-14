import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  submitted = false;
  @Output() out = new EventEmitter();

  onSubmit() {
    this.submitted = true;
    console.log(this.submitted);
    this.out.emit(true);
  }

  isSubmitted() {
    console.log('submit success!');
    return this.submitted;
  }

  onForgot() {
    alert('Try to Recall');
  }
}
