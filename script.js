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

const navToggle = document.querySelector(".bars-menu")
const navList = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
  navList.classList.toggle("nav-menu_visible");
})

if (navList.classlist.contains("nav-menu_visible")) {
  navToggle.setAttribute("aria-label", "Cerrar Menu)");
} else {
  navToggle.setAttribute("aria-label", "Abrir Menu");
}

const menu = document.querySelector(".nav-menu");
const cerrarMenu = document.querySelector(".bars-menu");


function toggleMenu() {
  nav-menu.classList.toggle("menu_opened")
}

const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("Click", function() {
    nav-menu.classList.remove("menu_opened");
  })
})
 




