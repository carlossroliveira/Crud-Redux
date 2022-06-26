// -------------------------------------------------
// Packages
// -------------------------------------------------
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { InitialType } from './types';

export const Toast = (message: InitialType, title: string) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  Toast.fire({
    icon: message,
    title: title,
  });
};
