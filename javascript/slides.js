document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".palestrantes-container");
  const slides = document.querySelectorAll(".palestrante");
  const prevBtn = document.querySelector(".slide-btn.prev");
  const nextBtn = document.querySelector(".slide-btn.next");

  let index = 0;

  function updateSlider() {
    container.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
  });
});
