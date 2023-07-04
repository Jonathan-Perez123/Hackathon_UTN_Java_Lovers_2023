// scripts.js

// Seleccionamos todos los carruseles de la página.
const carousels = document.querySelectorAll('.carousel');

// Iteramos sobre cada carrusel.
carousels.forEach((carousel) => {
  let currentItem = 0;
  const items = carousel.querySelectorAll('.carousel-item');

  // Función para mostrar un elemento del carrusel.
  function showItem(index) {
    // Primero, ocultamos todos los elementos.
    items.forEach((item, i) => {
      item.style.display = 'none';
      if (i === index) {
        // Mostramos el elemento en el índice dado.
        item.style.display = 'block';
      }
    });
  }

  // Mostramos el primer elemento al cargar la página.
  showItem(currentItem);

  // Cada 4 segundos, avanzamos al siguiente elemento.
  setInterval(() => {
    currentItem = (currentItem + 1) % items.length; // El operador % (módulo) hace que el carrusel sea circular.
    showItem(currentItem);
  }, 4000); // 4000 milisegundos = 4 segundos.
});



