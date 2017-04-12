import { Component, ElementRef, Renderer, ViewChild, AfterViewInit, HostListener, Input } from '@angular/core';
import { isBrowser } from 'angular2-universal';
import { UiStateStore } from '../../state/ui-state-store';
import 'rxjs/add/operator/map';

declare var Concrete: any;

@Component({
    selector: 'sjmy-mask',
    templateUrl: './mask.component.html',
    styleUrls: [
        './mask.component.css'
    ]
})
export class MaskComponent implements AfterViewInit {
    //currentMaskState: boolean = true;
    maskHeightRatio: number = 0.20;
    canvasWidth: number;
    canvasHeight: number;

    topWrapper: any;
    topLayer: any;
    topContext: any;
    bottomWrapper: any;
    bottomLayer: any;
    bottomContext: any;

    animationInProcess: boolean = false;
    maskOfIndexState: boolean = true;
    timer: any;
    totalFrame: number = 40;

    @ViewChild('logoContainer') logoContainerEl: ElementRef;

    @HostListener('window:resize', ['$event']) onResize(event: any) {
        this.canvasWidth = event.target.innerWidth;
        this.canvasHeight = event.target.innerHeight * this.maskHeightRatio;

        this.resizeCanvas(this.canvasWidth, this.canvasHeight);
        this.drawMask(this.canvasWidth, this.canvasHeight, 0);
    }

    //@Input('activeState') activeState: string;

    constructor(
        private uiStateStore: UiStateStore,
        private renderer: Renderer
    ) { }

    animateMask() {
        if (!this.animationInProcess) {
            this.animationInProcess = true;

            let frameIndex = 0;

            this.timer = setInterval(() => {
                frameIndex++;
                this.topLayer.sceneCanvas.clear();
                this.bottomLayer.sceneCanvas.clear();
                this.drawMask(this.canvasWidth, this.canvasHeight, frameIndex);

                if (frameIndex >= this.totalFrame) {
                    clearInterval(this.timer);
                    this.animationInProcess = false;
                    this.maskOfIndexState = !this.maskOfIndexState;
                }
            }, 15);
        }
    }

    resizeCanvas(cWidth: number, cHeight: number) {
        this.topWrapper.setSize(cWidth, cHeight);
        this.topLayer.setSize(cWidth, cHeight);

        this.bottomWrapper.setSize(cWidth, cHeight);
        this.bottomLayer.setSize(cWidth, cHeight);

        this.renderer.setElementStyle(this.logoContainerEl.nativeElement, 'top', cHeight / 2 - 30 + 'px');
    }

