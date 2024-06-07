// Objeto con los textos en diferentes idiomas
const languageData = {
  es: {
    inicio: "INICIO",
    nosotros: "NOSOTROS",
    servicios: "SERVICIOS",
    portfolio: "PORTFOLIO",
    contacto: "CONTACTO",
    quienes: "¿Quiénes somos?",
    texto_quienes_somos: "Somos una agencia de marketing, especializada en branding. Hacemos que tu marca trascienda, generando experiencias que cautivan a tu audiencia y crean conexiones emocionales duraderas. Con un enfoque centrado en la creatividad y la estrategia, nuestro equipo experto trabaja incansablemente para destacar los valores y la personalidad de tu marca.Desde el diseño de logotipos hasta la creación de una identidad visual cohesiva, estamos aquí para impulsar el reconocimiento de tu marca y diferenciarte en un mercado competitivo.",
    eso_somos: "¡Eso somos en Duers!",
    seccion_servicios: "Servicios",
    smm: "SOCIAL MEDIA MANAGEMENT",
    smm1: "Generación de contenido para redes",
    smm2: "Calendarización de contenidos",
    smm3: "CRM",
    smm4: "Manejo de crisis / reclamos",
    smm5: "Métricas",
    md: "MARKETING DIGITAL",
    md1: "Google Ads",
    md2: "Facebook Ads",
    md3: "SEO / SEM",
    md4: "Email Marketing",
    branding: "BRANDING",
    brading1: "Identidad corporativa",
    brading2: "Diseño de Logotipos",
    brading3: "Naming",
    brading4: "Campañas de posicionamiento",
    brading5: "BrandBook",
    diseño: "DISEÑO",
    diseño1: "Diseño de Producto",
    diseño2: "Diseño Web",
    diseño3: "Diseño de Packaging",
    diseño4: "Piezas de comunicación",
    cje: "CUSTOMER JOURNEY",
    cje1: "Diseño de estrategia ad hoc a la marca",
    cje2: "Analisis de costos",
    cje3: "Puesta en marca",
    cje4: "Acciones de PR",
    cje5: "Mistery Shopper",
    portfolio0: "Portfolio",
    portfolio1: "Social Media Management",
    portfolio2:"Identidad Corporativa / Naming",
    portfolio3: "Identidad Corporativa",
    portfolio4: "Branded content",
    portfolio5: "Customer Journey",
    portfolio6: "Diseño Web",
    portfolio7: "Diseño Packaging",
    portfolio8: "Diseño Packaging",
    quienes_nos_eligen:"Quienes nos eligen",
    contacto0: "Contacto",
    nombre:"Nombre",
    apellido:"Apellido",
    empresa:"Empresa",
    email:"Email",
    telefono:"Teléfono",
    mensaje:"Mensaje",
    enviar:"Enviar",
    
  },
  en: {
    inicio: "HOME",
    nosotros: "ABOUT US",
    servicios: "SERVICES",
    portfolio: "PORTFOLIO",
    contacto: "CONTACT",
    quienes: "Who we are?",
    texto_quienes_somos: "We are a marketing agency specialized in branding. We ensure your brand transcends, generating experiences that captivate your audience and create lasting emotional connections. With a focus on creativity and strategy, our expert team works tirelessly to highlight the values and personality of your brand. From logo design to creating a cohesive visual identity, we are here to boost your brand recognition and set you apart in a competitive market.",
    eso_somos: "That's who we are at Duers!",
    seccion_servicios: "Services",
    smm: "SOCIAL MEDIA MANAGEMENT",
    smm1: "Content generation for social media",
    smm2: "Content scheduling",
    smm3: "CRM",
    smm4: "Crisis management / complaints",
    smm5: "Metrics",
    md: "DIGITAL MARKETING",
    md1: "Google Ads",
    md2: "Facebook Ads",
    md3: "SEO / SEM",
    md4: "Email Marketing",
    branding: "BRANDING",
    branding1: "Corporate identity",
    branding2: "Logo Design",
    branding3: "Naming",
    branding4: "Positioning campaigns",
    branding5: "BrandBook",
    diseño: "DESING",
    diseño1: "Product Design",
    diseño2: "Web Design",
    diseño3: "Packaging Design",
    diseño4: "Communication pieces",
    cje: "CUSTOMER JOURNEY",
    cje1: "Design of brand-specific strategy",
    cje2: "Cost analysis",
    cje3: "Implementation",
    cje4: "PR actions",
    cje5: "Mystery Shopper",
    portfolio0: "Portfolio",
    portfolio1: "Social Media Management",
    portfolio2: "Corporate Identity + Naming",
    portfolio3: "Corporate Identity",
    portfolio4: "Branded Content",
    portfolio5: "Customer Journey",
    portfolio6: "Web Design",
    portfolio7: "Packaging Design",
    portfolio8: "Packaging Design",
    quienes_nos_eligen:"Who Chooses Us",
    contacto0: "Contact",
    nombre: "Name",
    apellido: "Last Name",
    empresa: "Company",
    email: "Email",
    telefono: "Phone",
    mensaje: "Message",
    enviar: "Send",
  }
  // Agrega más idiomas y sus textos aquí si es necesario
};

