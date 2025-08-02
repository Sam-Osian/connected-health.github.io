document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('team-modal');
  const modalBody = document.getElementById('team-modal-body');
  const closeBtn = document.querySelector('.team-modal-close');

  document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', () => {
      const bio = card.querySelector('.team-bio').innerHTML;
      const name = card.querySelector('h3').textContent;
      const title = card.querySelector('.team-title').textContent;
      const photo = card.querySelector('.team-photo').src;
      const alt = card.querySelector('.team-photo').alt;
      const interests = card.querySelector('.team-interests').innerHTML;
      modalBody.innerHTML = `
        <img src="${photo}" alt="${alt}" class="team-modal-photo" />
        <h3>${name}</h3>
        <p class="team-title">${title}</p>
        ${interests}${bio}`.trim();
      modal.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
