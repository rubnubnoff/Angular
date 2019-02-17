import { Component } from '@angular/core';
import { HeaderService } from '../../../core/services/header.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  menu = this.headerService.menu;
  constructor(
    private headerService: HeaderService,
    private authService: AuthService,
    private router: Router
    ) { }
  onClick() {
    this.authService.logout().subscribe();
  }
}
