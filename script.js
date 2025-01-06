// Select the toggle button and nav-links
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle the 'active' class on the nav-links when menu icon is clicked
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
