import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <fullpage-slider>
      <slide-page>
        <div class="slide-center-content center-align">
          <h1>您访问的页面找不到哦</h1>
        </div>
      </slide-page>
    <fullpage-slider>
  `
})
export class NotFoundComponent {}