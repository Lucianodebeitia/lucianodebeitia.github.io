// const textoCompleto = "Coming soon projects I'm working on...";
// const textoElemento = document.querySelector('.texto-infinito');

// function escribirTexto(texto, elemento, index = 0) {
//   if (index < texto.length) {
//     elemento.textContent += texto.charAt(index);
//     index++;
//     setTimeout(() => escribirTexto(texto, elemento, index), 70); 
//   } else {
//     setTimeout(() => {
//       elemento.textContent = ''; 
//       escribirTexto(texto, elemento); 
//     }, 1000);
//   }
// }

// escribirTexto(textoCompleto, textoElemento);

const navToggle = document.querySelector(".bars-menu");
const navList = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navList.classList.toggle("nav-menu_visible");
});


const menuLinks = document.querySelectorAll(".links-navbar");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        
        navList.classList.remove("nav-menu_visible");
    });
});


// ? 

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.icons');
    const containerWidth = document.querySelector('.cont-skills').offsetWidth;
    const imageWidth = images[0].offsetWidth; // Supone que todas las imágenes tienen el mismo ancho
    const margin = 10;
    

    

    images.forEach((img, index) => {
        img.style.left = `${index * imageWidth}px`; // Posiciona las imágenes en una fila continua
    });

    function animateImages() {
        images.forEach((img) => {
            const currentLeft = parseInt(img.style.left, 10);
            const newLeft = currentLeft - 1; // Ajusta la velocidad del movimiento
            img.style.left = `${newLeft}px`;

            // Si la imagen ha salido completamente del contenedor, muévela al final
            if (newLeft < -imageWidth) {
                img.style.left = `${containerWidth + margin}px`;
            }
        });

        requestAnimationFrame(animateImages);
    }

    animateImages();
});








// document.addEventListener("DOMContentLoaded", () => {
//     const images = document.querySelectorAll('.icons');
//     const containerWidth = document.querySelector('.cont-skills').offsetWidth;
//     const imageWidth = images[0].offsetWidth; // Supone que todas las imágenes tienen el mismo ancho

//     images.forEach((img, index) => {
//         const delay = index * 2; // Ajusta el delay según sea necesario
//         img.style.left = `${-imageWidth}px`; // Inicializa las imágenes fuera del contenedor
//         img.style.animationDelay = `${delay}s`;
//         // img.style.animationDuration = `${containerWidth / 20 + 20}s`; // Ajusta la duración de la animación
//     });

//     images.forEach(img => {
//         img.addEventListener('animationiteration', () => {
//             img.style.left = `${-imageWidth}px`;
//         });
//     });
// });







 




