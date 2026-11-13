/* ============================================================
   DATOS EDITABLES DE LOPEFRUT
   - Precios: deja precio en null para mostrar "Precio: por confirmar".
     Si ya tienes un valor, usa un número (COP) o un texto, p. ej. 12000 o "$12.000".
   - Fotos: coloca el archivo en /img y escribe la ruta en "foto",
     p. ej. "img/ensalada-clasica.jpg". Si foto es null, se usa la ilustración.
   - Sedes: completa direccion y horarios cuando los tengas.
   ============================================================ */

const MENSAJE_WHATSAPP = "Hola Lopefrut, quiero hacer un pedido";

const SEDES = [
  {
    id: "laceja",
    nombre: "La Ceja",
    ciudad: "La Ceja, Antioquia",
    direccion: null,       // completar, p. ej. "Calle 20 #10-15"
    horarios: null,        // completar, p. ej. "Lun–Dom, 10:00 a. m. – 8:00 p. m."
    telefonoVisible: "321 735 8481",
    wa: "573217358481",
  },
  {
    id: "rionegro",
    nombre: "Rionegro",
    ciudad: "Rionegro, Antioquia",
    direccion: null,
    horarios: null,
    telefonoVisible: "312 828 5145",
    wa: "573128285145",
  },
];

const MENU = [
  {
    id: "ensaladas",
    nombre: "Ensaladas de frutas",
    items: [
      {
        id: "ensalada-clasica",
        nombre: "Ensalada clásica",
        descripcion: "Mix de frutas frescas de temporada, servido bien frío y listo para disfrutar.",
        precio: null,
        foto: null,
        ilustracion: "ensalada",
      },
      {
        id: "ensalada-yogurt",
        nombre: "Ensalada con yogurt y granola",
        descripcion: "Frutas al punto, yogurt cremoso y granola crocante. Un clásico a tu gusto.",
        precio: null,
        foto: null,
        ilustracion: "yogurt",
      },
      {
        id: "ensalada-especial",
        nombre: "Ensalada especial",
        descripcion: "La de siempre, elevada: más fruta, más toppings y ese toque que la hace única.",
        precio: null,
        foto: null,
        ilustracion: "ensalada",
      },
    ],
  },
  {
    id: "salpicones",
    nombre: "Salpicones",
    items: [
      {
        id: "salpicon-frutas",
        nombre: "Salpicón de frutas",
        descripcion: "Frutas picadas en su jugo, fresco, jugoso y perfecto para el clima antioqueño.",
        precio: null,
        foto: null,
        ilustracion: "salpicon",
      },
      {
        id: "salpicon-especial",
        nombre: "Salpicón especial",
        descripcion: "El salpicón de siempre, con el extra que quieras: crema, helado o más fruta.",
        precio: null,
        foto: null,
        ilustracion: "salpicon",
      },
    ],
  },
  {
    id: "jugos",
    nombre: "Jugos",
    items: [
      {
        id: "jugo-mango",
        nombre: "Jugo de mango",
        descripcion: "Mango maduro, batido al momento. Dulce, espeso y tropical.",
        precio: null,
        foto: null,
        ilustracion: "mango",
      },
      {
        id: "jugo-lulo",
        nombre: "Jugo de lulo",
        descripcion: "Ácido y aromático, el sabor de casa que siempre cae bien.",
        precio: null,
        foto: null,
        ilustracion: "lulo",
      },
      {
        id: "jugo-mora",
        nombre: "Jugo de mora",
        descripcion: "Mora intensa, refrescante y de un morado que enamora.",
        precio: null,
        foto: null,
        ilustracion: "mora",
      },
      {
        id: "jugo-maracuya",
        nombre: "Jugo de maracuyá",
        descripcion: "Cítrico y perfumado, para quitar la sed de una vez.",
        precio: null,
        foto: null,
        ilustracion: "maracuya",
      },
    ],
  },
  {
    id: "batidos",
    nombre: "Batidos",
    items: [
      {
        id: "batido-fresa",
        nombre: "Batido de fresa",
        descripcion: "Fresas y leche, cremoso y de un rosa que da alegría.",
        precio: null,
        foto: null,
        ilustracion: "fresa",
      },
      {
        id: "batido-banano",
        nombre: "Batido de banano",
        descripcion: "Suave, espeso y reconfortante. Ideal a media tarde.",
        precio: null,
        foto: null,
        ilustracion: "banano",
      },
      {
        id: "batido-mixto",
        nombre: "Batido mixto",
        descripcion: "Combinamos las frutas que quieras en un solo vaso, a tu gusto.",
        precio: null,
        foto: null,
        ilustracion: "mixto",
      },
    ],
  },
  {
    id: "malteadas",
    nombre: "Malteadas",
    items: [
      {
        id: "malteada-arequipe",
        nombre: "Malteada de arequipe",
        descripcion: "Cremosa, dulce y con ese arequipe que se siente en cada sorbo.",
        precio: null,
        foto: null,
        ilustracion: "arequipe",
      },
      {
        id: "malteada-chocolate",
        nombre: "Malteada de chocolate",
        descripcion: "Helado y chocolate, batidos hasta quedar espesa y fría.",
        precio: null,
        foto: null,
        ilustracion: "chocolate",
      },
      {
        id: "malteada-frutos",
        nombre: "Malteada de frutos rojos",
        descripcion: "Una malteada frutal, suave y con el golpe fresco de los berries.",
        precio: null,
        foto: null,
        ilustracion: "fresa",
      },
    ],
  },
  {
    id: "copas",
    nombre: "Copas",
    items: [
      {
        id: "copa-gelato",
        nombre: "Copa de gelato",
        descripcion: "Gelato bien servido en copa, para comer despacio y con cuchara.",
        precio: null,
        foto: null,
        ilustracion: "copa",
      },
      {
        id: "copa-sundae",
        nombre: "Copa sundae",
        descripcion: "Helado, salsas y toppings. Un clásico que se ve tan bien como sabe.",
        precio: null,
        foto: null,
        ilustracion: "sundae",
      },
      {
        id: "copa-frutas",
        nombre: "Copa de frutas con helado",
        descripcion: "Fruta fresca coronada con una bola de helado. Lo mejor de los dos mundos.",
        precio: null,
        foto: null,
        ilustracion: "copafruta",
      },
    ],
  },
];

