import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAdmin = sessionStorage.getItem('');

  if (isAdmin === 'KrLXM8n6CvRWM6ln0BqaO1IvBnh2') {
    return true;
  } else {
    router.navigateByUrl('/home');
    return false;
  }
};
