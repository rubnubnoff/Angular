import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import { map, filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AnonimousGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }
  canActivate$ = this.authService.authStatus$.pipe(map(authStatus => authStatus === false));
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.canActivate$
      .pipe(
        filter(canActivate => canActivate === false),
        tap(() => this.router.navigate(['/tasks']))
      )
      .subscribe();
      return this.canActivate$;

  }
}
