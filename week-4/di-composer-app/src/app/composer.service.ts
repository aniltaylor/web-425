import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

    // create a composer property
  composers: Array<IComposer>

  constructor() {


this.composers = [
  {
    composerId:100, fullName:"Fernando Sor", genre:"Contemporary Classical"
 },
 {
    composerId:101, fullName:"Johann Sebastian Bach", genre:"Classical"
 },
 {
    composerId:102, fullName:"Frederic Chopin", genre:"Classical"
 },
 {
    composerId:103, fullName:"Joseph Haydn", genre:"Classical"
 },
 {
    composerId:104, fullName:"Wolfgang Amadeus Mozart", genre:"Classical"
  }
    ]

  }

getComposers() {
    // return 5 composers objects
    return this.composers;
  }

  getComposer(composerId: number) {
    // Loop over the composer array and return the object that matches the passed-in composerId
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    } return
  }
}

