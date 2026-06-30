/* ═══════════════════════════════════════════════════════════
   TOP FM 90.9 — SCRIPT.JS
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ─── Stream URL ──────────────────────────────────────────── */
/* SUBSTITUA PELA URL DO SEU STREAM DE RÁDIO */
const STREAM_URL = 'https://stream-url-aqui.com/topfm909';

/* ─── Sponsor Data ────────────────────────────────────────── */
const sponsors = [
  {
    id: 1,
    name: 'Farmácia Central',
    category: 'Saúde & Bem-estar',
    icon: '💊',
    iconBg: 'linear-gradient(135deg,#2196F3,#0d47a1)',
    description: 'A farmácia mais completa de Camapuã, com os melhores preços em medicamentos, cosméticos e produtos de higiene pessoal. Atendimento humanizado e equipe qualificada.',
    phone: '(67) 3457-1001',
    whatsapp: '5567934571001',
    email: 'farmaciacentral@email.com',
    address: 'Av. Brasil, 450 — Centro, Camapuã/MS',
    hours: 'Seg–Sex: 7h–22h | Sáb: 7h–20h | Dom: 8h–18h',
    mapQuery: 'Av+Brasil+450+Camapua+MS',
  },
  {
    id: 2,
    name: 'Supermercado Bom Preço',
    category: 'Mercado & Varejo',
    icon: '🛒',
    iconBg: 'linear-gradient(135deg,#43A047,#1b5e20)',
    description: 'O maior supermercado da região, com as melhores ofertas em hortifrúti, carnes, laticínios e mercearia. Qualidade e economia para toda a família.',
    phone: '(67) 3457-2020',
    whatsapp: '5567934572020',
    email: 'bompreco@email.com',
    address: 'Rua 15 de Novembro, 789 — Centro, Camapuã/MS',
    hours: 'Seg–Sáb: 7h–21h | Dom: 8h–18h',
    mapQuery: 'Rua+15+de+Novembro+789+Camapua+MS',
  },
  {
    id: 3,
    name: 'Agropecuária MS Campo',
    category: 'Agronegócio',
    icon: '🌾',
    iconBg: 'linear-gradient(135deg,#FF8F00,#e65100)',
    description: 'Sua parceira no campo! Produtos veterinários, defensivos agrícolas, sementes, fertilizantes e equipamentos para quem vive e trabalha na agropecuária.',
    phone: '(67) 3457-3030',
    whatsapp: '5567934573030',
    email: 'mscampo@email.com',
    address: 'BR-060, Km 38 — Camapuã/MS',
    hours: 'Seg–Sex: 7h–18h | Sáb: 7h–12h',
    mapQuery: 'BR-060+Camapua+MS',
  },
  {
    id: 4,
    name: 'Auto Peças Camanorte',
    category: 'Automotivo',
    icon: '🔧',
    iconBg: 'linear-gradient(135deg,#757575,#212121)',
    description: 'Peças, acessórios e serviços automotivos para todos os tipos de veículos. Equipe técnica especializada, atendimento rápido e preços competitivos.',
    phone: '(67) 3457-4040',
    whatsapp: '5567934574040',
    email: 'camanorte@email.com',
    address: 'Rua Bahia, 210 — Jd. América, Camapuã/MS',
    hours: 'Seg–Sex: 8h–18h | Sáb: 8h–13h',
    mapQuery: 'Rua+Bahia+210+Camapua+MS',
  },
  {
    id: 5,
    name: 'Clínica Saúde Família',
    category: 'Saúde & Clínica',
    icon: '🏥',
    iconBg: 'linear-gradient(135deg,#E53935,#b71c1c)',
    description: 'Clínica multidisciplinar com atendimento médico, odontológico e fisioterápico. Consultas acessíveis, exames laboratoriais e atendimento com hora marcada.',
    phone: '(67) 3457-5050',
    whatsapp: '5567934575050',
    email: 'clinicasf@email.com',
    address: 'Rua São Paulo, 320 — Centro, Camapuã/MS',
    hours: 'Seg–Sex: 7h–19h | Sáb: 8h–12h',
    mapQuery: 'Rua+Sao+Paulo+320+Camapua+MS',
  },
  {
    id: 6,
    name: 'Churrascaria Portal',
    category: 'Gastronomia',
    icon: '🥩',
    iconBg: 'linear-gradient(135deg,#c0392b,#7b241c)',
    description: 'A melhor churrascaria de Camapuã! Rodízio completo com carnes nobres do pantanal e buffet caprichado. Ambiente familiar, ideal para celebrações e eventos corporativos.',
    phone: '(67) 3457-6060',
    whatsapp: '5567934576060',
    email: 'portal@email.com',
    address: 'Av. Afonso Pena, 1200 — Centro, Camapuã/MS',
    hours: 'Ter–Dom: 11h30–15h e 19h–23h',
    mapQuery: 'Av+Afonso+Pena+1200+Camapua+MS',
  },
  {
    id: 7,
    name: 'Materiais Construção TOP',
    category: 'Construção & Reform.',
    icon: '🏗️',
    iconBg: 'linear-gradient(135deg,#F57F17,#e65100)',
    description: 'Tudo para a sua obra e reforma em um só lugar. Cimento, tijolos, ferragens, tintas, hidráulica e elétrica. Entregamos em toda a região com rapidez e segurança.',
    phone: '(67) 3457-7070',
    whatsapp: '5567934577070',
    email: 'construtop@email.com',
    address: 'Rod. MS-306, Km 2 — Camapuã/MS',
    hours: 'Seg–Sex: 7h–18h | Sáb: 7h–13h',
    mapQuery: 'MS-306+Camapua+MS',
  },
  {
    id: 8,
    name: 'Imobiliária Pantanal',
    category: 'Imóveis',
    icon: '🏠',
    iconBg: 'linear-gradient(135deg,#7B1FA2,#4a148c)',
    description: 'Compra, venda e locação de imóveis em Camapuã e região. Avaliação gratuita do seu imóvel. Corretores experientes prontos para realizar o sonho da casa própria.',
    phone: '(67) 3457-8080',
    whatsapp: '5567934578080',
    email: 'pantanalimoveis@email.com',
    address: 'Rua Mato Grosso, 88 — Centro, Camapuã/MS',
    hours: 'Seg–Sex: 8h–18h | Sáb: 9h–13h',
    mapQuery: 'Rua+Mato+Grosso+88+Camapua+MS',
  },
];

