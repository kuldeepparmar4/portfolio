// 1. NAVBAR SCROLL EFFECT
// Scroll karne par navbar ka background change hoga
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// 2. MOBILE MENU TOGGLE
// Hamburger icon par click karne se links toggle honge
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Koi bhi link click hote hi menu band ho jaye
  const links = navLinks.querySelectorAll("a");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });
}

// 3. SIMPLE TYPING EFFECT
// Simple logic jo real-world developers use karte hain bina deep math functions ke
const typingElement = document.querySelector(".typing");
const wordsArray = [
  "MERN Stack Developer",
  "Full-Stack Engineer",
  "AI/ML Enthusiast",
  "Freelancer",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function handleTyping() {
  if (!typingElement) return;

  const currentWord = wordsArray[wordIndex];

  if (isDeleting) {
    // Character delete ho raha hai
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    // Character type ho raha hai
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  // Speed adjustments
  let typingSpeed = isDeleting ? 50 : 100;

  // Jab pura word type ho jaye
  if (!isDeleting && charIndex === currentWord.length) {
    typingSpeed = 1500; // Pura sentence type hone ke baad thoda hold
    isDeleting = true;
  }
  // Jab word pura saaf ho jaye
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % wordsArray.length; // Next word par jao
    typingSpeed = 500; // Agla word start hone se pehle halka pause
  }

  setTimeout(handleTyping, typingSpeed);
}

// Script run hote hi typing setup start ho jaye
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(handleTyping, 500);
});

// 4. SKILLS BAR ANIMATION ON SCROLL
// Jab user skills section par scroll karega tabhi color bars fill honge
const skillsSection = document.querySelector(".skills");
const skillBars = {
  ".html-css-fill": "90%",
  ".js-fill": "80%",
  ".react-node-fill": "75%",
  ".mern-fill": "70%",
};

if (skillsSection) {
  window.addEventListener("scroll", function () {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    // Agar section viewport ke andar aa gya hai
    if (sectionPos < screenPos) {
      // Har bar ko uski targeted width de do simple dynamic mapping se
      for (let selector in skillBars) {
        const element = document.querySelector(selector);
        if (element) {
          element.style.width = skillBars[selector];
        }
      }
    }
  });
}

// 5. EMAILJS + FORM SUBMISSION
// Form submit handle karne ke liye simple approach
if (typeof emailjs !== "undefined") {
  emailjs.init("LMELVfqEFvATSjdl-");
}

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const submitBtn = contactForm.querySelector('[type="submit"]');
    const btnText = contactForm.querySelector(".btn-text");

    // Loading status active karo
    if (submitBtn) submitBtn.disabled = true;
    if (btnText) btnText.textContent = "Sending…";

    emailjs
      .sendForm("service_kpwebsite1", "template_7h4clx6", this)
      .then(function () {
        alert("Message sent! I'll get back to you soon.");
        contactForm.reset();
      })
      .catch(function (error) {
        console.error("EmailJS issue:", error);
        alert("Something went wrong. Please email me directly.");
      })
      .finally(function () {
        // Loading hatayein aur button restore karein
        if (submitBtn) submitBtn.disabled = false;
        if (btnText) btnText.textContent = "Send Message";
      });
  });
}
