import { trigger, transition, style, animate } from '@angular/animations';

export const slideAnimation = trigger('slideAnimation', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('0.5s', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate('0.5s', style({ transform: 'translateX(-100%)' })),
  ]),
]);