import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders
} from '@angular/core';
import { AngularGoogleAutocompleteComponent } from './angular-google-autocomplete.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

export interface GoogleAutoCompleteConfig {
  GoogleApiKey?: string;
  onError?: (error: any) => any;
}

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
export class AngularGoogleAutocompleteModule {

}
