import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { SearchbarComponent } from './ui/navbar/searchbar/searchbar.component';
import { LinksComponent } from './ui/navbar/links/links.component';
import { FormComponent } from './ui/form/form.component';
import { InputComponent } from './ui/form/input/input.component';
import { LoginComponent } from './ui/form/login/login.component';
import { LogoComponent } from './ui/logo/logo.component';
import { MockComponent } from './ui/mock/mock.component';
import { BurgerComponent } from './ui/navbar/burger/burger.component';
import { TextLinkComponent } from './ui/textlink/textlink.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    LinksComponent,
    SearchbarComponent,
    FormComponent,
    InputComponent,
    LoginComponent,
    LogoComponent,
    MockComponent,
    BurgerComponent,
    TextLinkComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
