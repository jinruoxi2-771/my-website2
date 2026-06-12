const openBtns = document.querySelectorAll('.open-modal-btn');
const closeBtns = document.querySelectorAll('.close-modal-btn');
const overlays = document.querySelectorAll('.modal-overlay');
const navbar = document.querySelector('#navbar');
const topBtn = document.querySelector('.back-to-top-btn');
const cursor = document.querySelector('.custom-cursor');
const projectCards = document.querySelectorAll('.project-grid li');

openBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const targetModal = document.querySelector(targetId);
    if (targetModal) {
      targetModal.classList.add('show');
    }
  });
});

closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const parentModal = btn.closest('.modal-overlay');
    if (parentModal) {
      parentModal.classList.remove('show');
    }
  });
});

overlays.forEach((overlay) => {
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      overlay.classList.remove('show');
    }
  });
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    navbar.classList.add('scrolled');
    if (topBtn) topBtn.classList.add('visible');
  } else {
    navbar.classList.remove('scrolled');
    if (topBtn) topBtn.classList.remove('visible');
  }
});

if (cursor) {
  window.addEventListener('mousemove', (event) => {
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
  });

  projectCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(3)';
      cursor.style.opacity = '0.35';
    });

    card.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.opacity = '0.75';
    });
  });
}
