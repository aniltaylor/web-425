
/*
   Title: app.component.ts
 Author: Professor Krasso
 Modified By: Anita Taylor
 Date: 10/21/2022
 Description: App component
 */


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Assignment 1.5 - Components';
}
