const botonActivarModo = document.querySelector('#btn_activar_modo');
const cuerpo = document.querySelector('body');

/**
 * post: alterna los colores de la página en base a su estado actual.
 * Si la página se encuentra en modo claro, este cambiará a modo oscuro y vicebersa.
 */
function alternarModo() {
  const esModoClaro = cuerpo.classList.contains('modo-claro');

  if (esModoClaro) {
    cuerpo.classList.remove('modo-claro');
    cuerpo.classList.add('modo-oscuro');
  } else {
    cuerpo.classList.remove('modo-oscuro');
    cuerpo.classList.add('modo-claro');
  }
}

botonActivarModo.addEventListener('click', alternarModo);