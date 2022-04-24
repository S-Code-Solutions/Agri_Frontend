import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
} from "@angular/animations";

export const slider =
  trigger('routeAnimations', [

    transition(':increment', slideTo('right') ),
    transition(':decrement', slideTo('left') ),
  ]);

function slideTo(direction: any) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'relative',
        top: 0,
        width: '100%',
        [direction]: '0%'
      })
    ], optional),
    query(':enter', [
      style({
        position: 'relative',
        top: 0,
        width: '100%',
        [direction]: '-100%'
      }
      )
    ]),
    group([
      query(':leave', [
        animate('300ms ease', style({
          position: 'relative',
          top: 0,
          width: '100%',
          [direction]: '100%'
        }
        ))
      ], optional),
      query(':enter', [
        animate('300ms ease', style({
          position: 'relative',
          top: 0,
          [direction]: '0%',
          width: '100%',
        }
        ))
      ])
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    query(':leave', animateChild()),
    query(':enter', animateChild()),
  ];
}


