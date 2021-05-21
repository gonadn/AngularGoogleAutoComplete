import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {GoogleService} from './../services/google.service'
declare let google: any;


@Component({
  selector: 'angular-google-autocomplete',
  templateUrl: `./angular-google-autocomplete.component.html`,
  styleUrls: [`./angular-google-autocomplete.component.css`]
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
  @Output() selectedPlace = new EventEmitter<any>();

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
    this.selectedPlace.emit(item);
  }

  onChangeSearch(textQuery: string) {
    if (textQuery !== undefined && textQuery !== null && textQuery !== "") {
      this.searchPlaces(textQuery);
    }
  }

  onFocused(e: any){
    // do something when input is focused
    console.log(e);
  }

}
