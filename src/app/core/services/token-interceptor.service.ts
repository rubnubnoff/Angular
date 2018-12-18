import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('x-auth-token');
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
