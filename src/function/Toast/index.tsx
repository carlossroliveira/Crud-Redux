// -------------------------------------------------
// Packages
// -------------------------------------------------
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { InitialType } from './types';

export const Toast = ( timer: number,message: InitialType, title: string) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: timer,
    timerProgressBar: true,
    color: '#171717',
  });

  Toast.fire({
    icon: message,
    title: title,
  });
};