// Función para cambiar el idioma y actualizar el contenido de la página
function changeLanguage(language) {
  // Obtener todos los elementos que tienen contenido multilingüe
  const elements = document.querySelectorAll("[data-i18n]");
  
  // Iterar sobre cada elemento
  elements.forEach(element => {
    // Obtener la clave del texto en el idioma seleccionado
    const key = element.dataset.i18n;
    // Obtener el texto correspondiente al idioma seleccionado
    const text = languageData[language][key];
    // Actualizar el contenido del elemento con el texto traducido
    if (text) {
      element.textContent = text;
    }
  });
  
  // Actualizar el texto del selector de idioma
  const languageSelector = document.getElementById("navbarDropdownLanguage");
  if (languageSelector) {
    if (language === "es") {
      languageSelector.textContent = "🌐 ES";
    } else if (language === "en") {
      languageSelector.textContent = "🌐 EN";
    }
  }
}

// Event listener para el clic en los enlaces del selector de idioma
document.querySelectorAll(".dropdown-item").forEach(item => {
  item.addEventListener("click", event => {
    event.preventDefault();
    const lang = event.target.dataset.lang;
    changeLanguage(lang);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  AOS.init();
});

window.addEventListener('load', () => {
  const loader = document.querySelector('.loader-wrapper');
  const content = document.querySelector('.content');
  
  loader.style.display = 'none';
  content.style.display = 'block';
});


$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});


// Obtener todos los elementos de video
const videos = document.querySelectorAll('.media');

// Iterar sobre cada video
videos.forEach(video => {
  // Reproducir el video al pasar el mouse sobre él
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  
  // Pausar el video al sacar el mouse de encima
  video.addEventListener('mouseleave', () => {
    video.pause();
  });
});

// Selecciona el contenedor de la galería de logos
const logoGallery = document.querySelector('.logo-gallery');

// Función para clonar y reiniciar el carrusel
function cloneAndRestartCarousel() {
  // Obtiene la lista de todos los contenedores de imágenes
  const logoContainers = document.querySelectorAll('.logo-container');
  
  // Elimina todas las imágenes clonadas
  const clonedImages = document.querySelectorAll('.cloned');
  clonedImages.forEach(image => logoGallery.removeChild(image));
  
  // Clona las primeras imágenes y las añade al final del carrusel
  logoContainers.forEach(container => {
    const clonedImage = container.cloneNode(true);
    clonedImage.classList.add('cloned');
    logoGallery.appendChild(clonedImage);
  });
  
  // Reinicia la posición del carrusel
  logoGallery.style.transition = 'none';
  logoGallery.style.transform = 'translateX(0)';
  setTimeout(() => {
    logoGallery.style.transition = 'transform 10s linear infinite';
    animateCarousel();
  }, 0);
}

// Función para animar el carrusel
function animateCarousel() {
  const logoWidth = logoGallery.offsetWidth;
  const totalWidth = logoWidth * document.querySelectorAll('.logo-container').length;
  
  let position = 0;
  const animation = () => {
    position -= 1;
    if (position <= -totalWidth) {
      position = 0;
    }
    logoGallery.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animation);
  };
  animation();
}

// Clona y reinicia el carrusel al cargar la página
window.addEventListener('load', cloneAndRestartCarousel);


// Llamada inicial para establecer el idioma en español al cargar la página
changeLanguage("es");

document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Envía el formulario usando Fetch API
        fetch("https://formspree.io/f/xjvnlvad", {
            method: "POST",
            body: new FormData(this),
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => {
            // Verifica si la respuesta fue exitosa
            if (response.ok) {
                // Muestra una alerta de éxito
                alert("Mensaje enviado con éxito.");
                // Limpia los campos del formulario
                document.getElementById("contactForm").reset();
            } else {
                // Muestra un mensaje de error si la respuesta no fue exitosa
                console.error("Error al enviar el formulario");
            }
        })
        .catch(error => {
            // Muestra un mensaje de error si ocurre un error en la solicitud
            console.error("Error en la solicitud:", error);
        });
    });