// ============================================================
// ÚNICA FUENTE DE DATOS DEL NEGOCIO
// Este archivo lo leen: la tarjeta (index.html), la página del QR
// (static/qr/imprimir.html) y el servidor (config.py).
// Cambia aquí el nombre, teléfono, precios, horarios y menú —
// no edites esos datos en ningún otro lado.
//
// REGLA para config.py: el objeto de abajo es JSON estricto
// (comillas dobles, sin comentarios dentro de las llaves).
// Los precios son PLACEHOLDER hasta confirmar los reales.
// ============================================================
const DATOS = {
  "nombre": "Celeste Street Food",
  "eslogan": "Domicilios en todo Sibaté · Cundinamarca",
  "propuesta": "Precio directo, sin recargos de apps de domicilio",
  "whatsappIntl": "573222676860",
  "telefonoCall": "+573222676860",
  "zonaDomicilio": "Sibaté y alrededores",
  "horario": "Por confirmar",
  "tiempoDomicilio": "20–30 min aprox.",
  "urlPublica": "https://celeste-street-food.github.io",
  "mensajeWhatsapp": "Hola, quiero hacer un pedido",
  "menu": [
    { "cat": "Desayunos y huevos", "nombre": "Huevos fritos",     "precio": 5000,  "slug": "huevos-fritos",     "emoji": "🍳", "ing": ["Huevos de campo", "Arroz con hogao", "Pan", "Café opcional"] },
    { "cat": "Desayunos y huevos", "nombre": "Huevos revueltos",  "precio": 5500,  "slug": "huevos-revueltos",  "emoji": "🍳", "ing": ["Huevos revueltos", "Cebolla y tomate", "Arroz", "Pan"] },
    { "cat": "Desayunos y huevos", "nombre": "Huevos perico",     "precio": 6000,  "slug": "huevos-perico",     "emoji": "🍅", "ing": ["Hogao de tomate y cebolla", "Aguacate", "Arroz", "Pan"] },

    { "cat": "Arepas", "nombre": "Arepas rellenas",  "precio": 6500, "slug": "arepas-rellenas",  "emoji": "🫓", "ing": ["Arepa de maíz", "Queso derretido", "Pollo o carne a elegir", "Mantequilla"] },
    { "cat": "Arepas", "nombre": "Arepas rancheras", "precio": 8000, "slug": "arepas-rancheras", "emoji": "🥓", "ing": ["Arepa de maíz", "Huevo", "Longaniza", "Chorizo", "Queso y hogao"] },

    { "cat": "Picadas y fritos", "nombre": "Papa criolla con longaniza casera", "precio": 10000, "slug": "papa-criolla-longaniza", "emoji": "🌭", "ing": ["Papas criollas fritas", "Longaniza casera artesanal", "Ají y limón", "Mayonesa"], "casero": true },
    { "cat": "Picadas y fritos", "nombre": "Salchipapa",      "precio": 9000, "slug": "salchipapa",         "emoji": "🍟", "ing": ["Papas fritas", "Salchicha", "Queso rallado", "Salsa de la casa", "Piña"] },
    { "cat": "Picadas y fritos", "nombre": "Patacón relleno", "precio": 8000, "slug": "patacon-relleno",    "emoji": "🍌", "ing": ["Patacón de plátano verde", "Relleno a elegir", "Queso derretido", "Ensalada de repollo", "Salsa de la casa"], "fotos": ["patacon-01-cuadrada.jpg", "patacon-02-mediana.jpg", "patacon-01.jpeg"] },

    { "cat": "Bebidas", "nombre": "Café",          "precio": 2500, "slug": "cafe",           "emoji": "☕", "ing": ["Café tinto tradicional"] },
    { "cat": "Bebidas", "nombre": "Café con leche", "precio": 3000, "slug": "cafe-con-leche", "emoji": "🥛", "ing": ["Café", "Leche caliente"] },
    { "cat": "Bebidas", "nombre": "Avena",          "precio": 3500, "slug": "avena",          "emoji": "🥣", "ing": ["Avena fría o caliente", "Hielo"] }
  ]
};
