import { Component, Input, OnInit } from '@angular/core';

import { UiStateStore } from '../../state/ui-state-store';

@Component({
  selector: 'slider-nav',
  template: `
    <ul>
      <li *ngFor="let pageName of pageNames; let idx = index" [class.active]="navClass(idx)" (click)="onClick(idx)">
        <div class="page-name">{{pageName}}</div>
      </li>
    </ul>
  `,
  styleUrls: ['./slider-nav.component.css']
})
export class SliderNavComponent implements OnInit{
  currentPage: number = 0;
  @Input('pageNames') pageNames: Array<String> = [];

  constructor(
    private _uiStateStore: UiStateStore
  ) { }

  navClass(idx: number) {
    return idx == this.currentPage;
  }

  onClick(idx: number) {
    // if() {

    // }
    // this._uiStateStore.moveTo({
    //   index: idx,
    //   currentPage: idx,
    //   direction: 'next',
    //   action: 'next'
    // });
  }

  ngOnInit() {
    this._uiStateStore.fullpageState$.subscribe(
      state => {
        this.currentPage = state.currentPage;
      }
    );
  }
}