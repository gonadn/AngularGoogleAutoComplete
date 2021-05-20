import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularGoogleAutocompleteModule } from 'angular-google-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularGoogleAutocompleteModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