/* ═══════════════════════════════════════════════════════════
   DOM REFS
   ═══════════════════════════════════════════════════════════ */
const audio          = document.getElementById('radio-audio');
const playBtn        = document.getElementById('play-btn');
const iconPlay       = document.getElementById('icon-play');
const iconPause      = document.getElementById('icon-pause');
const soundBars      = document.getElementById('sound-bars');
const playerStatus   = document.getElementById('player-status');
const volumeSlider   = document.getElementById('volume-slider');
const miniPlayer     = document.getElementById('mini-player');
const miniPlayBtn    = document.getElementById('mini-play-btn');
const miniIconPlay   = document.getElementById('mini-icon-play');
const miniIconPause  = document.getElementById('mini-icon-pause');
const miniBars       = document.getElementById('mini-bars');
const miniStatus     = document.getElementById('mini-status');
const navLinks       = document.getElementById('nav-links');
const hamburger      = document.getElementById('hamburger');
const header         = document.getElementById('site-header');
const footerPlayBtn  = document.getElementById('footer-play-btn');
const sponsorsGrid   = document.getElementById('sponsors-grid');
const modalOverlay   = document.getElementById('modal-overlay');
const modalClose     = document.getElementById('modal-close');
const contactForm    = document.getElementById('contact-form');
const formSuccess    = document.getElementById('form-success');
const navPlayBtn     = document.getElementById('nav-play-btn');
const yearEl         = document.getElementById('year');

/* ═══════════════════════════════════════════════════════════
   STATE
   ═══════════════════════════════════════════════════════════ */
let isPlaying     = false;
let isLoading     = false;
let heroVisible   = true;

/* ═══════════════════════════════════════════════════════════
   YEAR
   ═══════════════════════════════════════════════════════════ */
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ═══════════════════════════════════════════════════════════
   AUDIO PLAYER
   ═══════════════════════════════════════════════════════════ */
function setPlayingState(playing) {
  isPlaying = playing;

  /* Icons */
  iconPlay.classList.toggle('hidden', playing);
  iconPause.classList.toggle('hidden', !playing);
  miniIconPlay.classList.toggle('hidden', playing);
  miniIconPause.classList.toggle('hidden', !playing);

  /* Bars */
  soundBars.classList.toggle('playing', playing);
  miniBars.classList.toggle('playing', playing);

  /* Play button glow */
  playBtn.classList.toggle('is-playing', playing);

  /* Status text */
  if (playerStatus) playerStatus.textContent = playing ? 'Ao vivo — TOP FM 90.9' : 'Clique para ouvir ao vivo';
  if (miniStatus) miniStatus.textContent = playing ? 'Ao vivo' : 'Pausado';
}

