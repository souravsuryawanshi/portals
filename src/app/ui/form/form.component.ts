import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  // emailValidate = new RegExp(/[A-Za-z0-9_\\.\\+-]+@[A-Za-z0-9-]+\\.[a-z]{2,3}/);

  submitted = false;
  // isDisabled = false;
  @Output() out = new EventEmitter();

  onSubmit() {
    this.submitted = true;
    console.log(this.submitted);
    this.out.emit(true);
  }

  // isSubmitted() {
  //   console.log('submit success!');
  //   return this.submitted;
  // }

  onForgot() {
    alert('Try to Recall');
  }

  usernameValues = {
    emailValidate: new RegExp(
      "([!#-'+/-9=?A-Z^-~-]+(.[!#-'+/-9=?A-Z^-~-]+)|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'+/-9=?A-Z^-~-]+(.[!#-'+/-9=?A-Z^-~-]+)|[[\t -Z^-~]*])"
    ),

    placeholder: 'enter email',
    name: 'username',
    value: '',
    disable: false,
    type: 'email',
    validated: true,
    isValid: function () {
      let result = true;

      if (this.value.trim().length < 1) {
        this.errorMessage = 'Username cannot be empty!';
        result = false;
      } else if (
        this.value.trim().length < 6 ||
        this.value.trim().length > 25
      ) {
        this.errorMessage = 'Invalid Username';
        result = false;
      } else if (!this.emailValidate.test(this.value)) {
        this.errorMessage = 'Should be abc@example.domain';
        result = false;
      }

      this.validated = result;
      this.disable = result;
      return result;
    },
    errorMessage: '',
  };

  passwordValues = {
    placeholder: 'enter password',
    name: 'password',
    value: '',
    type: 'password',
    disable: false,

    isValid: function () {
      let result = true;
      if (this.value.trim().length < 1) {
        this.errorMessage = 'Password cannot be empty!';
        result = false;
      }
      //  else if (this.value.trim().length < 6) {
      //   this.errorMessage = 'Invalid Password';
      //   result = false;
      // }
      this.validated = result;
      this.disable = result;
      return result;
    },
    validated: true,
    errorMessage: '',
  };
}
