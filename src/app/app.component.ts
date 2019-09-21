import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Empty array decalration & initialization
  myArray = [];

  // Empty array declaration and initialization
  // Later will add the Key Values in this array 
  myJsonArray = [];

  // Array declaration with values of same data type
  technologies = ['HTML', 'CSS', 'javaScript', 'jQuery', 'bootstrap', 'Angular'];

  // Array declaration with values of different data type
  mixedArray = ['HTML5', 100345, 'jQuery', 454.67, 'bootstrap', true];

  // Array decalaration with Key Value pairs ( JSON Format )
  angularArray = [
    {
      id: 1,
      name: 'AngularJS',
    },
    {
      id: 2,
      name: 'Angular',
    }
  ];
}