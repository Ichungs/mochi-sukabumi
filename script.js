// ===== Menu hamburger (berfungsi di index.html & lokasi.html) =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const icon = hamburger.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.querySelector('i').classList.replace('fa-times', 'fa-bars');
  });
});

// ===== Bayangan navbar saat scroll =====
window.addEventListener('scroll', () => {
  document.querySelector('.navbar').style.boxShadow =
    window.scrollY > 40 ? '0 4px 20px rgba(0,0,0,.1)' : '0 2px 12px rgba(0,0,0,.06)';
});