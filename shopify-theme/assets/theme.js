/* Circadian Shield — Shopify Theme JS */

/* ─── Image Gallery ──────────────────────────────────────────────── */
function csGallerySet(sectionId, index) {
  const data = window.csGalleryData && window.csGalleryData[sectionId];
  if (!data) return;
  data.current = index;

  const mainImg = document.getElementById('main-image-' + sectionId);
  const caption = document.getElementById('caption-text-' + sectionId);
  if (mainImg) mainImg.src = data.images[index].src;
  if (caption) caption.textContent = data.images[index].caption;

  const container = document.getElementById('thumbnails-' + sectionId);
  if (container) {
    container.querySelectorAll('[data-thumb-index]').forEach(function(btn) {
      const i = parseInt(btn.dataset.thumbIndex, 10);
      btn.classList.toggle('border-slate-900', i === index);
      btn.classList.toggle('scale-105', i === index);
      btn.classList.toggle('border-slate-200', i !== index);
    });
  }
}

function csGalleryPrev(sectionId) {
  const data = window.csGalleryData && window.csGalleryData[sectionId];
  if (!data) return;
  csGallerySet(sectionId, (data.current - 1 + data.images.length) % data.images.length);
}

function csGalleryNext(sectionId) {
  const data = window.csGalleryData && window.csGalleryData[sectionId];
  if (!data) return;
  csGallerySet(sectionId, (data.current + 1) % data.images.length);
}

/* ─── Bundle / Variant Selector ──────────────────────────────────── */
function csSelectVariant(sectionId, card) {
  const cards = card.closest('#bundle-selector-' + sectionId).querySelectorAll('.bundle-card');
  cards.forEach(function(c) {
    c.classList.remove('border-slate-900', 'bg-slate-50');
    c.classList.add('border-slate-200');
    c.querySelector('.variant-radio').classList.remove('border-slate-900');
    c.querySelector('.variant-radio').classList.add('border-slate-300');
    c.querySelector('.variant-dot').classList.add('hidden');
  });

  card.classList.add('border-slate-900', 'bg-slate-50');
  card.classList.remove('border-slate-200');
  card.querySelector('.variant-radio').classList.add('border-slate-900');
  card.querySelector('.variant-radio').classList.remove('border-slate-300');
  card.querySelector('.variant-dot').classList.remove('hidden');

  // Update price display
  const price = card.dataset.price;
  const compare = card.dataset.compare;
  const variantId = card.dataset.variantId;

  const priceEl = document.getElementById('selected-price-' + sectionId);
  const compareEl = document.getElementById('compare-price-' + sectionId);
  const btnPriceEl = document.getElementById('btn-price-' + sectionId);
  const variantInput = document.getElementById('variant-input-' + sectionId);

  if (priceEl) priceEl.textContent = price;
  if (compareEl) compareEl.textContent = compare;
  if (btnPriceEl) btnPriceEl.textContent = price;
  if (variantInput) variantInput.value = variantId;
}

// Alias for static fallback bundles
window.csSelectBundle = window.csSelectVariant;

/* ─── Accordion ─────────────────────────────────────────────────── */
function csToggleAccordion(btn) {
  const isOpen = btn.getAttribute('aria-expanded') === 'true';
  const body = btn.nextElementSibling;
  const plusIcon = btn.querySelector('.plus-icon');
  const minusIcon = btn.querySelector('.minus-icon');
  const chevron = btn.querySelector('.accordion-chevron');

  if (isOpen) {
    btn.setAttribute('aria-expanded', 'false');
    body.style.maxHeight = '0';
    if (plusIcon) plusIcon.classList.remove('hidden');
    if (minusIcon) minusIcon.classList.add('hidden');
    if (chevron) chevron.style.transform = '';
  } else {
    btn.setAttribute('aria-expanded', 'true');
    body.style.maxHeight = body.scrollHeight + 'px';
    if (plusIcon) plusIcon.classList.add('hidden');
    if (minusIcon) minusIcon.classList.remove('hidden');
    if (chevron) chevron.style.transform = 'rotate(180deg)';
  }
}

/* ─── Fade-in on scroll ─────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  if (!('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('cs-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.cs-fade-in').forEach(function(el) {
    observer.observe(el);
  });
});

/* ─── AJAX Add to Cart ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('form[action="/cart/add"]').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var variantId = form.querySelector('input[name="id"]').value;
      var quantity = form.querySelector('input[name="quantity"]').value || 1;

      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Adding…';
      }

      fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
        body: JSON.stringify({ id: variantId, quantity: parseInt(quantity) })
      })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.status) {
          // Error from Shopify
          if (btn) { btn.disabled = false; btn.textContent = 'Add to Cart'; }
          alert(data.description || 'Could not add item to cart.');
          return;
        }
        // Success — update cart count badge
        return fetch('/cart.js').then(function(r) { return r.json(); }).then(function(cart) {
          document.querySelectorAll('.cart-count').forEach(function(el) {
            el.textContent = cart.item_count;
            el.style.display = cart.item_count > 0 ? 'flex' : 'none';
          });
          if (btn) {
            btn.textContent = 'Added!';
            btn.classList.add('bg-emerald-700');
            setTimeout(function() {
              btn.disabled = false;
              btn.classList.remove('bg-emerald-700');
              // Reset button text with price
              var priceSpan = document.getElementById('btn-price-' + form.closest('[data-section-id]').dataset.sectionId);
              btn.innerHTML = 'Add to Cart — <span id="' + (priceSpan ? priceSpan.id : '') + '">' + (priceSpan ? priceSpan.textContent : '') + '</span>';
            }, 1500);
          }
        });
      })
      .catch(function() {
        if (btn) { btn.disabled = false; btn.textContent = 'Add to Cart'; }
      });
    });
  });
});
