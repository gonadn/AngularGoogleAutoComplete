import { Component, OnInit } from '@angular/core';
import {GoogleService} from './../services/google.service'
declare let google: any;


@Component({
  selector: 'angular-google-autocomplete',
  templateUrl: `./angular-google-autocomplete.component.html`,
  styles: [
  ]
})

export class AngularGoogleAutocompleteComponent implements OnInit {

  public googleService: GoogleService;
  private placesService: any;
  private autocompleteService: any;
  public autocompleteResults: any[] = [];
  public currentPoslatitude: number = 0;
  public currentPoslongitude: number = 0;
  public latitude: number = 0;
  public longitude: number = 0;
  keyword = 'description';

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

  constructor() {
     this.googleService = new GoogleService();
  }

  ngOnInit(): void {
    this.initialize();
  }

  private initialize(): void {
    this.googleService.autoCompleteService().then((autocompService: any) => {
      this.autocompleteService = autocompService;
    });

    this.googleService.placesService().then((plcService: any) => {
      this.placesService = plcService;
    });
  }

  public searchPlaces = (textQuery: string) => {
    this.googleService.getQueryPredictions(textQuery).then((predictions: any) => {
      if (predictions !== undefined && predictions !== null) {
        this.autocompleteResults = predictions;
      }
    });
  }

  selectEvent(item: any) {
    // do something with selected item
    console.log(item);
  }

  onChangeSearch(textQuery: string) {
    if (textQuery !== undefined && textQuery !== null && textQuery !== "") {
      console.log(textQuery);
      this.searchPlaces(textQuery);
    }
  }

  onFocused(e: any){
    // do something when input is focused
    console.log(e);
  }

}
