import {
  animate,
  animation,
  AnimationReferenceMetadata,
  group,
  keyframes,
  query,
  style,
} from '@angular/animations';

export const sharedStyles = {
  position: 'fixed',
  overflow: 'hidden',
  backfaceVisibility: 'hidden',
  transformStyle: 'preserve-3d',
};

export const routerAnimation: AnimationReferenceMetadata = animation(
  [
    query(':enter, :leave', style(sharedStyles), { optional: true }),
    group([
      query(
        ':enter',
        [
          animate(
            '{{enterTiming}}s {{enterDelay}}s ease',
            keyframes([
              style({
                transform: 'translateX(100%)',
                offset: 0,
                'z-index': '9999',
              }),
              style({ transform: 'translateX(0%)', offset: 1 }),
            ])
          ),
        ],
        { optional: true }
      ),

      query(
        ':leave',
        [
          animate(
            '{{leaveTiming}}s {{leaveDelay}}s ease',
            keyframes([
              style({ opacity: '1', offset: 0 }),
              style({ opacity: '0.3', offset: 1 }),
            ])
          ),
        ],
        { optional: true }
      ),
    ]),
  ],
  {
    params: {
      enterTiming: '.6',
      leaveTiming: '0.7',
      enterDelay: '0',
      leaveDelay: '0',
    },
  }
);
