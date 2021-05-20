import { TestBed } from '@angular/core/testing';

import { AngularGoogleAutocompleteService } from './angular-google-autocomplete.service';

describe('AngularGoogleAutocompleteService', () => {
  let service: AngularGoogleAutocompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularGoogleAutocompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
