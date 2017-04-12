import { Injectable } from "@angular/core";

import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

export class FpState {
  lastPage: number;
  currentPage: number;
  direction: string;
}

@Injectable()
export class FpStateService {
  private _fpSource = new Subject<FpState>();

  state$: Observable<FpState> = this._fpSource.asObservable();

  moveFullpage(fpState: FpState) {
    this._fpSource.next(fpState);
  }

  moveTo(fpState: FpState) {
    this._fpSource.next(fpState);
  }
}