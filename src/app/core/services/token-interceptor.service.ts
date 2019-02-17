import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Injectable, Inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {
  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.localStorage.getItem('x-auth-token');
    if (token) {
      const cloned = req.clone({
        setHeaders: {
          'x-auth-token': token
        }
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
