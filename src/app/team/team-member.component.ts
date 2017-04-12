import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params }           from '@angular/router';

import { Profile }          from '../../db/model/profile';
import { ProfileService }   from '../../db/profile.service';

@Component({
    selector: 'sjmy-team-member',
    templateUrl: './team-member.component.html',
    styleUrls: ['./team-member.component.css'],
    providers: [ProfileService]
})
export class TeamMemberComponent implements OnInit {
    profile: Profile;

    constructor(
        private profileService: ProfileService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.profile = this.profileService.get(params['id']);
        });
    }
}