function setLoadingState(loading) {
  isLoading = loading;
  if (playerStatus) playerStatus.textContent = loading ? 'Carregando transmissão…' : (isPlaying ? 'Ao vivo — TOP FM 90.9' : 'Clique para ouvir ao vivo');
}

function togglePlay() {
  if (isLoading) return;

  if (isPlaying) {
    audio.pause();
    audio.src = '';
    setPlayingState(false);
  } else {
    setLoadingState(true);
    audio.src = STREAM_URL;
    audio.volume = volumeSlider ? volumeSlider.value / 100 : 0.8;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => { setLoadingState(false); setPlayingState(true); })
        .catch(() => {
          setLoadingState(false);
          if (playerStatus) playerStatus.textContent = 'Erro ao conectar. Tente novamente.';
        });
    }
  }
}

if (playBtn)       playBtn.addEventListener('click', togglePlay);
if (miniPlayBtn)   miniPlayBtn.addEventListener('click', togglePlay);
if (footerPlayBtn) footerPlayBtn.addEventListener('click', togglePlay);
if (navPlayBtn)    navPlayBtn.addEventListener('click', (e) => { e.preventDefault(); togglePlay(); window.scrollTo({ top: 0, behavior: 'smooth' }); });

audio.addEventListener('ended',  () => setPlayingState(false));
audio.addEventListener('error',  () => { setLoadingState(false); setPlayingState(false); if (playerStatus) playerStatus.textContent = 'Erro na transmissão. Verifique a URL do stream.'; });
audio.addEventListener('waiting', () => setLoadingState(true));
audio.addEventListener('playing', () => { setLoadingState(false); setPlayingState(true); });

/* Volume */
if (volumeSlider) {
  volumeSlider.addEventListener('input', () => { audio.volume = volumeSlider.value / 100; });
  /* Visual fill */
  function updateVolumeFill() {
    const pct = volumeSlider.value;
    volumeSlider.style.background = `linear-gradient(to right, #f5a623 ${pct}%, rgba(255,255,255,0.2) ${pct}%)`;
  }
  volumeSlider.addEventListener('input', updateVolumeFill);
  updateVolumeFill();
}

/* ═══════════════════════════════════════════════════════════
   HEADER SCROLL
   ═══════════════════════════════════════════════════════════ */
function onScroll() {
  const scrollY = window.scrollY;
  header.classList.toggle('scrolled', scrollY > 50);

  /* Mini-player appears when hero scrolls out of view */
  const heroH = document.getElementById('hero')?.offsetHeight || 600;
  const shouldShow = scrollY > heroH * 0.7;
  miniPlayer.classList.toggle('visible', shouldShow);
  miniPlayer.setAttribute('aria-hidden', String(!shouldShow));
  heroVisible = !shouldShow;
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ═══════════════════════════════════════════════════════════
   HAMBURGER / MOBILE MENU
   ═══════════════════════════════════════════════════════════ */
hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* Close menu on outside click */
document.addEventListener('click', (e) => {
  if (!header.contains(e.target) && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});

/* ═══════════════════════════════════════════════════════════
   SPONSORS GRID
   ═══════════════════════════════════════════════════════════ */
function renderSponsors() {
  if (!sponsorsGrid) return;

  sponsorsGrid.innerHTML = sponsors.map(s => `
    <article
      class="sponsor-card"
      role="listitem"
      data-id="${s.id}"
      tabindex="0"
      aria-label="Ver detalhes de ${s.name}"
    >
      <div class="sponsor-card-top">
        <div class="sponsor-icon" style="background:${s.iconBg}" aria-hidden="true">${s.icon}</div>
        <div class="sponsor-title-wrap">
          <span class="sponsor-category">${s.category}</span>
          <h3 class="sponsor-name">${s.name}</h3>
        </div>
      </div>
      <p class="sponsor-desc">${s.description}</p>
      <div class="sponsor-footer">
        <span class="sponsor-contact">${s.phone}</span>
        <div class="sponsor-arrow" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </div>
      </div>
    </article>
  `).join('');

  /* Attach events */
  sponsorsGrid.querySelectorAll('.sponsor-card').forEach(card => {
    card.addEventListener('click',   () => openModal(Number(card.dataset.id)));
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(Number(card.dataset.id)); } });
  });
}

renderSponsors();

/* ─── Intersection Observer: stagger reveal ───────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function observeCards() {
  document.querySelectorAll('.sponsor-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    card.style.transition = 'opacity 500ms ease, transform 500ms ease';
    revealObserver.observe(card);
  });
}
observeCards();

/* ═══════════════════════════════════════════════════════════
   MODAL
   ═══════════════════════════════════════════════════════════ */
let previouslyFocused = null;