/* ========== Ilustraciones SVG (se reemplazan solas si hay foto) ========== */

const ILLUSTRATIONS = {
  ensalada: `
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <rect width="80" height="80" rx="18" fill="#EAF78A"/>
      <ellipse cx="40" cy="58" rx="24" ry="10" fill="#F4D7B0"/>
      <path d="M18 52c4 12 14 16 22 16s18-4 22-16H18z" fill="#FFF6E8"/>
      <circle cx="30" cy="40" r="12" fill="#FF6B3D"/>
      <circle cx="28" cy="37" r="2" fill="#FFF6E8"/>
      <circle cx="50" cy="38" r="11" fill="#FF9F1C"/>
      <circle cx="50" cy="38" r="3" fill="#FFF3C4"/>
      <ellipse cx="40" cy="46" rx="10" ry="9" fill="#8BC34A"/>
      <path d="M40 38v16M33 46h14" stroke="#7CB342" stroke-width="1.5"/>
    </svg>`,
  yogurt: `
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <rect width="80" height="80" rx="18" fill="#F7E8D0"/>
      <path d="M24 34h32l-3 26H27L24 34z" fill="#FFF"/>
      <path d="M27 36h26l-2.4 22H29.4L27 36z" fill="#FFF9F0"/>
      <path d="M26 30c6-10 22-10 28 0H26z" fill="#FFF"/>
      <circle cx="36" cy="28" r="5" fill="#FF8FAB"/>
      <circle cx="46" cy="26" r="4.5" fill="#FF6B3D"/>
      <path d="M30 48l6-2 4 3 6-3 6 2" stroke="#E8C49A" stroke-width="2" fill="none"/>
    </svg>`,
  salpicon: `
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <rect width="80" height="80" rx="18" fill="#FFE0A3"/>
      <path d="M22 28h36v8c0 16-8 28-18 28S22 52 22 36v-8z" fill="#FFB703"/>
      <path d="M26 30h28v6c0 14-6 24-14 24S26 50 26 36v-6z" fill="#FFE066"/>
      <circle cx="34" cy="40" r="4" fill="#FF6B3D"/>
      <circle cx="46" cy="38" r="3.5" fill="#E01678"/>
      <circle cx="40" cy="48" r="3.2" fill="#8BC34A"/>
      <circle cx="48" cy="46" r="3" fill="#FF9F1C"/>
    </svg>`,
  mango: `
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <rect width="80" height="80" rx="18" fill="#FFE7B8"/>
      <path d="M28 26c16-8 34 2 34 20 0 14-10 24-22 24-16 0-24-16-18-32 2-6 4-10 6-12z" fill="#FF9F1C"/>
      <path d="M36 30c10-4 22 4 20 16" fill="none" stroke="#FFB703" stroke-width="3" stroke-linecap="round"/>
      <path d="M48 22c2 6-2 10-8 12 6-2 10-8 8-12z" fill="#3E5C14"/>
    </svg>`,
  lulo: `
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <rect width="80" height="80" rx="18" fill="#EAF78A"/>
      <circle cx="40" cy="42" r="20" fill="#C8E031"/>
      <circle cx="40" cy="42" r="14" fill="#FFF6C2"/>
      <circle cx="40" cy="42" r="6" fill="#8FB820"/>
      <circle cx="40" cy="24" r="5" fill="#3E5C14"/>
    </svg>`,
  mora: `
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <rect width="80" height="80" rx="18" fill="#F3D0E8"/>
      <circle cx="34" cy="40" r="7" fill="#7B1FA2"/>
      <circle cx="46" cy="40" r="7" fill="#6A1B9A"/>
      <circle cx="40" cy="30" r="7" fill="#8E24AA"/>
      <circle cx="32" cy="50" r="6" fill="#4A148C"/>
      <circle cx="48" cy="50" r="6" fill="#6A1B9A"/>
      <circle cx="40" cy="48" r="6" fill="#7B1FA2"/>
      <path d="M40 22c6 0 8-6 8-10-8 2-12 6-8 10z" fill="#3E5C14"/>
    </svg>`,
  maracuya: `
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <rect width="80" height="80" rx="18" fill="#F7E8D0"/>
      <circle cx="40" cy="42" r="20" fill="#7B3F00"/>
      <circle cx="40" cy="42" r="14" fill="#F4C430"/>
      <g fill="#3E5C14">
        <circle cx="40" cy="36" r="1.6"/><circle cx="34" cy="40" r="1.6"/>
        <circle cx="46" cy="40" r="1.6"/><circle cx="36" cy="46" r="1.6"/>
        <circle cx="44" cy="46" r="1.6"/><circle cx="40" cy="42" r="1.6"/>
      </g>
    </svg>`,
  fresa: `
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <rect width="80" height="80" rx="18" fill="#FFD6E3"/>
      <path d="M40 24c12 0 20 10 20 22 0 14-12 24-20 26-8-2-20-12-20-26 0-12 8-22 20-22z" fill="#E01678"/>
      <g fill="#FFF0F5">
        <circle cx="34" cy="40" r="1.8"/><circle cx="46" cy="40" r="1.8"/>
        <circle cx="40" cy="48" r="1.8"/><circle cx="32" cy="50" r="1.6"/>
        <circle cx="48" cy="50" r="1.6"/>
      </g>
      <path d="M40 22c-4-8 0-12 0-12 4 4 6 8 4 12h-4z" fill="#3E5C14"/>
      <path d="M40 22c4-8 10-8 12-8-2 6-6 8-12 8z" fill="#6B8A12"/>
    </svg>`,
  banano: `
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <rect width="80" height="80" rx="18" fill="#FFF3C4"/>
      <path d="M24 20c16 2 36 22 40 44 1 7-5 12-11 8C41 64 24 42 22 28c-1-6 0-8 2-8z" fill="#F4C430"/>
      <path d="M26 22c14 4 32 22 36 40" fill="none" stroke="#FFE066" stroke-width="5" stroke-linecap="round"/>
      <path d="M24 20c2-6 8-8 12-6" fill="none" stroke="#6B8A12" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
  mixto: `
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <rect width="80" height="80" rx="18" fill="#EAF78A"/>
      <circle cx="30" cy="34" r="10" fill="#FF6B3D"/>
      <circle cx="50" cy="36" r="10" fill="#FF9F1C"/>
      <circle cx="40" cy="50" r="10" fill="#E01678"/>
      <path d="M48 24c4-8 10-6 12-4-4 6-8 8-12 4z" fill="#3E5C14"/>
    </svg>`,
  arequipe: `
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <rect width="80" height="80" rx="18" fill="#F7E8D0"/>
      <path d="M28 22h24v8H28z" fill="#C0673A"/>
      <path d="M26 30h28l-4 30H30L26 30z" fill="#E8C49A"/>
      <path d="M30 34h20l-3 22H33L30 34z" fill="#8B5A2B"/>
      <path d="M34 44c4 4 10 4 14 0" fill="none" stroke="#D4A574" stroke-width="2"/>
    </svg>`,
  chocolate: `
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <rect width="80" height="80" rx="18" fill="#E8C9A0"/>
      <path d="M26 22h28l-4 36H30L26 22z" fill="#5D3A1A"/>
      <path d="M30 26h20l-3 28H33L30 26z" fill="#7B3F00"/>
      <circle cx="40" cy="20" r="8" fill="#FFF9F0"/>
      <path d="M36 38c6-2 10 4 4 8" fill="none" stroke="#D4A574" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
  copa: `
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <rect width="80" height="80" rx="18" fill="#F3D0E8"/>
      <path d="M28 34c4 16 8 20 12 20s8-4 12-20H28z" fill="#FFF6E8"/>
      <path d="M38 54h4v10h-4z" fill="#E8C49A"/>
      <ellipse cx="40" cy="66" rx="10" ry="3.5" fill="#D4A574"/>
      <circle cx="40" cy="28" r="12" fill="#FF8FAB"/>
      <circle cx="32" cy="32" r="8" fill="#FFF"/>
      <circle cx="48" cy="33" r="7" fill="#C8E031"/>
    </svg>`,
  sundae: `
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <rect width="80" height="80" rx="18" fill="#FFE7B8"/>
      <path d="M26 38c4 16 10 22 14 22s10-6 14-22H26z" fill="#FFF6E8"/>
      <path d="M38 60h4v8h-4z" fill="#E8C49A"/>
      <ellipse cx="40" cy="70" rx="10" ry="3" fill="#D4A574"/>
      <circle cx="40" cy="28" r="11" fill="#F7FBE3"/>
      <circle cx="40" cy="38" r="11" fill="#FF8FAB"/>
      <path d="M44 18c6 2 8 10 2 14-8-6-8-12-2-14z" fill="#E01678"/>
      <path d="M36 42c8 10 16 2 16 2" fill="none" stroke="#C0673A" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
  copafruta: `
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <rect width="80" height="80" rx="18" fill="#EAF78A"/>
      <path d="M24 40c4 18 10 24 16 24s12-6 16-24H24z" fill="#FFF6E8"/>
      <path d="M38 64h4v6h-4z" fill="#E8C49A"/>
      <ellipse cx="40" cy="72" rx="10" ry="3" fill="#D4A574"/>
      <circle cx="32" cy="34" r="9" fill="#FF6B3D"/>
      <circle cx="48" cy="34" r="8" fill="#FF9F1C"/>
      <circle cx="40" cy="28" r="8" fill="#FFF"/>
      <ellipse cx="40" cy="42" rx="7" ry="6" fill="#8BC34A"/>
    </svg>`,
};

/* ========== Utilidades ========== */

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function waLink(numero) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(MENSAJE_WHATSAPP)}`;
}

