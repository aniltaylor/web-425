/*
   Title: my-details.component.ts
 Author: Professor Krasso
 Modified By: Anita Taylor
 Date: 10/29/2022
 Description:  My details component (Details view)
 */


import { Component, OnInit } from '@angular/core';


export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2022", "#CodingWithAngular", "#ngOmaha"
  ]

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  toString() {
    console.log(`\n  Full name: ${this.fullName}\n  Favorite food: ${this.favoriteFood}\n  Favorite color: ${this.favoriteColor}`);
  }
}


@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  // set up myProfile variable and data type Person
  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Anita Taylor", "Bacon", "Blue");
    this.myProfile.toString();


   }

  ngOnInit(): void {
  }

}
