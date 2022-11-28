import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ActivatedRoute } from '@angular/router';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  // add field
  composerId: number;
  composer!: IComposer;


  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId')! ,10);

     // checks to see if composerId has a value
    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId)!;
    }
  }

  ngOnInit(): void {
  }

}
