import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxScrollSignalModule } from 'ngx-scroll-signal';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, NgxScrollSignalModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
