import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Showcase } from '../../db/model/showcase';
import { ShowcaseService } from '../../db/showcase.service';

@Component({
  selector: 'app-showcase-item',
  templateUrl: './showcase-item.component.html',
  styleUrls: ['./showcase-item.component.css'],
  providers: [ShowcaseService]
})
export class ShowcaseItemComponent implements OnInit {
  showcase: Showcase;
  page: number = 1;
  mainImage: string = "/assets/loading.svg";
  thumbs: Array<string> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private showcaseService: ShowcaseService
  ) { }

  onBackToList() {
    this.router.navigate(['/showcase/' + this.showcase.groupId + '-' + this.page]);
  }

  onThumbClick(thumbPath) {
    this.mainImage = thumbPath;
  }

  ngOnInit() {
    this.showcase = new Showcase();

    this.route.params.subscribe((params: Params) => {
      this.page = params['page'];
      this.showcaseService.get(params['id']).subscribe(
        showcase => {
          this.mainImage = "/assets/graphics/" + showcase.itemId + "/1.jpg";
          this.showcase = showcase;

          this.thumbs = [];
          let imageCount = showcase.imageCount;
          if(imageCount > 4) {
            imageCount = 4
          }
          for(let i = 1; i <= imageCount; i++) {
            let thumbPath = '/assets/graphics/' + showcase.itemId + '/' + i + '.jpg';
            this.thumbs.push(thumbPath);
          }
        }
      );
    });
  }
}