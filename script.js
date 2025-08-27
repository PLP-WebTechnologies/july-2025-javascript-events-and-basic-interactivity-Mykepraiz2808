// =============================
// PART 1: EVENT HANDLING
// =============================

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// =============================
// PART 2: INTERACTIVE ELEMENTS
// =============================

// Counter Game
let score = 0;
const counterBtn = document.getElementById("counterBtn");
const scoreDisplay = document.getElementById("score");

counterBtn.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
});

// Collapsible FAQ
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// =============================
// PART 3: FORM VALIDATION
// =============================
const form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page reload

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  let isValid = true;

  // Name Validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Email Validation (basic regex)
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  }

  // Password Validation (min 6 chars, at least 1 number)
  const password = document.getElementById("password").value;
  const passwordRegex = /^(?=.*\d).{6,}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters and contain a number.";
    isValid = false;
  }

  // Success Message
  if (isValid) {
    document.getElementById("formSuccess").textContent = "Form submitted successfully! 🎉";
    form.reset();
  }
});
