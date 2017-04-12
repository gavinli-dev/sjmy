import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ShowcaseListComponent } from './showcase-list.component';

import { Showcase } from '../../db/model/showcase';
import { ShowcaseService } from '../../db/showcase.service';
import { slideInDownAnimation } from './../animations';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css'],
  providers: [ShowcaseService],
  animations: [slideInDownAnimation],
  host: {'[@routeAnimation]':''}
})
export class ShowcaseComponent implements OnInit {
  showcaseClassname: string = "showcase-page";

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // ShowcaseService.
    this.route.params.subscribe((params: Params) => {
      if(params['id'] == undefined) {

      } else {
        this.showcaseClassname = "showcase-list-page";
      }
    });
  }
}
