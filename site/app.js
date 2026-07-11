/* ==========================================================================
   Portfolio Gudule Muzongo — app.js
   - Menu mobile (toggle)
   - Navigation active au scroll
   - Validation du formulaire de contact
   ========================================================================== */

(function () {
  'use strict';

  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Ferme le menu après un clic sur un lien (mobile)
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Validation formulaire de contact ---------- */
  var form = document.getElementById('contactForm');
  var feedback = document.getElementById('formFeedback');

  function setError(input, errorEl, message) {
    input.classList.add('invalid');
    errorEl.textContent = message;
  }

  function clearError(input, errorEl) {
    input.classList.remove('invalid');
    errorEl.textContent = '';
  }

  function isValidEmail(value) {
    // Regex simple et suffisante pour une validation front
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var fullName = document.getElementById('fullName');
      var email = document.getElementById('email');
      var message = document.getElementById('message');

      var fullNameError = document.getElementById('fullNameError');
      var emailError = document.getElementById('emailError');
      var messageError = document.getElementById('messageError');

      var isValid = true;

      // Nom complet
      if (fullName.value.trim().length < 2) {
        setError(fullName, fullNameError, 'Merci de renseigner votre nom (2 caractères minimum).');
        isValid = false;
      } else {
        clearError(fullName, fullNameError);
      }

      // Email
      if (!isValidEmail(email.value.trim())) {
        setError(email, emailError, 'Merci de renseigner une adresse email valide.');
        isValid = false;
      } else {
        clearError(email, emailError);
      }

      // Message
      if (message.value.trim().length < 10) {
        setError(message, messageError, 'Votre message doit contenir au moins 10 caractères.');
        isValid = false;
      } else {
        clearError(message, messageError);
      }

      if (!isValid) {
        feedback.textContent = 'Merci de corriger les champs en rouge avant d\'envoyer.';
        feedback.className = 'form-feedback error';
        return;
      }

      // Simulation d'envoi (front uniquement, pas de backend requis pour ce projet)
      feedback.textContent = 'Merci ' + fullName.value.trim() + ' ! Votre message a bien été envoyé. Je reviens vers vous rapidement.';
      feedback.className = 'form-feedback success';
      form.reset();
    });

    // Effacer l'erreur dès que l'utilisateur corrige un champ
    ['fullName', 'email', 'message'].forEach(function (id) {
      var input = document.getElementById(id);
      var errorEl = document.getElementById(id + 'Error');
      input.addEventListener('input', function () {
        if (input.classList.contains('invalid')) {
          clearError(input, errorEl);
        }
      });
    });
  }

})();
