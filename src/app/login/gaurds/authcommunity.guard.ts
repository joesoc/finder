import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthCommunityService } from 'src/app/login/services/authcommunityservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthCommunityGaurd implements CanActivate {
  constructor(private authService: AuthCommunityService, private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkLoggedIn();
  }

  checkLoggedIn(): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/Login'])
    return false;
  }
}
