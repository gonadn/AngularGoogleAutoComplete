import { Component } from '@angular/core';
// import {GoogleService} from './google.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapp';

  constructor() { 
    console.log(this);
  }

  public test(e: any) {
    console.log(e);
  }
}
