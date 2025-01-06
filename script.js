// Select the toggle button and nav-links
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle the 'active' class on the nav-links when menu icon is clicked
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// Filter channels by category
function filterByCategory(category) {
  const cards = document.querySelectorAll('.channel-card');
  const buttons = document.querySelectorAll('.category-buttons button');

  buttons.forEach((btn) => btn.classList.remove('active')); // Remove 'active' class from all buttons
  event.target.classList.add('active'); // Add 'active' class to clicked button

  cards.forEach((card) => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Search channels
function filterChannels() {
  const input = document.getElementById('channelSearch').value.toLowerCase();
  const cards = document.querySelectorAll('.channel-card');

  cards.forEach((card) => {
    if (card.textContent.toLowerCase().includes(input)) {
      card.style.display = 'block';
    } else {
      card.style.display ='none';
    }
  });
}
