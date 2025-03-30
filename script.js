// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const toggle = button.querySelector(".faq-toggle");

    if (answer.style.display === "block") {
      answer.style.display = "none";
      toggle.textContent = "+";
    } else {
      answer.style.display = "block";
      toggle.textContent = "-";
    }
  });
});

const popup = document.getElementById("celebration-popup");
const closePopup = document.getElementById("close-popup");

const lastVisit = localStorage.getItem("lastVisit");
const now = new Date().getTime();
const oneDay = 24 * 60 * 60 * 1000;

if (!lastVisit || now - lastVisit > oneDay) {
  popup.classList.add("active");
  localStorage.setItem("lastVisit", now);
}

closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
});

document.querySelectorAll(".faq-header").forEach((header) => {
  header.addEventListener("click", () => {
    const card = header.parentElement;
    card.classList.toggle("active");
    const toggle = header.querySelector(".faq-toggle");
    toggle.textContent = toggle.textContent === "+" ? "−" : "+";
  });
});