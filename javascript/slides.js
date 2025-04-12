let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector("#palestra .lista");
let items = container.querySelectorAll(".item");

// Se você tiver a div ".indicator", ative isso:
let indicator = document.querySelector(".indicator");
let dots = indicator ? indicator.querySelectorAll("ul li") : null;

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function updateSlide(index) {
  let itemOld = container.querySelector(".item.active");
  itemOld.classList.remove("active");
  items[index].classList.add("active");

  if (dots) {
    let dotOld = indicator.querySelector("ul li.active");
    dotOld?.classList.remove("active");
    dots[index].classList.add("active");
    indicator.querySelector(".number").innerHTML = '0' + (index + 1);
  }
}

nextButton.onclick = () => {
  active = active + 1 > lastPosition ? 0 : active + 1;
  updateSlide(active);
};

prevButton.onclick = () => {
  active = active - 1 < firstPosition ? lastPosition : active - 1;
  updateSlide(active);
};
