import { Component, Output, EventEmitter } from '@angular/core';
import { LoginStatus } from 'src/app/services/authenticate.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  constructor(private _log: LoginStatus) {}

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
    submitFail: false,
    isValid: function () {
      let result = true;

      if (this.value.trim().length < 1) {
        this.errorMessage = 'Email field cannot be empty!';
        result = false;
      } else if (!this.emailValidate.test(this.value)) {
        this.errorMessage = 'Email should be abc@example.domain';
        result = false;
      }

      this.validated = result;
      this.disable = !result;
      if (result) this.submitFail = false;
    },

    errorMessage: 'Email is required',
  };

  passwordValues = {
    placeholder: 'enter password',
    name: 'password',
    value: '',
    type: 'password',
    disable: false,
    pwd_submitFail: false,
    isValid: function () {
      let result = true;
      if (this.value.trim().length < 1) {
        this.errorMessage = 'Password is required!';
        result = false;
      }
      this.validated = result;
      this.disable = !result;
      if (result) this.pwd_submitFail = false;
    },

    validated: true,
    errorMessage: 'Password is required',
  };

  onSubmit() {
    if (
      this.usernameValues.value.length < 1 &&
      this.passwordValues.value.length < 1
    ) {
      this.usernameValues.submitFail = true;
      this.passwordValues.pwd_submitFail = true;
    } else if (this.usernameValues.value.length < 1) {
      this.usernameValues.submitFail = true;
    } else if (this.passwordValues.value.length < 1) {
      this.passwordValues.pwd_submitFail = true;
    } else if (this.usernameValues.validated && this.passwordValues.validated) {
      this._log.onLoginSuccess();
    }
  }
}