function formatPrecio(precio) {
  if (precio === null || precio === undefined || precio === "") {
    return { texto: "Precio: por confirmar", definido: false };
  }
  if (typeof precio === "number") {
    const texto = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(precio);
    return { texto, definido: true };
  }
  return { texto: String(precio), definido: true };
}

function itemVisual(item) {
  if (item.foto) {
    return `<img src="${escapeHtml(item.foto)}" alt="${escapeHtml(item.nombre)}">`;
  }
  return ILLUSTRATIONS[item.ilustracion] || ILLUSTRATIONS.ensalada;
}

/* ========== Menú ========== */

let categoriaActiva = "todas";

function renderTabs() {
  const tabs = document.getElementById("cat-tabs");
  const cats = [{ id: "todas", nombre: "Todas" }, ...MENU];
  tabs.innerHTML = cats
    .map(
      (cat) => `
      <button type="button" class="cat-tab" role="tab"
        id="tab-${cat.id}" aria-controls="menu-grid"
        aria-selected="${cat.id === categoriaActiva}">
        ${escapeHtml(cat.nombre)}
      </button>`
    )
    .join("");

  tabs.querySelectorAll(".cat-tab").forEach((btn, i) => {
    btn.addEventListener("click", () => {
      categoriaActiva = cats[i].id;
      renderTabs();
      renderMenu();
    });
  });
}

