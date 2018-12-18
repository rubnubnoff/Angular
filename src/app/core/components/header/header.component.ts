import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
