// Typing Effect
// const text = "Frontend Developer";
// let index = 0;
// const speed = 100;

// function typeEffect() {
//   if (index < text.length) {
//     document.getElementById("typing-text").textContent += text.charAt(index);
//     index++;
//     setTimeout(typeEffect, speed);
//   }
// }

// window.onload = typeEffect;





const text = "Frontend Developer";
let index = 0;
let isDeleting = false;
const speed = 100;
const typingElement = document.getElementById("typing-text");

function typeLoop() {
  if (isDeleting) {
    typingElement.textContent = text.substring(0, index--);
  } else {
    typingElement.textContent = text.substring(0, index++);
  }

  if (!isDeleting && index === text.length + 1) {
    isDeleting = true;
    setTimeout(typeLoop, 1000); // Pause after typing
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    setTimeout(typeLoop, 500); // Pause after deleting
  } else {
    setTimeout(typeLoop, speed);
  }
}

window.onload = () => {
  typeLoop();

  // Dark Mode Toggle
  const toggle = document.getElementById("theme-toggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });
};
