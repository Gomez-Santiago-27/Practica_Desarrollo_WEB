let tituloDeLaTarea = document.querySelector('#titulo-de-la-tarea');
let comentariosDeLaTarea = document.querySelector('#comentarios');
const botonAgregar = document.querySelector('#boton-para-crear');

let seccionDeTarjetas = document.querySelector('#seccion-de-tarjetas');

let listaDeTareas = []; // lista inicializada.

/**
 * post: Actualiza el DOM para que se puedan visualizar las nuevas tareas.
 */
function actualizarSeccionDeTareas() {
  seccionDeTarjetas.innerHTML = '';

  listaDeTareas.forEach(tarea => {
    let tarjeta = document.createElement('article');
    tarjeta.classList.add('tarjeta');
    tarjeta.innerHTML = `
      <h3>${tarea.titulo}</h3>
      <p>${tarea.comentarios}</p>
    `;
    seccionDeTarjetas.appendChild(tarjeta);
  });
}

/**
 * post: Agrega la tarea a la lista y actualiza el DOM.
 */
function agregarTarea() {
  let titulo = tituloDeLaTarea.value.trim();
  let comentarios = comentariosDeLaTarea.value.trim();
  if (titulo !== "") {
    let nuevaTarea = {
      "titulo": titulo,
      "comentarios": comentarios
    }
    listaDeTareas.push(nuevaTarea);

    tituloDeLaTarea.value = "";
    comentariosDeLaTarea.value = "";

    actualizarSeccionDeTareas();
  }
}

botonAgregar.addEventListener('click', agregarTarea);