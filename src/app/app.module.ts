import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { KardComponentComponent } from './kard-component/kard-component.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { FootComponentComponent } from './foot-component/foot-component.component';

@NgModule({
  declarations: [
    AppComponent,
    KardComponentComponent,
    NavComponentComponent,
    FootComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
