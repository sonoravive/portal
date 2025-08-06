document.addEventListener('DOMContentLoaded', () => {
 var svg= document.getElementById('miMAPA');
  
  const nombreIDDiv = document.getElementById('nombreID');
  const textoElemento = document.getElementById("municipio_map");
  console.log(svg);
  const elementosAnimar = Array.from(svg.children);

  console.log("elementos a animar"+elementosAnimar);
  let indiceElemento = 1;
  const tiempoAnimacion = 10000; // Duración de la animación en 
  const tiempoPausa = 1; // Pausa entre animaciones

  // Función que se encarga de animar un solo elemento
  function animarElemento(elemento, callback) {
    if (!elemento) return;

    const id = elemento.id;

    // 1. Mostrar el ID
    let municipio = ""+id.replace("_"," ").replace("_"," ");
    
    // Cambiar el contenido del texto
    textoElemento.textContent = municipio;

    // 2. Aplicar la animación de zoom (usando transform)
    elemento.style.fill = "Blue";


    // 3. Volver al estado original después de un tiempo
    setTimeout(() => {
     elemento.style.fill = "#C9C9C9";
      // Ocultar el ID después de la animación
      textoElemento.textContent = municipio;
      if (callback) callback(); // Llamar al siguiente paso
    }, tiempoAnimacion);
  }

  // Función para iniciar la secuencia de animación
  function iniciarSecuencia() {
    // Si ya hemos animado todos los elementos, reiniciamos el índice
    if (indiceElemento >= elementosAnimar.length) {
      indiceElemento = 1;
    }

    const elementoActual = elementosAnimar[indiceElemento];
    animarElemento(elementoActual, () => {
      // Avanzar al siguiente elemento
      indiceElemento++;
      // Esperar un tiempo de pausa antes de animar el siguiente
      setTimeout(iniciarSecuencia, tiempoPausa);
    });
  }

  // Iniciar la secuencia de animación por primera vez
  iniciarSecuencia();
});
