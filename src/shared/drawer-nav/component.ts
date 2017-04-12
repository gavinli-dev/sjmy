import {
    Component, ElementRef, HostListener, ContentChildren, EventEmitter, Input, Output,
    OnInit, AfterContentInit, QueryList
} from '@angular/core';
import { isBrowser } from 'angular2-universal';
import { UiStateStore } from '../../state/ui-state-store';

@Component({
    selector: 'nav-link',
    template: `
        <a routerLink='{{link}}'>{{label}}</a>
    `,
    styles: [`
        :host {
            display: block;
            line-height: 2;
            text-align: center;
            margin: 1rem;
        }
        a {
            display: block;
            line-height: 2;
            color: #fff;
            font-size: 14px;
            -webkit-transition: color .3s;
            transition: color .3s;
            text-decoration: none;
        }
        a:hover {
            -webkit-transition: color .3s;
            transition: color .3s;
            color: #cf372e;
        }
    `]
})
export class NavLinkComponent {
    @Input('link') link: string;
    @Input('label') label: string;

    //private emitChangeSource = new Subject<boolean>();
    //public changeEmitted$: Observable<boolean> = this.emitChangeSource.asObservable();;
    

    // changeEmitted$ 
    @HostListener('click', ['$event']) onClick(event: boolean) {
        //this.emitChangeSource.next(true);
    }
}

@Component({
    selector: 'drawer-nav',
    templateUrl: './component.html',
    styleUrls: [
        './component.css'
    ]
})
export class DrawerNavComponent implements OnInit, AfterContentInit {
    @ContentChildren(NavLinkComponent) navLinks: QueryList<NavLinkComponent>;
    isActive: boolean = false;
    navbarExpanded: boolean = false;
    navCollectionHidden: boolean = false;

    mobileDisplay: boolean = false;

    constructor(
        private el: ElementRef,
        private _uiStateStore: UiStateStore
    ) { }

    // @HostListener('navClicked', ['$event']) onClick(event: any) {
    //     console.log('clicked');
    //     //this.clickEvent.emit(true);
    // }

    toggleNav() {
        if(isBrowser) {
            this.el.nativeElement.blur();
            this.isActive = !this.isActive;
            //if(this.mobileDisplay) {
            if (this.isActive) {
                this.navbarExpanded = true;
                this.navCollectionHidden = false;
            } else {
                this.navbarExpanded = false;
                this.navCollectionHidden = true;
            }
        }
    }

    hideNav() {
        if(isBrowser) {
            this.el.nativeElement.blur();
            this.isActive = false;
            this.navbarExpanded = false;
            this.navCollectionHidden = true;
        }
    }

    // @HostListener('window:resize', ['$event'])
    // onResize(ev: any) {
    //     let windowWidth = ev.target.innerWidth;
    //     if(windowWidth <= 680 && !this.mobileDisplay) {
    //         //enter mobile display mode
    //         //set nav collection to hide, and show burger button
    //         this.mobileDisplay = true;
    //         this.isActive = false;
    //         this.navCollectionHidden = true;
    //     } else if(windowWidth > 680 && this.mobileDisplay) {
    //         //exit mobile display mode;
    //         //set nav collection to show, hide burger button
    //         this.mobileDisplay = false;
    //         this.isActive = true;
    //         this.navbarExpanded = false;
    //         this.navCollectionHidden = false;
    //     }
    // }

    ngOnInit() {
        // let windowWidth = window.innerWidth;
        // if(windowWidth <= 680) {
        //     this.mobileDisplay = true;
        //     this.navCollectionHidden = true;
        // }
    }

    ngAfterContentInit() {
        this._uiStateStore.navState$.subscribe((toState) => {
            if(toState == 'hide') {
                this.hideNav();
            }
        })
    }
}