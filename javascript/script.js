document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const overlay = document.querySelector('.overlay');
  
  navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });
  
  overlay.addEventListener('click', function() {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
  });
  
  // Fechar o menu ao redimensionar a janela para tamanho grande
  window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
          navMenu.classList.remove('active');
          navToggle.classList.remove('active');
          overlay.classList.remove('active');
          document.body.style.overflow = '';
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
  });
});