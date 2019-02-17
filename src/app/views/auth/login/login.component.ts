import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { catchError, partition, pluck } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  });
  error$: Observable<HttpErrorResponse>;
  constructor(private authService: AuthService, private router: Router) { }
  onSubmit(): void {
    this.authService.login(this.form.getRawValue())
      .pipe(
        catchError((e: HttpErrorResponse) => this.error$ = of(e).pipe(pluck('error')))
      )
      .subscribe();
  }
}
