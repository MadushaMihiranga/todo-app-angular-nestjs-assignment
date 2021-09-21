import {Component, OnDestroy, OnInit} from '@angular/core';
import { FlexLayoutModule, MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'nvisionassessment';
  mediaSub!: Subscription;
  constructor(public mediaObserver: MediaObserver) {
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange)=>{
      console.log(result.mqAlias);
    })
  }
}
