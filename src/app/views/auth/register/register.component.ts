import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { catchError, partition, pluck, finalize, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  form = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  });
   error$: Observable<HttpErrorResponse>;
  successLogin = false;
  constructor(private authService: AuthService, private router: Router) { }


  onSubmit(): void {
    this.authService.register(this.form.getRawValue())
      .pipe(
        tap(() => this.successLogin = true),
        catchError((e: HttpErrorResponse) => this.error$ = of(e).pipe(pluck('error')))
      )
      .subscribe();

  }
  closeModal(): void {
    this.successLogin = false;
    this.router.navigate(['auth/login']);
  }
}
