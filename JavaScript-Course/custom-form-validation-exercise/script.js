const form = document.getElementById("signup-form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const postal = document.getElementById("postal");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const successMessage = document.getElementById("success-message");

// Utility function to show errors
function showError(input, message) {
  const errorSpan = input.parentElement.querySelector(".error");
  errorSpan.textContent = message;
  input.classList.add("error");
}

// Utility function to clear errors
function clearError(input) {
  const errorSpan = input.parentElement.querySelector(".error");
  errorSpan.textContent = "";
  input.classList.remove("error");
}

// Validators
function validateEmail() {
  const value = email.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value) return showError(email, "Email is required");
  if (!regex.test(value)) return showError(email, "Enter a valid email");
  clearError(email);
}

function validateCountry() {
  if (!country.value.trim()) return showError(country, "Country is required");
  clearError(country);
}

function validatePostal() {
  const value = postal.value.trim();
  const regex = /^[A-Za-z0-9]{4,10}$/; // simple check
  if (!value) return showError(postal, "Postal code is required");
  if (!regex.test(value)) return showError(postal, "Invalid postal code");
  clearError(postal);
}

function validatePassword() {
  const value = password.value.trim();
  if (!value) return showError(password, "Password is required");
  if (value.length < 6) return showError(password, "At least 6 characters");
  clearError(password);
}

function validateConfirm() {
  if (!confirm.value.trim()) return showError(confirm, "Confirm your password");
  if (confirm.value !== password.value) return showError(confirm, "Passwords do not match");
  clearError(confirm);
}

// Live validation (on blur + input)
email.addEventListener("input", validateEmail);
country.addEventListener("input", validateCountry);
postal.addEventListener("input", validatePostal);
password.addEventListener("input", () => {
  validatePassword();
  validateConfirm(); // recheck match if password changes
});
confirm.addEventListener("input", validateConfirm);

// On submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateEmail();
  validateCountry();
  validatePostal();
  validatePassword();
  validateConfirm();

  const errors = form.querySelectorAll("input.error");
  if (errors.length > 0) {
    alert("Please fix the errors before submitting.");
    return;
  }

  form.style.display = "none";
  successMessage.style.display = "block";
});
