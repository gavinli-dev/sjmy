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
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './index';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MaskComponent } from './mask/mask.component';
import { HomeComponent } from './home/home.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ShowcaseListComponent } from './showcase/showcase-list.component';
import { BrandComponent } from './brand/brand.component';
import { TeamComponent } from './team/team.component';
import { FaqComponent } from './faq/faq.component';
// import { RouterModule } from '@angular/router';
// import { appRoutes } from './app/app.routing';

import { UiStateStore } from "../state/ui-state-store";
 
/**
 * Top-level NgModule "container"
 */
@NgModule({
  /** Root App Component */
  bootstrap: [ AppComponent ],
  imports: [
    /**
     * NOTE: Needs to be your first import (!)
     * NodeModule, NodeHttpModule, NodeJsonpModule are included
     */
    FormsModule,
    HttpModule,
    JsonpModule,
    UniversalModule,
    AppRoutingModule,
    SharedModule
  ],
  /** Our Components */
  declarations: [
    MaskComponent,
    AppComponent,
    ShowcaseListComponent,
    routedComponents
  ],
  providers: [
    UiStateStore
  ]
})
export class AppModule { }