import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-angular-google-autocomplete',
  templateUrl: `./angular-google-autocomplete.component.html`,
  styles: [
  ]
})

export class AngularGoogleAutocompleteComponent implements OnInit {

  keyword = 'name';
  data = [
     {
       id: 1,
       name: 'Usa'
     },
     {
       id: 2,
       name: 'England'
     }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  selectEvent(item: any) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e: any){
    // do something when input is focused
  }

}
