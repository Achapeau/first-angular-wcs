import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  console.log(authService.getRole());

  if (authService.getRole() === 'ADMIN') {
    return true;
  } else {
    router.navigate(['/homepage']);
    return false;
  }
};
