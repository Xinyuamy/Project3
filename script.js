document.addEventListener('DOMContentLoaded', function() {
    sortCards();
  });
  
  function sortCards() {
    const cardsContainer = document.querySelector('.row.justify-content-between.d-flex.align-items-stretch');
    const cards = document.querySelectorAll('.featured-card');
  
    const sortedCards = Array.from(cards).sort((a, b) => {
      const dateA = a.getAttribute('data-date');
      const dateB = b.getAttribute('data-date');
      const locationA = a.getAttribute('data-location').toLowerCase();
      const locationB = b.getAttribute('data-location').toLowerCase();
  
      if (dateA !== dateB) {
        // Sort by date if they're not the same
        return dateA.localeCompare(dateB);
      } else {
        // If dates are the same, sort by location alphabetically
        return locationA.localeCompare(locationB);
      }
    });
  
    // Clear the container before re-adding sorted cards
    cardsContainer.innerHTML = '';
  
    // Append sorted cards back to the container
    sortedCards.forEach(card => {
      cardsContainer.appendChild(card);
    });
  }
  