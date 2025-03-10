// Dark Mode Toggle with ARIA Attribute
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  themeToggleBtn.setAttribute(
    "aria-label",
    document.body.classList.contains("dark-mode")
      ? "Switch to Light Mode"
      : "Switch to Dark Mode"
  );

  themeToggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
});

// Close the banner when the "X" is clicked
const closeBanner = document.getElementById("close-banner");
const noticeBanner = document.getElementById("notice-banner");

closeBanner.addEventListener("click", () => {
  noticeBanner.style.display = "none";
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Scroll-triggered Animations
const scrollAnimations = document.querySelectorAll(".scroll-animation");

const triggerAnimations = () => {
  const windowHeight = window.innerHeight;
  scrollAnimations.forEach(animation => {
    const elementTop = animation.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      animation.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", triggerAnimations);
document.addEventListener("DOMContentLoaded", triggerAnimations);

// Click Limiter: Warning Instead of Redirection
let clickCount = 0;
const clickLimit = 40;

document.body.addEventListener("click", () => {
  clickCount++;
  console.log(`Click count: ${clickCount}`);

  if (clickCount > clickLimit) {
    alert("Warning: Why you clicking so much! contact support if you need help");
  }
});

// Basic Hack Detection
setInterval(() => {
  if (window.console && (window.console.firebug || window.outerHeight - window.innerHeight > 200)) {
    alert("Possible hacking attempt detected! Console modifications may be happening.");
  }
}, 2000);

window.addEventListener("keydown", (event) => {
  if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
    alert("DevTools detected! Please do not inspect the website.");
    event.preventDefault();
  }
});

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  alert("Right-click is disabled for security reasons.");
});

// Typewriter Effect
const typewriterText = document.getElementById("hero-text");
const text = "Welcome to My Portfolio";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typewriterText.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Glitch Text Effect
document.querySelectorAll(".glitch").forEach(element => {
  setInterval(() => {
    element.classList.toggle("glitch-effect");
  }, 500);
});

// Floating Particles Effect
const particles = document.createElement("div");
particles.id = "particles-js";
document.body.appendChild(particles);
particlesJS.load("particles-js", "particles.json", function() {
  console.log("Particles.js loaded");
});

// Snowfall Effect
const snowCanvas = document.createElement("canvas");
snowCanvas.id = "snowfall-canvas";
document.body.appendChild(snowCanvas);
snowCanvas.width = window.innerWidth;
snowCanvas.height = window.innerHeight;
const ctx = snowCanvas.getContext("2d");
const snowflakes = Array.from({ length: 100 }, () => ({
  x: Math.random() * snowCanvas.width,
  y: Math.random() * snowCanvas.height,
  radius: Math.random() * 3 + 1,
  speed: Math.random() * 1 + 0.5,
}));

function drawSnowfall() {
  ctx.clearRect(0, 0, snowCanvas.width, snowCanvas.height);
  ctx.fillStyle = "white";
  snowflakes.forEach(flake => {
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    ctx.fill();
    flake.y += flake.speed;
    if (flake.y > snowCanvas.height) flake.y = 0;
  });
  requestAnimationFrame(drawSnowfall);
}
drawSnowfall();

// Cursor Ripple Effect
document.addEventListener("mousemove", (e) => {
  let ripple = document.createElement("div");
  ripple.classList.add("ripple");
  document.body.appendChild(ripple);
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  setTimeout(() => ripple.remove(), 1000);
});

// Modal functionality for Login/Signup/Guest
const authModal = document.getElementById("auth-modal");
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const guestBtn = document.getElementById("guest-btn");

const mainContent = document.querySelector("body");

const showModal = () => {
  authModal.style.display = "flex"; // Show the modal
  mainContent.style.display = "none"; // Hide main content
};

const hideModal = () => {
  authModal.style.display = "none"; // Hide the modal
  mainContent.style.display = "block"; // Show main content
};

loginBtn.addEventListener("click", showModal);
signupBtn.addEventListener("click", showModal);
guestBtn.addEventListener("click", showModal);

const loginOption = document.getElementById("login");
const signupOption = document.getElementById("signup");
const guestOption = document.getElementById("guest");

loginOption.addEventListener("click", () => {
  alert("Login functionality will be added here.");
  hideModal(); // Close the modal
});

signupOption.addEventListener("click", () => {
  alert("Sign Up functionality will be added here.");
  hideModal(); // Close the modal
});

guestOption.addEventListener("click", () => {
  alert("Continuing as Guest.");
  hideModal(); // Close the modal
});

// Cookie Consent Handling
const cookiesAccepted = localStorage.getItem('cookiesAccepted');

// If cookies are not accepted, show the cookie consent prompt
if (!cookiesAccepted) {
  window.addEventListener('load', () => {
    // Show whiteout effect
    document.getElementById('whiteout').style.display = 'block';
    
    // Delay the appearance of the cookie consent popup
    setTimeout(() => {
      document.getElementById('cookieConsent').classList.add('visible');
      document.getElementById('whiteout').style.opacity = 0; // Fade out the whiteout
    }, 1000); // Wait 1 second before showing the cookie consent
  });
}

// If the user accepts cookies
document.getElementById('acceptCookies').addEventListener('click', () => {
  // Store the user's choice in localStorage
  localStorage.setItem('cookiesAccepted', 'true');
  
  // Hide the cookie consent and whiteout
  document.getElementById('cookieConsent').classList.remove('visible');
  document.getElementById('whiteout').style.display = 'none';
  
  // Redirect to the home page (or any other URL)
  window.location.href = '/'; // '/' for home page, or specify another URL
});

// If the user declines cookies
document.getElementById('declineCookies').addEventListener('click', () => {
  // Store the user's choice in localStorage (not accepting cookies)
  localStorage.setItem('cookiesAccepted', 'false');
  
  // Hide the cookie consent and whiteout
  document.getElementById('cookieConsent').classList.remove('visible');
  document.getElementById('whiteout').style.display = 'none';
  
  // Redirect to the home page (or any other URL)
  window.location.href = '/'; // '/' for home page, or specify another URL
});
