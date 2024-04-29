const textoCompleto = "Coming soon projects I'm working on...";
const textoElemento = document.querySelector('.texto-infinito');

function escribirTexto(texto, elemento, index = 0) {
  if (index < texto.length) {
    elemento.textContent += texto.charAt(index);
    index++;
    setTimeout(() => escribirTexto(texto, elemento, index), 70); 
  } else {
    setTimeout(() => {
      elemento.textContent = ''; 
      escribirTexto(texto, elemento); 
    }, 1000);
  }
}

escribirTexto(textoCompleto, textoElemento);


