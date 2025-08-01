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


// EmailJS Contact Form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill out all required fields!");
        return;
    }

    emailjs.send("service_z4ea0ys", "template_udax0pn", {
        from_name: name,
        reply_to: email,
        message: message,
        phone: document.getElementById("phone").value || "N/A"
    })
    .then(() => {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById("contactForm").reset();
    }, (error) => {
        console.error("Failed to send email:", error);
        alert("Oops! Something went wrong. Please try again.");
    });
});

// Smooth scroll for "Contact Me" button
document.getElementById("contactBtn").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("contactForm").scrollIntoView({behavior: "smooth"});
});
