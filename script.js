
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});


document.querySelectorAll('.navbar-nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});



window.addEventListener('scroll', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 150) el.classList.add('active');
  });
});


const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 400 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const heroCarousel = document.querySelector('#heroCarousel');
if (heroCarousel) {
  const carousel = new bootstrap.Carousel(heroCarousel, {
    interval: 5000,
    ride: 'carousel',
    pause: false
  });
}

document.querySelector("#subscribeForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#emailInput").value;
  if (email.trim() === "") {
    alert("Please enter your email address!");
  } else {
    alert(`Thanks for subscribing, ${email}!`);
    document.querySelector("#subscribeForm").reset();
  }
});


document.querySelectorAll('.movie-img').forEach(img => {
  img.addEventListener('click', () => {
    const modalHTML = `
      <div class="modal fade" id="movieModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content bg-dark text-white">
            <div class="modal-header border-0">
              <h5 class="modal-title">${img.dataset.title}</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body text-center">
              <img src="${img.src}" class="img-fluid rounded mb-3">
              <p>${img.dataset.desc}</p>
              <button class="btn btn-danger"><i class="bi bi-play-fill"></i> Watch Now</button>
            </div>
          </div>
        </div>
      </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    const modal = new bootstrap.Modal(document.getElementById('movieModal'));
    modal.show();
    document.getElementById('movieModal').addEventListener('hidden.bs.modal', () => {
      document.getElementById('movieModal').remove();
    });
  });
});


document.getElementById('subscribeForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('emailInput').value;
  if (!email.includes('@')) {
    alert('Please enter a valid email address!');
  } else {
    alert(`🎉 Welcome to Netflix Clone!\nConfirmation sent to: ${email}`);
    e.target.reset();
  }
});
