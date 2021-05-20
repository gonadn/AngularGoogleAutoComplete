import { NgModule } from '@angular/core';
import { AngularGoogleAutocompleteComponent } from './angular-google-autocomplete.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';


@NgModule({
  declarations: [
    AngularGoogleAutocompleteComponent
  ],
  imports: [
    AutocompleteLibModule
  ],
  exports: [
    AngularGoogleAutocompleteComponent
  ]
})
export class AngularGoogleAutocompleteModule { }
