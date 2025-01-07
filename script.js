    // Toggle hamburger menu and search bar visibility
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const searchBar = document.querySelector('.search-bar');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        searchBar.classList.toggle('active'); // Toggle the search bar visibility
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



// Sample On-Demand Data
const onDemandData = [
  { id: 1, title: "Inception", category: "movies", rating: 4.5, img: "inception.jpeg" },
  { id: 2, title: "Breaking Bad", category: "tv-shows", rating: 5.0, img: "breaking-bad.jpeg" },
  { id: 3, title: "Prime Originals", category: "exclusive", rating: 4.0, img: "prime.jpeg" },
  { id: 4, title: "Avatar", category: "movies", rating: 4.8, img: "avatar.jpeg" },
  { id: 5, title: "Friends", category: "tv-shows", rating: 4.6, img: "friends.jpeg" },
  { id: 6, title: "Prime Specials", category: "exclusive", rating: 4.3, img: "specials.jpeg" },
  { id: 7, title: "The Dark Knight", category: "movies", rating: 5.0, img: "dark-knight.jpeg" },
  { id: 8, title: "Stranger Things", category: "tv-shows", rating: 4.9, img: "stranger-things.jpeg" },
  { id: 9, title: "Toy Story", category: "movies", rating: 4.7, img: "toystory.jpeg" },
  { id: 10, title: "The Witcher", category: "tv-shows", rating: 4.2, img: "witcher.jpeg" }
];

// Pagination Variables
let currentPage = 1;
const itemsPerPage = 4;
let filteredData = onDemandData; // Default to all data

// Display Content
function displayContent(data) {
  const grid = document.getElementById("onDemandGrid");
  grid.innerHTML = ""; // Clear existing content

  if (data.length === 0) {
    grid.innerHTML = "<p>No results found.</p>";
    return;
  }

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedData = data.slice(start, end);

  paginatedData.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("on-demand-card");

    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
      <div class="rating">${generateStars(item.rating)} <span>(${item.rating})</span></div>
      <a href="#watch" class="btn btn-primary">Watch Now</a>
    `;
    grid.appendChild(card);
  });
}

// Generate Star Ratings
function generateStars(rating) {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    stars += i < Math.floor(rating) ? "★" : "☆";
  }
  return stars;
}

// Display Pagination Buttons
function displayPagination(data) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = ""; // Clear existing buttons

  const totalPages = Math.ceil(data.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.classList.add(i === currentPage ? "active" : "");
    button.onclick = () => changePage(i, data);
    pagination.appendChild(button);
  }
}

// Change Page
function changePage(page, data) {
  currentPage = page;
  displayContent(data);
  displayPagination(data);
}

// Filters
function filterContent(category) {
  currentPage = 1; // Reset to first page
  if (category === "all") {
    filteredData = onDemandData;
  } else {
    filteredData = onDemandData.filter((item) => item.category === category);
  }
  changePage(1, filteredData);
}

// Initial Render
filterContent("all");




// JavaScript for Modal and Account Actions
document.getElementById('editInfoBtn').onclick = function() {
    document.getElementById('updateInfoModal').style.display = 'block';
};

document.getElementById('closeModalBtn').onclick = function() {
    document.getElementById('updateInfoModal').style.display = 'none';
};

document.getElementById('updateInfoForm').onsubmit = function(event) {
    event.preventDefault();
    alert('Account information updated!');
    document.getElementById('updateInfoModal').style.display = 'none';
};

document.getElementById('viewMoreBtn').onclick = function() {
    alert('Showing more payment history...');
};

document.getElementById('changePlanBtn').onclick = function() {
    alert('Redirecting to change subscription plan...');
};