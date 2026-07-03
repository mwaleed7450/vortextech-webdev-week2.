// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

  // ---------- DARK / LIGHT TOGGLE ----------
  const toggleBtn = document.getElementById('theme-toggle');
  toggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    // Update button icon
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });

  // ---------- FORM VALIDATION ----------
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  const successMsg = document.getElementById('success-message');

  // Helper: display error for a field
  function setError(errorElement, message) {
    errorElement.textContent = message;
  }

  // Helper: clear all errors
  function clearErrors() {
    setError(nameError, '');
    setError(emailError, '');
    setError(messageError, '');
    successMsg.style.display = 'none';
  }

  // Email validation regex (simple but robust)
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Form submit handler
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload

    clearErrors();

    // Trim values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    let isValid = true;

    // Validate Name
    if (name === '') {
      setError(nameError, 'Name is required.');
      isValid = false;
    }

    // Validate Email
    if (email === '') {
      setError(emailError, 'Email is required.');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setError(emailError, 'Please enter a valid email address.');
      isValid = false;
    }

    // Validate Message
    if (message === '') {
      setError(messageError, 'Message cannot be empty.');
      isValid = false;
    }

    // If valid, show success & reset form
    if (isValid) {
      successMsg.style.display = 'block';
      form.reset(); // clears all fields
      // Optionally, hide success after a few seconds? Not required.
    } else {
      successMsg.style.display = 'none';
    }
  });

});