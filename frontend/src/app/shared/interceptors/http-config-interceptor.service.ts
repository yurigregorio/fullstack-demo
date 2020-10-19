import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class HttpConfigInterceptorService  implements HttpInterceptor {

  constructor(
    private router: Router,
    private toastr : ToastrService
    ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      if (!request.headers.has('Content-Type')) {
          request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
      }

      request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

      return next.handle(request).pipe(
          map((event: HttpEvent<any>) => {
              if (event instanceof HttpResponse) {
                  //console.log('event--->>>', event);
                  // this.errorDialogService.openDialog(event);
              }
              return event;
          }),
          catchError((error: HttpErrorResponse) => {
              console.log('event--->>> ERROR');

              let data: any;
              data = {
                  reason: error && error.error && error.error.reason ? error.error.reason : '',
                  status: error.status
              };

              if (error instanceof HttpErrorResponse && error.status === 401) {
                  this.toastr.error('Senha ou email inválido!!');
                  this.router.navigate(['/auth/login'], {});

                  //return EMPTY;
                  //return throwError(error);
              }
              else if (error instanceof HttpErrorResponse && error.status === 403) {
                  this.toastr.error('Não autorizado!!');
                  this.router.navigate(['/auth/login'], {});
              }
              else {
                  this.toastr.show(data);
              }


              return EMPTY;
              //return throwError(error);
          }));
  }

}
