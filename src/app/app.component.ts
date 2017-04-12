import { Component, HostListener, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UiStateStore } from "../state/ui-state-store";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  // @HostListener('click') onclick() {
  //   this.uiStateStore.openMask();
  // }

  constructor(
    private uiStateStore: UiStateStore,
    private router: Router
  ) {}

  ngAfterViewInit() {
        this.uiStateStore.fullpageState$.map((ev) => {
          if(ev.index == 1 && ev.direction == 'up') {
            return false;
          } else if(ev.index == 1 && ev.direction == 'down') {
            return true;
          }
        }).subscribe((toFocusMask) => {
          if(toFocusMask) {
            this.uiStateStore.focusMask();
          } else {
            this.uiStateStore.openMask();
          }
        });

        this.router.events.subscribe((val) => {
            if(val instanceof NavigationEnd) {
                this.uiStateStore.focusMask();
                this.uiStateStore.hideNav();
            }
        });
    }
}
