import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ApiKey:AIzaSyCZ5I_wRuRG027fothsJihBacnDIefanQg
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
