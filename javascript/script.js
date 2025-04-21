document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const overlay = document.querySelector(".overlay");

  // Verifica se os elementos existem antes de adicionar eventos
  if (navToggle && navMenu && overlay) {
    // Ao clicar no botão hamburguer
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
      overlay.classList.toggle("active");

      // Impede rolagem quando o menu estiver aberto
      document.body.style.overflow = navMenu.classList.contains("active")
        ? "hidden"
        : "";
    });

    // Ao clicar fora do menu (na overlay)
    overlay.addEventListener("click", function () {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    });

    // Fecha o menu se redimensionar para tela grande
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  } else {
    console.warn("Um ou mais elementos do menu não foram encontrados.");
  }
});

// Corrige o scroll ao clicar nos links do menu
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    const headerOffset = 70; // altura do header fixo (ajuste conforme seu header)
    const sectionPosition = targetSection.offsetTop - headerOffset;

    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    });

    // Fecha o menu mobile ao clicar
    document.querySelector(".nav-menu").classList.remove("active");
    document.querySelector(".nav-toggle").classList.remove("active");
    document.querySelector(".overlay").classList.remove("active");
    document.body.style.overflow = "";
  });
});
