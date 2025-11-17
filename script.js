// script.js

const App = {
  init: function () {
    this.cacheDOM();
    this.bindEvents();
  },

  cacheDOM: function () {
    this.menuBtn = document.querySelector('.menu-btn');
    this.navLinks = document.querySelector('.nav-links');
    this.form = document.getElementById('contact-form');
    this.nameInput = this.form.name;
    this.emailInput = this.form.email;
    this.messageInput = this.form.message;
  },

  bindEvents: function () {
    this.menuBtn.addEventListener('click', () => this.toggleMenu());
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  },

  toggleMenu: function () {
    this.navLinks.classList.toggle('active');
  },

  handleSubmit: function (e) {
    e.preventDefault();
    const name = this.nameInput.value.trim();
    const email = this.emailInput.value.trim();
    const message = this.messageInput.value.trim();

    if (!name || !email || !message) {
      alert('Merci de remplir tous les champs.');
      return;
    }

    if (!this.validateEmail(email)) {
      alert('Veuillez entrer une adresse email valide.');
      return;
    }

    // Pour le moment, on simule l'envoi
    alert('Merci pour votre message, ' + name + ' !');
    this.form.reset();
  },

  validateEmail: function (email) {
    // Regex simple pour la validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
};

// Initialiser l'app quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
