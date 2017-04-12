import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

// Component transition animations
export const slideInDownAnimation: AnimationEntryMetadata = trigger('routeAnimation', [
  state('*',
    style({
      opacity: 1
    })
  ),
  // transition(':enter', [
  //   style({
  //     opacity: 0,
  //     transform: 'scale(0.8)'
  //   }),
  //   animate('500ms ease-in')
  // ])
  // ,
  transition(':leave', [
    animate('500ms ease-out', style({
      opacity: 0
    }))
  ])
]);