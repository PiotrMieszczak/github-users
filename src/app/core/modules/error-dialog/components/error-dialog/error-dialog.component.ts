import { Component, Inject, OnInit } from '@angular/core';
import { CustomError } from '../../../../classes';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss'],
})
export class ErrorDialogComponent implements OnInit {
  msg: CustomError | undefined = undefined;

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly _context: TuiDialogContext<boolean | CustomError>
  ) {}

  ngOnInit() {
    this.msg = this._context.data;
  }

  dismiss(): void {
    this._context.completeWith(true);
  }
}
