import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { ErrorDialogComponent } from './error-dialog.component';
import { CustomError } from '../../../../classes';
import { TuiButtonModule, TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { RouterTestingModule } from '@angular/router/testing';

describe('ErrorDialogComponent', () => {
  let spectator: Spectator<ErrorDialogComponent>;
  let context: TuiDialogContext<boolean | CustomError>;

  const createComponent = createComponentFactory({
    component: ErrorDialogComponent,
    imports: [TuiButtonModule, RouterTestingModule],
    providers: [
      {
        provide: POLYMORPHEUS_CONTEXT,
        useValue: {
          completeWith: jest.fn(),
        },
      },
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
    // @ts-ignore
    context = spectator.inject(POLYMORPHEUS_CONTEXT) as TuiDialogContext<
      boolean | CustomError
    >;
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });

  it('should close dialog on dismiss ', () => {
    const spy = jest.spyOn(context, 'completeWith');
    spectator.component.dismiss();

    expect(spy).toHaveBeenCalledWith(true);
  });
});
