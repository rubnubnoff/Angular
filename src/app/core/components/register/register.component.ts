import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
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
  message: string;
  successLogin = false;
  constructor(private authService: AuthService, private router: Router) { }


  onSubmit(): void {
    this.authService.register(this.form.getRawValue())
    .then(() => {
      this.message = '';
      this.successLogin = true;
    })
    .catch(e => this.message = e.error);
  }
  closeModal(): void {
    this.successLogin = false;
    this.router.navigate(['login']);
  }
}
