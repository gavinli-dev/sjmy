import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { isBrowser } from 'angular2-universal';
import { Faq }          from '../../db/model/faq';
import { FaqService }   from '../../db/faq.service';
import { slideInDownAnimation } from './../animations';

declare var Ps: any;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  providers: [FaqService],
  animations: [slideInDownAnimation],
  host: {'[@routeAnimation]':''}
})
export class FaqComponent implements OnInit{
    @ViewChild('psLocation') psLocation: ElementRef;
    @ViewChild('psFaq') psFaq: ElementRef;
    faqList: Array<Faq>; 

    constructor(private faqService: FaqService) {}

    ngOnInit() {
        this.faqList = this.faqService.getAll();
        if(isBrowser) {
          let TH = this;
          setTimeout(function() {
            Ps.initialize(TH.psFaq.nativeElement);
            Ps.initialize(TH.psLocation.nativeElement);
          }, 100);
        }
    }
}
