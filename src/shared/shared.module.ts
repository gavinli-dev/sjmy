import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavLinkComponent, DrawerNavComponent } from './drawer-nav/component';
import { SlidePageComponent, SliderComponent } from './fullpage-slider/component';
import { SliderNavComponent } from './fullpage-slider/slider-nav.component';
import { FpStateService } from './fullpage-slider/fp-state.service';
//import { FullpageSliderEventService } from './fullpage-slider/event.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        DrawerNavComponent,
        NavLinkComponent,
        SlidePageComponent,
        SliderNavComponent,
        SliderComponent
    ],
    declarations: [
        DrawerNavComponent,
        NavLinkComponent,
        SlidePageComponent,
        SliderNavComponent,
        SliderComponent
    ],
    providers: [
        FpStateService
    ]
})
export class SharedModule { }
