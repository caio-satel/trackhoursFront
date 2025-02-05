import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-toolbar-navigation',
  templateUrl: './toolbar-navigation.component.html',
  styleUrl: './toolbar-navigation.component.css'
})
export class ToolbarNavigationComponent {
  sidebarVisible = false;

  constructor(private CookieService: CookieService, private Router: Router) { }

  // Logout - Deletar cookie e redirecionar para a página de login
  handleLogout(): void {
    this.CookieService.delete('USER_INFO');
    this.Router.navigate(['/home']);
  }
}
