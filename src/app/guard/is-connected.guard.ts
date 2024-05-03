import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';

export const isConnectedGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authService = inject(AuthService);
  console.log(authService.getCustommerConnected());
  
  if (authService.getCustommerConnected()) {
    return true;
  } else {
    router.navigate(['/homepage']);
    return false;
  }
};
