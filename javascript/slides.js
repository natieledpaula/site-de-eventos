// Script para melhorar a exibição dos palestrantes em dispositivos móveis
document.addEventListener('DOMContentLoaded', function() {
  const palestrantes = document.querySelectorAll('.palestrante');
  const prevBtn = document.querySelector('.slide-btn.prev');
  const nextBtn = document.querySelector('.slide-btn.next');
  
  // Inicializar o slide atual
  let currentSlide = 0;
  
  // Função para verificar tamanho da tela e ajustar comportamento
  function checkScreenSize() {
    if (window.innerWidth <= 768) {
      // Em dispositivos móveis: mostra apenas um slide por vez
      showSlide(currentSlide);
    } else {
      // Em desktop: restaura visualização normal
      palestrantes.forEach(palestrante => {
        palestrante.style.display = "block";
        palestrante.style.opacity = "1";
      });
    }
  }
  
  // Função para mostrar um slide específico
  function showSlide(index) {
    palestrantes.forEach((palestrante, i) => {
      if (i === index) {
        palestrante.style.display = "block";
        setTimeout(() => {
          palestrante.style.opacity = "1";
          palestrante.classList.add('active');
        }, 50);
      } else {
        palestrante.style.opacity = "0";
        palestrante.classList.remove('active');
        setTimeout(() => {
          palestrante.style.display = "none";
        }, 500);
      }
    });
  }
  
  // Event listeners para os botões
  prevBtn.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
      currentSlide = (currentSlide - 1 + palestrantes.length) % palestrantes.length;
      showSlide(currentSlide);
    } else {
      // Comportamento original para desktop
      const container = document.querySelector('.palestrantes-container');
      container.scrollLeft -= 300;
    }
  });
  
  nextBtn.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
      currentSlide = (currentSlide + 1) % palestrantes.length;
      showSlide(currentSlide);
    } else {
      // Comportamento original para desktop
      const container = document.querySelector('.palestrantes-container');
      container.scrollLeft += 300;
    }
  });
  
  // Verificar tamanho da tela no carregamento e redimensionamento
  window.addEventListener('resize', checkScreenSize);
  checkScreenSize();
  
  // Tornar o primeiro slide ativo em dispositivos móveis
  if (window.innerWidth <= 768) {
    palestrantes[0].classList.add('active');
  }
});