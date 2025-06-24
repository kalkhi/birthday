let currentCard = 0;
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

function showCard(index) {
  // Stop all audios and remove 'active'
  cards.forEach(card => {
    const audio = card.querySelector('audio');
    audio.pause();
    audio.currentTime = 0;
    card.classList.remove('active');
  });

  // Show and play new card's audio
  const newCard = cards[index];
  newCard.classList.add('active');

  const newAudio = newCard.querySelector('audio');
  newAudio.play().catch(err => {
    console.log("Audio autoplay blocked or error:", err);
  });

  currentCard = index;
}

function showNext() {
  const nextIndex = (currentCard + 1) % totalCards;
  showCard(nextIndex);
}

function showPrev() {
  const prevIndex = (currentCard - 1 + totalCards) % totalCards;
  showCard(prevIndex);
}

// Play first card's song when page loads
window.onload = () => {
  showCard(0);
};
