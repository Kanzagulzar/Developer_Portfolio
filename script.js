// small niceties: set year and simple fade-in on load
document.getElementById('year').textContent = new Date().getFullYear();

// fade-in animation for cards
window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.project-card, .service-card');
  cards.forEach((c,i) => {
    c.style.opacity = 0;
    c.style.transform = 'translateY(10px)';
    setTimeout(() => {
      c.style.transition = 'opacity .45s ease, transform .45s ease';
      c.style.opacity = 1;
      c.style.transform = 'translateY(0)';
    }, 100 + i*80);
  });
});
