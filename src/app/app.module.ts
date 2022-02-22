import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Components, bootstrap } from './declarations';

@NgModule({
  declarations: [Components],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [bootstrap],
})
export class AppModule {}
