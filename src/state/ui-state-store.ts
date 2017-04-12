import { Injectable } from "@angular/core";
//import { UiState, initialUiState, maskState } from "./ui-state";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
//import { BehaviorSubject } from "rxjs/Rx";

export class FullpageState {
  index: number;
  currentPage: number;
  direction: string;
  action: string;
}

@Injectable()
export class UiStateStore {

  private _uiStateMaskSource = new Subject<string>();
  private _uiStateNavSource = new Subject<string>();
  private _uiFullpageSource = new Subject<FullpageState>();

  maskState$: Observable<string> = this._uiStateMaskSource.asObservable();
  navState$: Observable<string> = this._uiStateNavSource.asObservable();
  fullpageState$: Observable<FullpageState> = this._uiFullpageSource.asObservable();

  focusMask() {
    this._uiStateMaskSource.next('focus');
  }

  openMask() {
    this._uiStateMaskSource.next('open');
  }

  showNav() {
    this._uiStateNavSource.next('show');
  }

  hideNav() {
    this._uiStateNavSource.next('hide');
  }

  moveFullpage(pageState: FullpageState) {
    this._uiFullpageSource.next(pageState);
  }

  moveTo(pageState: FullpageState) {
    this._uiFullpageSource.next(pageState);
  }
  // updateMask(maskState: string) {
  //   switch(maskState) {
  //     case 'focus':
  //       this._uiStateSource.next(new UiState(1, true));
  //       break;
  //     case 'open':
  //       this._uiStateSource.next(new UiState(2, true));
  //       break;
  //   }
  // }

  // startBackendAction(message: string) {
  //   console.info('new action inited!');
  //   this._uiState.next({
  //     actionOngoing: true,
  //     message
  //   });
  // }

  // endBackendAction() {
  //   this._uiState.next({
  //     actionOngoing: false,
  //     message: ''
  //   });
  // }
}