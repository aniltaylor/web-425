/*
 Title: composer-list.component.ts
 Author: Professor Krasso
 Modified By: Anita Taylor
 Date: 10/26/2022
 Description:  Composer list component (Composer list view)
 */


import { Component, OnInit } from '@angular/core';

/* Composer Class */
export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }

}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>

  // composers array
  constructor() {
    this.composers = [
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Johann Sebastian Bach", "Classical"),
      new Composer("Frederic Chopin", "Classical"),
      new Composer("Joseph Haydn", "Classical"),
      new Composer("Ludwig van Beethoven", "Classical"),

    ]
  }

  ngOnInit(): void {
  }

}
