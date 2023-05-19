import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

import { TokenService } from '@services/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(): boolean {
    const isValidToken = this.tokenService.isValidRefreshToken();
    console.log('isValidToken from AuthGuard ', isValidToken);
    if (!isValidToken) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}

// Angular v15 update
// export const authGuard: CanActivateFn = () => {
//   const token = inject(TokenService).getToken();
//   const router = inject(Router);

//   if (!token) {
//   router.navigate([’/login’]);
//   return false;
//   }
//   return true;
//   };
