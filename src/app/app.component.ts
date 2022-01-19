import { Component } from '@angular/core';
import { WATCH_LIST } from './DATA';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  watchList = WATCH_LIST


  constructor() {
  }

}
