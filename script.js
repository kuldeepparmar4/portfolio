// HEADER SCROLL
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// TYPING EFFECT
const words = ["Designer", "Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {
  if (!typingElement) return;

  const currentWord = words[wordIndex];

  typingElement.textContent = isDeleting
    ? currentWord.substring(0, charIndex--)
    : currentWord.substring(0, charIndex++);

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect();

// EMAILJS
const form = document.getElementById("contact-form");

if (typeof emailjs !== "undefined") {
  emailjs.init("LMELVfqEFvATSjdl-");
}

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = form.querySelector("button");
    btn.textContent = "Sending...";

    emailjs
      .sendForm("service_kpwebsite1", "template_7h4clx6", this)
      .then(() => {
        alert("Message Sent Successfully!");
        form.reset();
        btn.textContent = "Send Message";
      })
      .catch((error) => {
        alert("Failed to send");
        console.error(error);
        btn.textContent = "Send Message";
      });
  });
}
