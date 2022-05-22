import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { CustomError, SafeAny } from '../classes';
import { ErrorDialogService } from '../modules';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor(private readonly _dialogService: ErrorDialogService) {}

  intercept(
    request: HttpRequest<SafeAny>,
    next: HttpHandler
  ): Observable<HttpEvent<SafeAny>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('error', error);
        const msg =
          error && error.error.message
            ? error.error.message
            : 'Server response error, try again later.';
        const customError = new CustomError(msg, error.status);

        this._dialogService.openDialog(customError);
        return throwError(() => error);
      })
    );
  }
}
