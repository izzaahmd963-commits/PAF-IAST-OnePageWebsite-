// Scroll Reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('vis');
      e.target.querySelectorAll('.prog-card,.res-card,.news-card,.p-card,.intl-item,.stat-box,.g-item')
        .forEach((k,i) => k.style.transitionDelay = (i*0.07)+'s');
    }
  });
}, {threshold:0.07});

document.querySelectorAll('.reveal').forEach(r => obs.observe(r));

// Nav Active Link
const secs = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let cur='';
  secs.forEach(s => { 
    if (window.pageYOffset >= s.offsetTop-110) cur=s.id; 
  });
  links.forEach(a => { 
    a.style.color=''; 
    if(a.getAttribute('href')==='#'+cur) a.style.color='#fbbf24'; 
  });
});

// Mobile Menu
function toggleNav() {
  const m = document.getElementById('navMenu');
  if(m.style.display === 'flex') {
    m.style.display = '';
  } else {
    m.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:72px;left:0;right:0;background:rgba(10,74,58,0.98);padding:16px 20px;gap:2px;z-index:999;border-top:1px solid rgba(217,119,6,.2)';
  }
}

// Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  if(!this.checkValidity()) return;
  this.style.display = 'none';
  const s = document.getElementById('formSuccess');
  s.classList.add('show');
  s.scrollIntoView({behavior: 'smooth', block: 'center'});
});

function resetForm() {
  document.getElementById('contactForm').reset();
  document.getElementById('contactForm').style.display = 'flex';
  document.getElementById('formSuccess').classList.remove('show');
}