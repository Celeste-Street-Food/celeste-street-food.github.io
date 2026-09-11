// ============================================================
// ÚNICA FUENTE DE DATOS DEL NEGOCIO
// Este archivo lo leen: la tarjeta (index.html), la página del QR
// (static/qr/imprimir.html) y el servidor (config.py).
//
// REGLA para config.py: el objeto de abajo es JSON estricto
// (comillas dobles, sin comentarios dentro de las llaves).
//
// FOTOS: cada plato tiene 2 en img/ (rutas SIN la carpeta img/):
//   - <slug>-mini.jpg    → fondo blanco, miniatura del catálogo
//   - <slug>-rustica.jpg → foto grande de ambiente para el detalle
// CAMPOS EXTRA por plato:
//   envase   → cómo se empaca (se muestra en el detalle)
//   casero   → insignia "Casero" (lima)
//   estrella → insignia "⭐ Favorito" (naranja)
//   nuevo    → insignia "Nuevo" (negra)
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
    { "cat": "Desayunos y huevos", "nombre": "Huevos fritos", "precio": 5000, "slug": "huevos-fritos", "emoji": "🍳", "ing": ["Huevos de campo", "Arroz con hogao", "Pan", "Café opcional"], "fotos": ["huevos-fritos-mini.jpg", "huevos-fritos-rustica.jpg"], "envase": "Caja kraft barquito CELESTE STREET FOOD", "casero": true },
    { "cat": "Desayunos y huevos", "nombre": "Huevos revueltos", "precio": 5500, "slug": "huevos-revueltos", "emoji": "🍳", "ing": ["Huevos revueltos", "Cebolla y tomate", "Arroz", "Pan"], "fotos": ["huevos-revueltos-mini.jpg", "huevos-revueltos-rustica.jpg"], "envase": "Caja kraft barquito CELESTE STREET FOOD" },
    { "cat": "Desayunos y huevos", "nombre": "Huevos perico", "precio": 6000, "slug": "huevos-perico", "emoji": "🍅", "ing": ["Hogao de tomate y cebolla", "Aguacate", "Arroz", "Pan"], "fotos": ["huevos-perico-mini.jpg", "huevos-perico-rustica.jpg"], "envase": "Caja kraft barquito CELESTE STREET FOOD" },

    { "cat": "Arepas", "nombre": "Arepas rellenas", "precio": 6500, "slug": "arepas-rellenas", "emoji": "🫓", "ing": ["Arepa de maíz", "Queso derretido", "Pollo o carne a elegir", "Mantequilla"], "fotos": ["arepas-rellenas-mini.jpg", "arepas-rellenas-rustica.jpg"], "envase": "Caja kraft barquito CELESTE STREET FOOD", "estrella": true },
    { "cat": "Arepas", "nombre": "Arepas rancheras", "precio": 8000, "slug": "arepas-rancheras", "emoji": "🥓", "ing": ["Arepa de maíz", "Huevo", "Longaniza", "Chorizo", "Queso y hogao"], "fotos": ["arepas-rancheras-mini.jpg", "arepas-rancheras-rustica.jpg"], "envase": "Caja kraft barquito CELESTE STREET FOOD" },

    { "cat": "Picadas y fritos", "nombre": "Papa criolla con longaniza casera", "precio": 10000, "slug": "papa-criolla-longaniza", "emoji": "🌭", "ing": ["Papas criollas fritas", "Longaniza casera artesanal", "Ají y limón", "Mayonesa"], "fotos": ["papa-criolla-longaniza-mini.jpg", "papa-criolla-longaniza-rustica.jpg"], "envase": "Caja kraft barquito CELESTE STREET FOOD", "casero": true },
    { "cat": "Picadas y fritos", "nombre": "Salchipapa", "precio": 9000, "slug": "salchipapa", "emoji": "🍟", "ing": ["Papas fritas", "Salchicha", "Queso rallado", "Salsa de la casa", "Piña"], "fotos": ["salchipapa-mini.jpg", "salchipapa-rustica.jpg"], "envase": "Caja kraft barquito CELESTE STREET FOOD" },
    { "cat": "Picadas y fritos", "nombre": "Patacón relleno", "precio": 8000, "slug": "patacon-relleno", "emoji": "🍌", "ing": ["Patacón de plátano verde", "Relleno a elegir", "Queso derretido", "Ensalada de repollo", "Salsa de la casa"], "fotos": ["patacon-relleno-mini.jpg", "patacon-relleno-rustica.jpg"], "envase": "Caja kraft barquito CELESTE STREET FOOD" },

    { "cat": "Bebidas", "nombre": "Café", "precio": 2500, "slug": "cafe", "emoji": "☕", "ing": ["Café tinto tradicional"], "fotos": ["cafe-mini.jpg", "cafe-rustica.jpg"], "envase": "Vaso negro con fajilla kraft CELESTE STREET FOOD" },
    { "cat": "Bebidas", "nombre": "Café con leche", "precio": 3000, "slug": "cafe-con-leche", "emoji": "🥛", "ing": ["Café", "Leche caliente"], "fotos": ["cafe-con-leche-mini.jpg", "cafe-con-leche-rustica.jpg"], "envase": "Vaso negro con fajilla kraft CELESTE STREET FOOD" },
    { "cat": "Bebidas", "nombre": "Avena caliente", "precio": 3500, "slug": "avena", "emoji": "🥣", "ing": ["Avena caliente", "Canela", "Avena en hojuelas"], "fotos": ["avena-caliente-mini.jpg", "avena-caliente-rustica.jpg"], "envase": "Vaso negro con fajilla kraft CELESTE STREET FOOD" },
    { "cat": "Bebidas", "nombre": "Avena fría con hielo", "precio": 4000, "slug": "avena-fria", "emoji": "🧊", "ing": ["Avena fría", "Hielo", "Canela", "Avena en hojuelas"], "fotos": ["avena-fria-mini.jpg", "avena-fria-rustica.jpg"], "envase": "Vaso transparente frío con fajilla negra CELESTE STREET FOOD", "nuevo": true }
  ]
};
