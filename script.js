window.addEventListener("scroll", function () {
  const header = document.getElementById("header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const words = ["Designer", "Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      setTimeout(() => (isDeleting = true), 1000);
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 80 : 120);
}

if (typingElement) {
  typeEffect();
}

// Initialize EmailJS
(function () {
  emailjs.init(CONFIG.EMAILJS_PUBLIC_KEY);
})();

// Form Submit
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm(CONFIG.EMAILJS_SERVICE_ID, CONFIG.EMAILJS_TEMPLATE_ID, this)
      .then(
        function () {
          alert("Message Sent Successfully ");
          document.getElementById("contact-form").reset();
        },
        function (error) {
          alert("Failed to send ");
          console.log(error);
        },
      );
  });

//  Toggle Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll("#nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
