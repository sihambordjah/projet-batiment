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
//Formulaire de contact reste sur la même page apres l'envoie du message
const form = document.getElementById("my-form");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Empêche la redirection

  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  });

  if (response.ok) {
    status.innerHTML = "✅ <span>Message envoyé avec succès !</span>";
    status.className = "success";
    form.reset();
  } else {
    status.innerHTML = "❌ <span>Erreur : réessayez plus tard.</span>";
    status.className = "error";
  }
});
