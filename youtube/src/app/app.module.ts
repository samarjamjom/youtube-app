import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ApiKey:AIzaSyCZ5I_wRuRG027fothsJihBacnDIefanQg
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
