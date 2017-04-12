declare var PIXI: any;
/** green color :  0x99ee00 */
export class Waz {
  stopAnimation = true;

  distance: number = 18;
  amountX: number = 90;
  amountY: number = 6;
  paticles: Array<any> = new Array();
  TIME_COUNT: number = 0;

  renderer: any;
  stage: any;

  constructor(canvasHolder) {
    this.renderer = PIXI.autoDetectRenderer(1000, 400, {
      antialias: true,
      transparent: true,
      autoResize: true
    });

    this.stage = new PIXI.Container();
    canvasHolder.appendChild(this.renderer.view);
  }

  init() {
    //console.log("function called");
    
    var i = 0;
    for(var iy = 0; iy < this.amountY; iy++) {
      var container = new PIXI.Container();
      for(var ix = 0; ix < this.amountX; ix++) {
        var particle = this.paticles[i++] = new PIXI.Graphics();
        var pointX = ix * this.distance - ((this.amountX * this.distance) / 2) + (this.renderer.width / 2);

        particle.beginFill(0xe04040, 1);
        particle.drawCircle(pointX, this.renderer.height / 2, 2);
        particle.alpha = Math.sin(Math.PI * ix / this.amountX) * 0.8;
        particle.endFill();
        container.addChild(particle);
      }
      container.scale.x = container.scale.y = 1 - (iy / 10);
      container.x = (this.renderer.width / 20) * iy;

      this.stage.addChild(container);
    }

    this.renderer.render(this.stage);
    //window.onresize = this.resize();
    this.resize();
  }

  animationLoop() {
    
    if(!this.stopAnimation) {
      requestAnimationFrame( () => this.animationLoop() );
    }
    var i = 0;
    for(var iy = 0; iy < this.amountY; iy++) {
      for(var ix = 0; ix < this.amountX; ix++) {

        var particle = this.paticles[i++];
        var pointX = ix * this.distance - ((this.amountX * this.distance) / 2) + (this.renderer.width / 2);
        var waveHeightRatio = Math.sin(Math.PI * ix / this.amountX) * 100;

        var pointY = Math.sin( (pointX + this.TIME_COUNT + iy * 5) * 0.025 ) * waveHeightRatio;
        particle.y = pointY;
      }
    }

    this.TIME_COUNT = this.TIME_COUNT + 0.2;
    this.renderer.render(this.stage);
    //console.log('loop started ' + this.TIME_COUNT);
  }

  resize() {
    //this.renderer.view.style.width = window.innerWidth + 'px';
    //this.renderer.view.style.height = window.innerHeight + 'px';
  }
  

  start() {
    this.stopAnimation = false;
    this.animationLoop();
  }

  stop() {
    this.stopAnimation = true;
  }
}