import { Inject, Injectable, Injector } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { CustomError } from '../../../classes';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';
import { filter, take } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorDialogService {
  constructor(
    @Inject(Injector) private readonly _injector: Injector,
    @Inject(TuiDialogService) private readonly _dialogService: TuiDialogService,
    private readonly _router: Router
  ) {}

  openDialog(error: CustomError): void {
    this._dialogService
      .open(new PolymorpheusComponent(ErrorDialogComponent, this._injector), {
        dismissible: false,
        label: 'Http Error',
        data: error,
      })
      .pipe(take(1), filter(Boolean))
      .subscribe(() => {
        this._router.navigate(['/']);
      });
  }
}
