/**
 * This file and `main.browser.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */

import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './index';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { BrandComponent } from './brand/brand.component';
// import { RouterModule } from '@angular/router';
// import { appRoutes } from './app/app.routing';

/**
 * Top-level NgModule "container"
 */
@NgModule({
  /** Root App Component */
  bootstrap: [ AppComponent ],
  /** Our Components */
  declarations: [
    AppComponent,
    HomeComponent,
    ShowcaseComponent,
    BrandComponent
  ],
  imports: [
    /**
     * NOTE: Needs to be your first import (!)
     * NodeModule, NodeHttpModule, NodeJsonpModule are included
     */
    UniversalModule,
    FormsModule,
    AppRoutingModule,
    SharedModule
    /**
     * using routes
     */
    // RouterModule.forRoot(appRoutes)
  ]
})
export class AppModule { }