const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
const yearElement = document.querySelector('#year');
const contactForm = document.querySelector('#contact-form');
const formFeedback = document.querySelector('#form-feedback');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    navigation.classList.toggle('open');
  });
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear().toString();
}

if (contactForm && formFeedback) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      formFeedback.textContent = 'Please complete all required fields.';
      return;
    }

    const formData = new FormData(contactForm);
    const name = formData.get('name');
    formFeedback.textContent = `Thanks ${name}, we will contact you shortly.`;
    contactForm.reset();
  });
}
