/*
 Title: composer-list.component.ts
 Author: Professor Krasso
 Modified By: Anita Taylor
 Date: 10/26/2022
 Description:  Composer list component (Composer list view)
 */


 import { Component, OnInit } from '@angular/core';
 import { IComposer } from '../composer.interface';
  import { ComposerService } from '../composer.service';


 @Component({
   selector: 'app-composer-list',
   templateUrl: './composer-list.component.html',
   styleUrls: ['./composer-list.component.css']
 })
 export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;

   // composers array
   constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
   }

   ngOnInit(): void {
   }

 }
