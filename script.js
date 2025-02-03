const carousel = document.querySelector('.carousel');
const reviewCards = carousel.querySelectorAll('.review-card');
let currentIndex = 0;

function Carousel() {
  const cardWidth = reviewCards[0].offsetWidth; // Get the width of a single card
  const gap = 20; // Space between cards
  const offset = -(currentIndex * (cardWidth + gap));
  carousel.style.transform = `translateX(${offset}px)`;

  // Increment the current index for the next slide
  currentIndex = (currentIndex + 1) % reviewCards.length; // Loop back to the start when at the end
}

// Auto-slide every 3 seconds
setInterval(Carousel, 3000);
