import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ShowcaseListComponent } from './showcase/showcase-list.component';
import { ShowcaseItemComponent } from './showcase/showcase-item.component';
import { BrandComponent } from './brand/brand.component';
import { TeamComponent } from './team/team.component';
import { TeamMemberComponent } from './team/team-member.component';
import { FaqComponent } from './faq/faq.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'showcase', component: ShowcaseComponent },
    { path: 'showcase/:id', component: ShowcaseListComponent },
    { path: 'showcase/item/:id', component: ShowcaseItemComponent },
    { path: 'brand', component: BrandComponent },
    { path: 'brand/:id', component: BrandComponent },
    { path: 'team', component: TeamComponent },
    { path: 'team/member/:id', component: TeamMemberComponent },
    { path: 'faq', component: FaqComponent },
    { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

export const routedComponents = [
  HomeComponent,
  ShowcaseComponent,
  ShowcaseListComponent,
  ShowcaseItemComponent,
  BrandComponent,
  TeamComponent,
  TeamMemberComponent,
  FaqComponent,
  NotFoundComponent
]