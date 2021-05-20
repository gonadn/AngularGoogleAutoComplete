import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularGoogleAutocompleteComponent } from './angular-google-autocomplete.component';

describe('AngularGoogleAutocompleteComponent', () => {
  let component: AngularGoogleAutocompleteComponent;
  let fixture: ComponentFixture<AngularGoogleAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularGoogleAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularGoogleAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
