import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
  message: string;
  constructor(private authService: AuthService, private router: Router) { }
  onSubmit(): void {
    this.authService.login(this.form.getRawValue())
    .then(() => {
      this.message = '';
      this.router.navigate(['/header']);
    })
    .catch(e => this.message = e.error);
  }
}
