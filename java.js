
function toggleRecipe(id) {
    const section = document.getElementById(id);
    section.style.display =
        section.style.display === "block" ? "none" : "block";
}

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

document.addEventListener("DOMContentLoaded", function () {

  function toggleRecipe(id) {
    const section = document.getElementById(id);
    section.style.display =
      section.style.display === "block" ? "none" : "block";
  }

  let currentIndex = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  document.querySelector(".next").addEventListener("click", nextSlide);
  document.querySelector(".prev").addEventListener("click", prevSlide);

  setInterval(nextSlide, 3000);

  showSlide(currentIndex);
});
function searchRecipe(event) {
  event.preventDefault();

  const input = document.getElementById("searchInput").value.toLowerCase().trim();

  let url = "";

  if (input.includes("sancocho")) {
    url = "services.html#sancocho";
  } 
  else if (input.includes("bandera")) {
    url = "services.html#bandera";
  } 
  else if (input.includes("pica") || input.includes("pollo")) {
    url = "services.html#pica-pollo";
  } 
  else if (input.includes("tres") || input.includes("mangu")) {
    url = "services.html#tres-golpes";
  } 
  else if (input.includes("tostones")) {
    url = "services.html#tostones";
  }

  if (url !== "") {
    window.location.href = url;
  } else {
    alert("Recipe not found. Try: Sancocho, Tres Golpes, Pica Pollo...");
  }
}


