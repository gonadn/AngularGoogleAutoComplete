import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams, HttpHeaders } from '@angular/common/http';


declare let google: any;

interface PlaceData {
  pid: string;
  description: string;
  lat: number;
  lng: number;
}

@Injectable({
  providedIn: 'root'
})

export class GoogleService {

  public latitude: any;
  public longitude: any;
  public httpClient: any;
  private autocompleteService: any;
  private placesSrv: any;
  public predictions: any;
  public arr: any[] = [];
  public google: any;

  constructor() {

    if (!this.isGoogleLibExists())
    {
      throw new Error('Google maps library can not be found');
    }

  }

  public autoCompleteService = () => {
    return new Promise((resolve, reject) => {
      this.autocompleteService = new google.maps.places.AutocompleteService();
      if(this.autocompleteService !== undefined && this.autocompleteService !== null) {
        resolve(this.autocompleteService);
      } else {
        reject('AutoComplete Serice failed.');
      }
    });
  }

  public placesService = () => {
    return new Promise((resolve, reject) => {
      this.placesSrv = new google.maps.places.PlacesService(document.createElement("div"));
      if(this.placesSrv !== undefined && this.placesSrv !== null) {
         resolve(this.placesSrv);
      } else {
        reject('Places Serice failed.');
      }
    });
  }

  public setCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position: any) => {
            if (position !== undefined) {
               resolve(position);
            } else {
              reject('Failed to get current position.');
            }
        });
      }
    });
  }

  public getQueryPredictions = (searchQuery: string) => {
    return new Promise((resolve, reject) => {
      const request = {
        input: searchQuery,
        componentRestrictions: {country: 'no'},
        types: ['(address)']
      };

      this.autocompleteService.getQueryPredictions(request, (
        predictions: google.maps.places.QueryAutocompletePrediction[] |
        null, status: google.maps.places.PlacesServiceStatus) => {
          if (status !== google.maps.places.PlacesServiceStatus.OK || !predictions) {
              reject(status);
          } else {
            if (predictions.length > 0) {
              resolve(predictions);
            }
          }
      });
    });
  }

  public getMyLocation = (latitude: number, longitude: number) => {
    return new Promise((resolve, reject) => {
      const myLocation = new google.maps.LatLng(latitude, longitude);
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'latLng': myLocation }, (results: any, status: any ) => {
        if (status !== google.maps.places.PlacesServiceStatus.OK || !results) {
            reject(status);
        } else {
          if (results.length > 0) {
            resolve(results);
          }
        }
      });
    });
  }

  public isGoogleLibExists(): boolean {
    return !(!google || !google.maps || !google.maps.places);
  }


}
