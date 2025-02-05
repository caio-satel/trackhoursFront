import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users/users.service';

@Injectable({
  providedIn: 'root'
})
export class GuardRouteService {

  constructor(private UsersService: UsersService, private router: Router) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.UsersService.userLogged()) {
      this.router.navigate(['/home']);
      return false;
    }

    this.UsersService.userLogged();
    return true;
  }
}
