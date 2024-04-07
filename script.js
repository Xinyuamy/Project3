
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link'); // Select all nav-links

  navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          // Prevent default if necessary, especially if using '#' as href
          event.preventDefault();

          // Remove 'active' class from all nav links
          navLinks.forEach(link => link.classList.remove('active'));

          // Add 'active' class to the clicked nav link
          this.classList.add('active');
      });
  });

  document.querySelectorAll('.featured-card').forEach((card, index) => {
    card.setAttribute('data-original-order', index);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior
      const criteria = this.getAttribute('data-filter');
      filterCards(criteria);
  });
  
  });
});

function filterCards(criteria) {
  const cards = document.querySelectorAll('.featured-card');
  let sortedCards = [];

  if (criteria === 'default') {
    // Reverts to the original order stored in the data-original-order attribute
    sortedCards = Array.from(cards).sort((a, b) => {
      return parseInt(a.getAttribute('data-original-order')) - parseInt(b.getAttribute('data-original-order'));
    });
  } else if (criteria === 'date') {
    sortedCards = Array.from(cards).sort((a, b) => a.getAttribute('data-date').localeCompare(b.getAttribute('data-date')));
  } else if (criteria === 'location') {
    sortedCards = Array.from(cards).sort((a, b) => a.getAttribute('data-location').localeCompare(b.getAttribute('data-location')));
  } else {
    // Assumes the 'default' case is to show the original order
    sortedCards = Array.from(cards); 
  }

  updateDisplay(sortedCards);
}


function updateDisplay(sortedCards) {
  const container = document.querySelector('#featuredlist');
 // container.innerHTML = ''; // Clear existing cards
  sortedCards.forEach(card => {
    console.log(card);
      container.appendChild(card.parentElement.parentElement); // Re-append sorted cards
  });
}



document.addEventListener('DOMContentLoaded', () => {
  // Select all dropdown items
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  
  // Select the dropdown button by ID
  const filterButton = document.getElementById('filterButton');

  // Add click event listener to each dropdown item
  dropdownItems.forEach(item => {
    item.addEventListener('click', function() {
      // Update the dropdown button's text based on the selected item's text
      const selectedItemText = this.textContent;
      filterButton.textContent = selectedItemText; // Change text to selected item's text
      
      // Optionally, append the dropdown icon again if it disappears
      filterButton.innerHTML += ' <span class="navbar-toggler-icon"></span>';
    });
  });
});
