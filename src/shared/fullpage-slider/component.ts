import { Component, HostListener, HostBinding, ContentChildren, AfterContentInit, QueryList,
    Input, Output, EventEmitter,
    trigger, state, style, transition, animate, keyframes }    from '@angular/core';
import { UiStateStore } from '../../state/ui-state-store';
/** 
 * Slide Page Component
 **/
@Component({
    selector: 'slide-page',
    template: `
        <ng-content></ng-content>
    `,
    styles: [`
        :host {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            transform: translateY(0);
            box-shadow: 0px 0px 5px 0 #a0a0a0; 
        }
    `],
    animations: [
        trigger('pageState', [
            state('offStage', style({
                transform: 'translateY(100%) scale(0.9)'
            })),
            state('onStage', style({
                transform: 'translateY(0px) scale(1)'
            })),
            transition('offStage => onStage', animate(800, keyframes([
                style({transform: 'translateY(100%) scale(0.9)'}),
                style({transform: 'translateY(20%) scale(0.9)'}),
                style({transform: 'translateY(0) scale(1)'})
            ]))),
            transition('onStage => offStage', animate(800, keyframes([
                style({transform: 'translateY(0) scale(1)'}),
                style({transform: 'translateY(20%) scale(0.9)'}),
                style({transform: 'translateY(100%) scale(0.9)'})
            ])))
        ])
    ]
})
export class SlidePageComponent {
    @HostBinding('@pageState') pageState: string = 'offStage';
    @HostListener('@pageState.done') onAnimationDone() {
        this.inAnimation = false;
    }
    inAnimation: boolean = false;
    private _cid: number;

    set cid(id: number) {
        this._cid = id;
        if(this._cid == 0) {
            this.pageState = 'onStage';
        }
    }

    get cid(): number {
        return this._cid;
    }

    upStage() {
        this.inAnimation = true;
        this.pageState = 'onStage';
    }

    offStage() {
        this.inAnimation = true;
        this.pageState = 'offStage';
    }
}

/** 
 * Slider Container Component
 **/
@Component({
    'selector': 'fullpage-slider',
    'template': `
        <ng-content></ng-content>
    `,
    'styles': [`
        :host {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            overflow: hidden;
        }
    `]
    // ,
    // animations: [
    //     trigger('flyInOut', [
    //         transition(':enter', animate(8000, keyframes([
    //             style({transform: 'translateX(100%)'}),
    //             style({transform: 'translateX(0)'})
    //         ]))),
    //         transition('* => void', animate(8000, keyframes([
    //             style({transform: 'scale(1)'}),
    //             style({transform: 'scale(0.1)'})
    //         ])))
    //     ])
    // ]
})
export class SliderComponent implements AfterContentInit {
    constructor(
        private _uiStateStore: UiStateStore
    ) {}

    //@HostBinding('@flyInOut') flyInOut: string = 'offStage';

    

    @HostListener('mousewheel', ['$event'])     onMouseWheelChrome(event: any)  { this.mouseWheelFunc(event); }
    @HostListener('DOMMouseScroll', ['$event']) onMouseWheelFirefox(event: any) { this.mouseWheelFunc(event); }
    @HostListener('onmousewheel', ['$event'])   onMouseWheelIE(event: any)      { this.mouseWheelFunc(event); }
    @HostListener('window:resize', ['$event'])  onResize(event: any)            { this.resize(event); }
    
    private mouseWheelFunc(event: any) {
        var event = window.event || event; // old IE support
        var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        if (delta > 0) {
            this.mouseWheelUp(event);
        } else if (delta < 0) {
            this.mouseWheelDown(event);
        }
        event.returnValue = false;
        
        if (event.preventDefault) {
            event.preventDefault();
        }
    }

    @ContentChildren(SlidePageComponent) sps: QueryList<SlidePageComponent>;
    @Output() pageScroll = new EventEmitter<Object>();
    
    slideLength: number = 0;
    currentIndex: number = 0;
    currentAnimationSlide: SlidePageComponent;

    mouseWheelDown(event: any) {
        if(this.currentIndex < this.slideLength - 1) {
            if(!this.currentAnimationSlide.inAnimation) {
                this.currentIndex++;
                let cid = this.currentIndex;
                let animationSlide: SlidePageComponent = null;
                this.sps.forEach(function(slide, index) {
                    if(cid == index) {
                        animationSlide = slide
                    }
                })

                if(animationSlide) {
                    this.currentAnimationSlide = animationSlide;
                    animationSlide.upStage();
                    this.pageScroll.emit({
                        index: cid,
                        direction: 'up'
                    });
                    
                    this._uiStateStore.moveFullpage({
                        index: cid,
                        currentPage: cid,
                        direction: 'up',
                        action: 'next'
                    });
                }
            }
        }
    }
    mouseWheelUp(event: any) {
        if(this.currentIndex > 0) {
            if(!this.currentAnimationSlide.inAnimation) {
                let cid = this.currentIndex;
                let animationSlide: SlidePageComponent = null;
                this.sps.forEach(function(slide, index) {
                    if(cid == index) {
                        animationSlide = slide;
                    }
                })

                if(animationSlide) {
                    this.currentAnimationSlide = animationSlide;
                    animationSlide.offStage();
                    this.pageScroll.emit({
                        index: cid, 
                        direction: 'down'
                    });
                    
                    this._uiStateStore.moveFullpage({
                        index: cid,
                        currentPage: cid - 1,
                        direction: 'down',
                        action: 'pre'
                    });
                }

                this.currentIndex--;
            }
        }
    }
    resize(event: any) {
        //console.log(window.innerHeight + " " + window.innerWidth);
        //console.log(self);
    }
    ngAfterContentInit() {
        this.currentAnimationSlide = this.sps.first;
        this.sps.forEach(function(slide, index) {
            slide.cid = index;
        })
        
        this.slideLength = this.sps.length;
    }
}