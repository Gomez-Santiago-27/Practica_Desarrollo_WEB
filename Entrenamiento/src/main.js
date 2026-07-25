const cajaColoreada = document.querySelector('#caja_coloreada');

const estilosDeLaCajaColoreada = window.getComputedStyle(cajaColoreada);

const cambiarColorSeleccionado = document.querySelector('#cambiar_color_seleccionado');

const cambiarColorAleatorio = document.querySelector('#cambiarColorAleatorio');

const selectorDeColores = document.querySelector('#selector_de_colores');

const listaDeColores = [
  '#000000', // negro
  '#ff0000', // rojo
  '#00ff00', // verde
  '#0000ff', // azul
  '#00ffff', // cyan
  '#ff00ff', // magenta
  '#ffff00', // amarillo
  '#ff8000', // naranja
  '#008000', // verde oscuro
  '#800080'  // violeta
];

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
  let colorActual = estilosDeLaCajaColoreada.backgroundColor;
  let nuevoColor = obtenerColorAleatorio();
  while (nuevoColor === colorActual) {
    nuevoColor = obtenerColorAleatorio();
  }
  cajaColoreada.style.backgroundColor = nuevoColor;
}

/**
 * post: cambia el color de la caja por el color seleccionado.
 */
function cambiarPorColorSeleccionado() {
  let colorSeleccionado = listaDeColores[selectorDeColores.value];
  cajaColoreada.style.backgroundColor = colorSeleccionado;
}

cambiarColorAleatorio.addEventListener('click', cambiarColorDeLaCaja);
cambiarColorSeleccionado.addEventListener('click', cambiarPorColorSeleccionado);