    drawMask(cWidth: number, cHeight: number, frame: number = 0) {
        let tan = 0.035;
        let bg = 85;
        let tPoints = [0, 0,
            0, cHeight - cWidth * tan,
            cWidth / 2, cHeight,
            cWidth, cHeight - cWidth * tan,
            cWidth, 0];
        let bPoints = [0, cHeight,
            0, cWidth * tan,
            cWidth / 2, 0,
            cWidth, cWidth * tan,
            cWidth, cHeight];

        let tan2 = 0.055;
        let bg2 = 65;
        let t2Points = [
            0, 0,
            0, cHeight - cWidth * tan2,
            cWidth / 2, cHeight,
            cWidth, cHeight - cWidth * tan2,
            cWidth, 0
        ];
        let b2Points = [
            0, cHeight,
            0, cWidth * tan2,
            cWidth / 2, 0,
            cWidth, cWidth * tan2,
            cWidth, cHeight];

        /**
         * middle points !!
         */
        let tStartPointY: number,
            bStartPointY: number,
            tEndPointY: number,
            bEndPointY: number;
        if (this.maskOfIndexState) {
            tStartPointY = cHeight;
            bStartPointY = 0;
            tEndPointY = cWidth * tan * 0.5;
            bEndPointY = cHeight - cWidth * tan * 0.5;

            bg2 = (100 - bg2) * (frame / this.totalFrame) + bg2;
        } else {
            tStartPointY = cWidth * tan * 0.5;
            bStartPointY = cHeight - cWidth * tan * 0.5;
            tEndPointY = cHeight;
            bEndPointY = 0;

            bg2 = 100 - (100 - bg2) * (frame / this.totalFrame);
        }

        this.topContext.beginPath();
        this.topContext.moveTo(tPoints[0], tPoints[1]);

        this.bottomContext.beginPath();
        this.bottomContext.moveTo(bPoints[0], bPoints[1]);
        for (let i = 2; i < 10; i = i + 2) {
            let tPointX = tPoints[i], tPointY = tPoints[i + 1],
                bPointX = bPoints[i], bPointY = bPoints[i + 1];

            if (i == 4) {
                tPointY = (tEndPointY - tStartPointY) * (frame / this.totalFrame) + tStartPointY;
                bPointY = (bEndPointY - bStartPointY) * (frame / this.totalFrame) + bStartPointY;
            }

            this.topContext.lineTo(tPointX, tPointY);
            this.bottomContext.lineTo(bPointX, bPointY);
        }

        this.topContext.closePath();
        this.topContext.fillStyle = 'hsla(0, 0%, ' + bg + '%, 1)';
        this.topContext.fill();

        this.bottomContext.closePath();
        this.bottomContext.fillStyle = 'hsla(0, 0%, ' + bg + '%, 1)';
        this.bottomContext.fill();

        /**
         * draw a second mask on top of the first one;
         */
        this.topContext.beginPath();
        this.topContext.moveTo(t2Points[0], t2Points[1]);
        this.bottomContext.beginPath();
        this.bottomContext.moveTo(bPoints[0], bPoints[1]);
        for (let i = 2; i < 10; i = i + 2) {
            let t2PointX = t2Points[i], t2PointY = t2Points[i + 1],
                b2PointX = b2Points[i], b2PointY = b2Points[i + 1];

            if (i == 4) {
                t2PointY = (tEndPointY - tStartPointY) * (frame / this.totalFrame) + tStartPointY;
                b2PointY = (bEndPointY - bStartPointY) * (frame / this.totalFrame) + bStartPointY;
            }

            this.topContext.lineTo(t2PointX, t2PointY);
            this.bottomContext.lineTo(b2PointX, b2PointY);
        }

        this.topContext.closePath();
        this.topContext.fillStyle = 'hsla(0, 0%, ' + bg2 + '%, 1)';
        this.topContext.fill();

        this.bottomContext.closePath();
        this.bottomContext.fillStyle = 'hsla(0, 0%, ' + bg2 + '%, 1)';
        this.bottomContext.fill();
    }

    ngOnDestroy() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    ngAfterViewInit() {
        if (isBrowser) {
            this.topWrapper = new Concrete.Wrapper({ container: document.getElementById('topConcreteContainer') });
            this.bottomWrapper = new Concrete.Wrapper({ container: document.getElementById('bottomConcreteContainer') });

            this.topLayer = new Concrete.Layer();
            this.topWrapper.add(this.topLayer);
            this.topContext = this.topLayer.sceneCanvas.context;

            this.bottomLayer = new Concrete.Layer();
            this.bottomWrapper.add(this.bottomLayer);
            this.bottomContext = this.bottomLayer.sceneCanvas.context;

            this.canvasWidth = window.innerWidth;
            this.canvasHeight = window.innerHeight * this.maskHeightRatio;
            this.resizeCanvas(this.canvasWidth, this.canvasHeight);
            this.drawMask(this.canvasWidth, this.canvasHeight);

            this.uiStateStore.maskState$.map((toState) => {
                return toState == 'focus';
            }).subscribe(toState => {
                if (toState != this.maskOfIndexState) {
                    this.animateMask();
                }
            });
        }
    }
}
