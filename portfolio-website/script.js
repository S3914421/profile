document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navbar = document.getElementById('navbar');

  navToggle.addEventListener('click', function () {
    navbar.classList.toggle('open');
  });

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const formMessage = document.getElementById('formMessage');
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = '#f87171';
        return;
      }

      formMessage.textContent = 'Thanks for reaching out! I will get back to you shortly.';
      formMessage.style.color = '#34d399';

      contactForm.reset();

      setTimeout(() => {
        formMessage.textContent = '';
      }, 5000);
    });
  }

  const current = window.location.pathname.split('/').pop();
  const links = document.querySelectorAll('.navbar a');
  links.forEach((link) => {
    if (link.getAttribute('href') === current || (current === '' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach((section) => {
    observer.observe(section);
  });
});