function renderMenu() {
  const grid = document.getElementById("menu-grid");
  const cats = categoriaActiva === "todas" ? MENU : MENU.filter((c) => c.id === categoriaActiva);
  const cards = [];
  cats.forEach((cat) => {
    cat.items.forEach((item) => {
      const precio = formatPrecio(item.precio);
      cards.push(`
        <article class="menu-item" data-categoria="${escapeHtml(cat.id)}" data-foto="${item.foto ? "yes" : "no"}">
          <div class="item-visual">${itemVisual(item)}</div>
          <div class="item-body">
            <h3>${escapeHtml(item.nombre)}</h3>
            <p>${escapeHtml(item.descripcion)}</p>
            <span class="item-price${precio.definido ? " is-set" : ""}">${escapeHtml(precio.texto)}</span>
          </div>
        </article>
      `);
    });
  });
  grid.innerHTML = cards.join("");
}

/* ========== Sedes ========== */

const iconPin = `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5z"/></svg>`;
const iconClock = `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 11h-5V11h4V7h2z"/></svg>`;
const iconPhone = `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 7a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.24 1z"/></svg>`;

function campoOPendiente(valor) {
  if (valor) return escapeHtml(valor);
  return `<span class="placeholder-flag">por confirmar</span>`;
}

function renderSedes() {
  const grid = document.getElementById("sedes-grid");
  grid.innerHTML = SEDES.map(
    (sede) => `
    <article class="sede-card sede-${escapeHtml(sede.id)}">
      <div class="sede-visual" aria-hidden="true"><span class="sede-city">${escapeHtml(sede.nombre)}</span></div>
      <div class="sede-body">
        <h3>${escapeHtml(sede.nombre)}</h3>
        <p class="sede-city-sub">${escapeHtml(sede.ciudad)}</p>
        <ul class="sede-meta">
          <li>${iconPin}<span><strong>Dirección:</strong> ${campoOPendiente(sede.direccion)}</span></li>
          <li>${iconClock}<span><strong>Horario:</strong> ${campoOPendiente(sede.horarios)}</span></li>
          <li>${iconPhone}<span><strong>WhatsApp:</strong> ${escapeHtml(sede.telefonoVisible)}</span></li>
        </ul>
        <a class="btn btn-wa" href="${waLink(sede.wa)}" target="_blank" rel="noopener noreferrer">
          Pedir en ${escapeHtml(sede.nombre)}
        </a>
      </div>
    </article>
  `
  ).join("");

  document.getElementById("modal-sedes").innerHTML = SEDES.map(
    (sede) => `
    <a class="modal-sede" href="${waLink(sede.wa)}" target="_blank" rel="noopener noreferrer">
      <span>${escapeHtml(sede.nombre)}<small>${escapeHtml(sede.telefonoVisible)}</small></span>
      <span class="wa-pill">Abrir chat</span>
    </a>
  `
  ).join("");
}

/* ========== Modal de pedido ========== */

const modal = document.getElementById("pedido-modal");
const sheet = modal.querySelector(".modal-sheet");

function abrirPedido() {
  modal.hidden = false;
  document.body.classList.add("modal-open");
  sheet.focus();
}

function cerrarPedido() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".js-open-pedido").forEach((el) => {
  el.addEventListener("click", abrirPedido);
});
document.querySelectorAll(".js-close-pedido").forEach((el) => {
  el.addEventListener("click", cerrarPedido);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) cerrarPedido();
});

renderTabs();
renderMenu();
renderSedes();
