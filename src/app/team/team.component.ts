import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { isBrowser } from 'angular2-universal';
import { slideInDownAnimation } from './../animations';

declare var Ps: any;

declare var Swiper: any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  animations: [slideInDownAnimation],
  host: {'[@routeAnimation]':''}
})
export class TeamComponent implements OnInit, AfterViewInit {
    @ViewChild('certSwiper') certSwiper: ElementRef;
    certList: Array<String> = [
        '/assets/img/team/cert-01.jpg',
        '/assets/img/team/cert-02.jpg',
        '/assets/img/team/cert-03.jpg',
        '/assets/img/team/cert-04.jpg',
        '/assets/img/team/cert-05.jpg',
        '/assets/img/team/cert-06.jpg',
        '/assets/img/team/cert-07.jpg',
        '/assets/img/team/cert-08.jpg',
        '/assets/img/team/cert-09.jpg',
        '/assets/img/team/cert-10.jpg'
    ];

    ngOnInit() {
        
    }

    ngAfterViewInit() {
      //if(isBrowser) {
        // var swiper = new Swiper(this.certSwiper.nativeElement, {
        //     pagination: '.swiper-pagination',
        //     slidesPerView: 2,
        //     paginationClickable: true,
        //     spaceBetween: 40,
        //     nextButton: '.swiper-button-next',
        //     prevButton: '.swiper-button-prev'
        // });
      //}

      if(isBrowser) {
          let TH = this;
          setTimeout(function() {
            Ps.initialize(TH.certSwiper.nativeElement);
            //Ps.initialize(TH.psLocation.nativeElement);
          }, 100);
        }


    }
}