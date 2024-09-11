import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import swal from 'sweetalert';



export const loginGuard: CanActivateFn = () => {
  let router = inject(Router);
  const isLogged = localStorage.getItem('tokenAdmin');
  if (!isLogged) {
    // if the user is not logged in, navigate to the home page
    router.navigate(['/home']);
    //  show a sweet alert with the response from the backend
    swal({
      title: `Error`,
      text: `No estas logueado. Debes Loguearte para tener acceso a la plataforma.`,
      icon: `error`,
      timer: 3000,
      buttons: [false],
    });
    return false;
  }

  return true;
};
