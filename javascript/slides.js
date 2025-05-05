document.addEventListener("DOMContentLoaded", function () {
  const palestrantes = document.querySelectorAll(".palestrante");
  const prevBtn = document.querySelector(".slide-btn.prev");
  const nextBtn = document.querySelector(".slide-btn.next");
  const indicators = document.querySelectorAll(".indicator");
  
  let currentSlide = 0;
  const totalSlides = palestrantes.length;
  
  // Mostrar slide específico
  function showSlide(index) {
    // Verificar limites
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    
    // Atualizar slide atual
    currentSlide = index;
    
    // Atualizar classes
    palestrantes.forEach((slide, i) => {
      slide.classList.remove("active");
      indicators[i].classList.remove("active");
    });
    
    palestrantes[currentSlide].classList.add("active");
    indicators[currentSlide].classList.add("active");
  }
  
  // Event listeners para os botões
  prevBtn.addEventListener("click", function() {
    showSlide(currentSlide - 1);
  });
  
  nextBtn.addEventListener("click", function() {
    showSlide(currentSlide + 1);
  });
  
  // Event listeners para indicadores
  indicators.forEach((indicator) => {
    indicator.addEventListener("click", function() {
      const slideIndex = parseInt(this.getAttribute("data-index"));
      showSlide(slideIndex);
    });
  });
  
  // Inicializar carrossel
  showSlide(0);
  
  // Rotação automática opcional (descomente se quiser)
  /*
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
  */
});