function openModal(id) {
  const s = sponsors.find(sp => sp.id === id);
  if (!s) return;

  previouslyFocused = document.activeElement;

  /* Populate */
  document.getElementById('modal-logo-wrap').style.background = s.iconBg;
  document.getElementById('modal-logo-wrap').textContent = s.icon;
  document.getElementById('modal-category').textContent  = s.category;
  document.getElementById('modal-title').textContent     = s.name;
  document.getElementById('modal-desc').textContent      = s.description;
  document.getElementById('modal-phone').textContent     = s.phone;
  document.getElementById('modal-email').textContent     = s.email;
  document.getElementById('modal-address').textContent   = s.address;
  document.getElementById('modal-hours').textContent     = s.hours;

  /* Action buttons */
  document.getElementById('modal-wa-btn').href    = `https://wa.me/${s.whatsapp}?text=Olá, vi o anúncio de vocês na TOP FM 90.9!`;
  document.getElementById('modal-call-btn').href  = `tel:+${s.whatsapp}`;
  document.getElementById('modal-map-btn').href   = `https://maps.google.com/?q=${s.mapQuery}`;

  /* Map */
  const mapDiv = document.getElementById('modal-map');
  mapDiv.innerHTML = `<iframe
    title="Mapa de ${s.name}"
    src="https://maps.google.com/maps?q=${s.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>`;

  /* Open */
  modalOverlay.classList.add('open');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  /* Focus trap: move focus to close button */
  setTimeout(() => modalClose.focus(), 50);
}

function closeModal() {
  modalOverlay.classList.remove('open');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  /* Clear map after transition */
  setTimeout(() => { document.getElementById('modal-map').innerHTML = ''; }, 300);

  if (previouslyFocused) previouslyFocused.focus();
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal(); });

/* Focus trap inside modal */
modalOverlay.addEventListener('keydown', (e) => {
  if (!modalOverlay.classList.contains('open') || e.key !== 'Tab') return;
  const focusable = [...modalOverlay.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])')];
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
  else { if (document.activeElement === last) { e.preventDefault(); first.focus(); } }
});

/* ═══════════════════════════════════════════════════════════
   CONTACT FORM
   ═══════════════════════════════════════════════════════════ */
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-submit');
    btn.disabled = true;
    btn.textContent = 'Enviando…';

    /* Simulate send (replace with actual API call / Netlify forms) */
    setTimeout(() => {
      formSuccess.classList.remove('hidden');
      contactForm.reset();
      btn.disabled = false;
      btn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        Enviar Mensagem`;
      setTimeout(() => formSuccess.classList.add('hidden'), 6000);
    }, 1400);
  });
}

/* ═══════════════════════════════════════════════════════════
   SMOOTH SCROLL ANCHOR LINKS
   ═══════════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  if (anchor.id === 'nav-play-btn') return; /* handled separately */
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ═══════════════════════════════════════════════════════════
   INTERSECTION OBSERVER — SECTION ANIMATIONS
   ═══════════════════════════════════════════════════════════ */
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      sectionObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section-header, .sobre-content, .sobre-visual, .info-card, .contato-form').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 600ms ease, transform 600ms ease';
  sectionObserver.observe(el);
});

/* Add in-view CSS dynamically since we avoid extra CSS rules */
const styleTag = document.createElement('style');
styleTag.textContent = '.in-view { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(styleTag);

/* ═══════════════════════════════════════════════════════════
   ACTIVE NAV LINK HIGHLIGHT
   ═══════════════════════════════════════════════════════════ */
const sections = ['hero','patrocinadores','sobre','contato'];

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.id;
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (!link) return;
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '');
      link.style.color = '#f5a623';
    }
  });
}, { threshold: 0.35 });

sections.forEach(id => {
  const el = document.getElementById(id);
  if (el) navObserver.observe(el);
});

/* ═══════════════════════════════════════════════════════════
   KEYBOARD SHORTCUT — Space to toggle play
   ═══════════════════════════════════════════════════════════ */
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && !['INPUT','TEXTAREA','SELECT','BUTTON'].includes(e.target.tagName)) {
    e.preventDefault();
    togglePlay();
  }
});

/* ═══════════════════════════════════════════════════════════
   CONSOLE BRANDING
   ═══════════════════════════════════════════════════════════ */
console.log(
  '%cTOP FM 90.9 🎵',
  'font-size:24px;font-weight:900;color:#f5a623;font-family:Montserrat,sans-serif;'
);
console.log(
  '%cCamapuã / MS — Desenvolvido por SR Dev Studio',
  'font-size:13px;color:#7ea8ff;'
);
