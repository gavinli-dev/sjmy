import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { isBrowser } from 'angular2-universal';

import { Showcase } from '../../db/model/showcase';
import { ShowcaseService } from '../../db/showcase.service';
import { slideInDownAnimation } from './../animations';

declare var Swiper;

const tl: Array<string> = [
  "",
  "HIFI音乐",
  "别墅照片",
  "客厅影院"
];

@Component({
  selector: 'showcase-list',
  templateUrl: './showcase-list.component.html',
  styleUrls: ['./showcase-list.component.css'],
  providers: [ShowcaseService],
  animations: [slideInDownAnimation],
  host: {'[@routeAnimation]':''}
})
export class ShowcaseListComponent implements AfterViewInit {
  npp: number = 4;

  sl: Array<Showcase>;
  pageCount: number;
  pageLinks: Array<string>;
  currentPage: number = 1;

  listTitle: string = "";

  

  @ViewChild('showcaseSwiper') scSwiper: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private showcaseService: ShowcaseService
  ) { }

  onItemClick(itemId) {
    this.router.navigate(['/showcase/item/' + itemId, { page: this.currentPage }]);
  }

  ngAfterViewInit() {
    let errMsg: any;

    this.route.params.subscribe((params: Params) => {
      if(params['id'] != undefined) {
        let pString: string = params['id'];
        let groupId: number, page: number;
        let fields = pString.split('-');

        if(fields.length < 2) {
          groupId = parseInt(fields[0]);
          page = 1;
        } else {
          groupId = parseInt(fields[0]);
          page = parseInt(fields[1]);
        }

        if(groupId > 3) {
          this.router.navigate(['/not-found']);
        }

        this.listTitle = "经典案例 - " + tl[groupId];

        this.currentPage = page;
        this.showcaseService.getByPage(groupId, page).subscribe(
          showcaseList => {
            this.pageCount = Math.ceil(showcaseList.length / this.npp) + 1;

            this.pageLinks = [];
            for(let i = 1; i < this.pageCount; i++) {
              this.pageLinks.push('/showcase/' + groupId + '-' + i);
            }

            this.sl = [];
            let firstIndex = (page - 1) * this.npp;
            
            for(let i = 0; i < this.npp; i++) {
              let currentIndex = firstIndex + i;
              if(currentIndex < showcaseList.length) {
                this.sl.push(showcaseList[currentIndex]);
              }
            }
          },
          error => errMsg = error
        );
      }
    });
  }
}
