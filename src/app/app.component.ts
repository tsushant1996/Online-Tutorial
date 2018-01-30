import { Component } from '@angular/core';

// Import the DataService
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  post = {

    isfav:'sushant',
    title:'ssss'
  }
  // Create an instance of the DataService through dependency injection
  constructor() {
  }
}