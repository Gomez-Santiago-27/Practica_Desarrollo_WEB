const cajaColoreada = document.querySelector('#caja_coloreada');

const estilosDeLaCajaColoreada = window.getComputedStyle(cajaColoreada);

const boton = document.querySelector('#boton_principal');

const listaDeColores = ['#000000', '#0000FF', '#FF00FF', '#008000', '#00FF00', '#FF0000'];

/**
 * 
 * @param {*} max es un entero.
 * @returns devuelve un numero entero de forma aleatorio desde 0 hasta 'max'
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/**
 * 
 * @returns devuelve un color al azar con su sintaxis hexa-decimal.
 */
function obtenerColorAleatorio() {
  return listaDeColores[getRandomInt(listaDeColores.length)];
}

/**
 * post: cambia el color de la 'cajaColoreada' cuando el usuario
 * hace click.
 */
function cambiarColorDeLaCaja() {
  cajaColoreada.style.backgroundColor = obtenerColorAleatorio();

}

boton.addEventListener('click', cambiarColorDeLaCaja);