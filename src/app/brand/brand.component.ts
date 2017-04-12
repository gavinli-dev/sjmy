import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { isBrowser } from 'angular2-universal';
import { slideInDownAnimation } from './../animations';

declare var Ps: any;

export class Brand {
    id: string;
    name: string;
    url: string;
}

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
  animations: [slideInDownAnimation],
  host: {'[@routeAnimation]':''}
})
export class BrandComponent implements OnInit {
    brandList: Array<Brand> = [
        {id: '01', name: 'Primare',         url: 'www.primare.net'},
        {id: '02', name: 'JBL',             url: 'www.jbl.com'},
        {id: '03', name: 'CLASSE',          url: 'www.classeaudio.com'},
        {id: '06', name: 'Integra',         url: 'www.integrahometheater.com'},
        {id: '07', name: 'Harman / Kardon', url: 'www.harmankardon.com'},
        {id: '08', name: 'REVEL',           url: 'www.revelspeakers.com'},
        {id: '09', name: 'KEF',             url: 'www.kef.com'},
        {id: '10', name: 'DENON',           url: 'www.denon.com'},
        {id: '13', name: 'ROTEL',           url: 'www.retel.com'},
        {id: '14', name: 'B&W',             url: 'www.bowers-wilkins.net'},
        {id: '15', name: 'marantz',         url: 'us.marantz.com'}
    ];
    selectedBrand: Brand = this.brandList[0];

    @ViewChild('psBrand') psBrand: ElementRef;
    @ViewChild('authList') authList: ElementRef;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            for (let i = 0; i < this.brandList.length; i++) {
                if (this.brandList[i].id == params['id']) {
                    this.selectedBrand = this.brandList[i];
                }
            }
            if (this.selectedBrand == undefined) {
                this.selectedBrand = this.brandList[0];
            }
        });
        if (isBrowser) {
            let TH = this;

            setTimeout(function () {
                Ps.initialize(TH.psBrand.nativeElement);
                Ps.initialize(TH.authList.nativeElement);
            }, 100);
        }
    }
}
