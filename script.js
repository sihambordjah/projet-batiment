const slides = document.querySelectorAll(".slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let index = 0;

function showSlide(i) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// Changement automatique toutes les 5 secondes
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);
// Changement automatique toutes les 5 secondes
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);

//Formulaire de contact
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
