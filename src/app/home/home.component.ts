import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy, HostListener } from '@angular/core';
import { isBrowser } from 'angular2-universal';
import { UiStateStore } from '../../state/ui-state-store';
import { slideInDownAnimation } from './../animations';
import { Waz } from './waz';

declare var Swiper: any;
//declare var Wavez: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideInDownAnimation],
  host: {'[@routeAnimation]':''}
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('bgSwiper') bgSwiper: ElementRef;
  @ViewChild('waz') wazEl: ElementRef;
  bg1: string = "url('/assets/img/index-bg-1.jpg')";
  bg2: string = "url('/assets/img/index-bg-2.jpg')";

  waz: Waz;
  @HostListener('window:resize', ['$event']) onResize(event: any) {
      this.waz.resize();
  }

  eventList: Array<any> = [
    {'year': '1995', 'text': '成立于保成路'},
    {'year': '1998', 'text': '进驻新世界百货'},
    {'year': '1999', 'text': '进驻中南商业大楼'},
    {'year': '2000', 'text': '主营品牌线升级'},
    {'year': '2007', 'text': '启动品牌服务理念'},
    {'year': '2008', 'text': '企业名更新换代'},
    {'year': '2010', 'text': '率先引入影音定制概念'},
    {'year': '2011', 'text': '建成华中区首个智能型家庭影音系统试听室'},
    {'year': '2012', 'text': '荣获“专业私人影院设计大奖”'},
    {'year': '2014', 'text': '用户突破12000户'},
    {'year': '2015', 'text': '华中区最顶级专业影音会所开业'},
    {'year': '2016', 'text': '公司整体搬迁至绿地国际金融城'}
  ]

  constructor(
    private uiStateStore: UiStateStore,
  ) {}

  ngAfterViewInit() {
    if(isBrowser) {
      var swiper = new Swiper(this.bgSwiper.nativeElement, {
        pagination: '.swiper-pagination',
        preloadImages: false,
        paginationClickable: true,
        spaceBetween: 0,
        autoplay: 8000
      });
      this.waz = new Waz(this.wazEl.nativeElement);
      this.waz.init();
    }

    this.uiStateStore.fullpageState$.map((ev) => {
      if(ev.index == 1 && ev.direction == 'up') {
        return false;
      } else if(ev.index == 1 && ev.direction == 'down') {
        return true;
      }
    }).subscribe((toFocusMask) => {
      if(toFocusMask) {
        this.waz.stop();
      } else {
        this.waz.start();
      }
    });
  }

  ngOnDestroy() {
    if(isBrowser) {
      this.waz.stop();
    }
  }
}
