document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.ham-menu');
  const navMenu = document.querySelector('.menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Animate hamburger
    navMenu.classList.toggle('active');   // Show or hide menu
  });
});