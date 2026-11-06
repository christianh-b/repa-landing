// repa · interacciones de la landing (JavaScript puro, sin dependencias).
// Lo demás (menú mobile, preguntas frecuentes, animaciones) funciona solo con HTML y CSS.

// Tarifas. Todo entre [CORCHETES] es un marcador: reemplazalo por el valor real.
// Mientras IS_EXAMPLE sea true, la calculadora muestra el aviso "Valores de ejemplo".
const PRICING = {
  IS_EXAMPLE: true,
  baseFare: 900, // [TARIFA MÍNIMA] en ARS
  perKm: 350, // [PRECIO POR KM] en ARS
  sizeFactor: { chico: 1, mediano: 1.25, grande: 1.6 },
  minutesBase: 8,
  minutesPerKm: 3,
};

/* ---------- Pestañas de beneficios (patrón WAI-ARIA) ---------- */
function initTabs(root) {
  const tabs = [...root.querySelectorAll('[role="tab"]')];
  const ON = ['bg-white', 'text-slate-900', 'shadow-card'];
  const OFF = ['text-slate-600', 'hover:text-slate-900'];

  function select(tab, focus) {
    for (const t of tabs) {
      const selected = t === tab;
      t.setAttribute('aria-selected', String(selected));
      t.tabIndex = selected ? 0 : -1;
      t.classList.remove(...(selected ? OFF : ON));
      t.classList.add(...(selected ? ON : OFF));
      document.getElementById(t.getAttribute('aria-controls')).hidden = !selected;
    }
    if (focus) tab.focus();
  }

  for (const [i, tab] of tabs.entries()) {
    tab.addEventListener('click', () => select(tab, false));
    tab.addEventListener('keydown', (e) => {
      const last = tabs.length - 1;
      const next = { ArrowRight: i === last ? 0 : i + 1, ArrowLeft: i === 0 ? last : i - 1, Home: 0, End: last }[e.key];
      if (next === undefined) return;
      e.preventDefault();
      select(tabs[next], true);
    });
  }
}

/* ---------- Calculadora de envío ---------- */
function initQuote(root) {
  const form = root.querySelector('[data-quote-form]');
  const range = form.querySelector('input[type="range"]');
  const kmOut = root.querySelector('[data-quote-km]');
  const priceOut = root.querySelector('[data-quote-price]');
  const minutesOut = root.querySelector('[data-quote-minutes]');
  const ars = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 });
  const kmFmt = new Intl.NumberFormat('es-AR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  if (!PRICING.IS_EXAMPLE) root.querySelectorAll('[data-quote-example]').forEach((el) => el.remove());

  function update() {
    const km = Number(range.value);
    const size = form.querySelector('input[type="radio"]:checked')?.value ?? 'mediano';
    const raw = (PRICING.baseFare + PRICING.perKm * km) * PRICING.sizeFactor[size];
    const price = Math.round(raw / 50) * 50; // Se lee como una tarifa, no como un cálculo.
    const minutes = Math.round(PRICING.minutesBase + PRICING.minutesPerKm * km);
    const pct = ((km - Number(range.min)) / (Number(range.max) - Number(range.min))) * 100;

    kmOut.textContent = `${kmFmt.format(km)} km`;
    range.setAttribute('aria-valuetext', `${kmFmt.format(km)} kilómetros`);
    range.style.background = `linear-gradient(to right, var(--color-brand-600) ${pct}%, var(--color-slate-200) 0)`;
    priceOut.textContent = ars.format(price);
    minutesOut.textContent = `${minutes} min`;
  }

  form.addEventListener('input', update);
  form.addEventListener('submit', (e) => e.preventDefault());
  update();
}

/* ---------- Arranque: cada componente se activa cuando está por entrar en pantalla ---------- */
// El HTML ya muestra el estado inicial, así que no hay saltos; esto solo evita trabajo al cargar la página.
function whenVisible(selector, init) {
  const els = document.querySelectorAll(selector);
  if (!('IntersectionObserver' in window)) return els.forEach(init);
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        io.unobserve(entry.target);
        init(entry.target);
      }
    },
    { rootMargin: '200px' },
  );
  els.forEach((el) => io.observe(el));
}

whenVisible('[data-island="BenefitsTabs"]', initTabs);
whenVisible('[data-island="QuoteCalculator"]', initQuote);
