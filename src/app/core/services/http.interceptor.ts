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

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<SafeAny>,
    next: HttpHandler
  ): Observable<HttpEvent<SafeAny>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const msg =
          error && error.error.reason
            ? error.error.reason
            : 'Server response error, try again later.';
        const customError = new CustomError(msg, error.status);

        // TODO open error dialog
        return throwError(() => error);
      })
    );
  }
}
