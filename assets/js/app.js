function navbar () {
    
}

// datos de destinos
const DESTINOS = [
  {
    id: 1,
    nombre: "Cañón del Río Claro",
    ubicacion: "Antioquia",
    precio: 180000,
    imagen: "https://source.unsplash.com/800x600/?river,canyon,jungle",
    descripcion: "Reserva natural perfecta para rafting y exploración."
  },
  {
    id: 2,
    nombre: "PNN Tayrona",
    ubicacion: "Magdalena",
    precio: 350000,
    imagen: "https://source.unsplash.com/800x600/?tayrona,beach,colombia",
    descripcion: "Playas paradisíacas y selva tropical."
  },
  {
    id: 3,
    nombre: "Desierto de la Tatacoa",
    ubicacion: "Huila",
    precio: 220000,
    imagen: "https://source.unsplash.com/800x600/?tatacoa,desert,stars",
    descripcion: "Paisajes únicos y noches estrelladas."
  },
  {
    id: 4,
    nombre: "Sierra Nevada de Santa Marta",
    ubicacion: "Magdalena",
    precio: 400000,
    imagen: "https://source.unsplash.com/800x600/?mountains,colombia",
    descripcion: "Montañas sagradas con gran biodiversidad."
  },
  {
    id: 5,
    nombre: "Santuario Los Flamencos",
    ubicacion: "La Guajira",
    precio: 250000,
    imagen: "https://source.unsplash.com/800x600/?flamingos,lagoon",
    descripcion: "Avistamiento de flamencos en su hábitat natural."
  },
  {
    id: 6,
    nombre: "Archipiélago de San Bernardo",
    ubicacion: "Bolívar",
    precio: 500000,
    imagen: "https://source.unsplash.com/800x600/?caribbean,islands",
    descripcion: "Islas caribeñas con aguas cristalinas."
  },
  {
    id: 7,
    nombre: "Mompox (Río Magdalena)",
    ubicacion: "Bolívar",
    precio: 300000,
    imagen: "https://source.unsplash.com/800x600/?colonial,town,river",
    descripcion: "Pueblo colonial lleno de historia."
  },
  {
    id: 8,
    nombre: "Valle del Cocora",
    ubicacion: "Quindío",
    precio: 200000,
    imagen: "https://source.unsplash.com/800x600/?cocora,palm,forest",
    descripcion: "Hogar de la palma de cera, árbol nacional."
  },
  {
    id: 9,
    nombre: "PNN El Cocuy",
    ubicacion: "Boyacá",
    precio: 450000,
    imagen: "https://source.unsplash.com/800x600/?snow,mountains,trekking",
    descripcion: "Nevados y senderismo de alta montaña."
  },
  {
    id: 10,
    nombre: "Parque Arví",
    ubicacion: "Antioquia",
    precio: 120000,
    imagen: "https://source.unsplash.com/800x600/?forest,park,trail",
    descripcion: "Naturaleza cerca de Medellín."
  },
  {
    id: 11,
    nombre: "Cañón del Chicamocha",
    ubicacion: "Santander",
    precio: 280000,
    imagen: "https://source.unsplash.com/800x600/?canyon,landscape",
    descripcion: "Uno de los cañones más grandes del mundo."
  },
  {
    id: 12,
    nombre: "PNN Ensenada de Utría",
    ubicacion: "Chocó",
    precio: 420000,
    imagen: "https://source.unsplash.com/800x600/?whales,ocean",
    descripcion: "Ballenas, selva y playas vírgenes."
  },
  {
    id: 13,
    nombre: "Bahía Solano",
    ubicacion: "Chocó",
    precio: 380000,
    imagen: "https://source.unsplash.com/800x600/?beach,jungle",
    descripcion: "Destino ideal para ecoturismo."
  },
  {
    id: 14,
    nombre: "Isla Gorgona",
    ubicacion: "Cauca",
    precio: 600000,
    imagen: "https://source.unsplash.com/800x600/?island,jungle",
    descripcion: "Isla con historia y biodiversidad única."
  },
  {
    id: 15,
    nombre: "Nuquí",
    ubicacion: "Chocó",
    precio: 550000,
    imagen: "https://source.unsplash.com/800x600/?eco,beach,forest",
    descripcion: "Relajación, selva y mar."
  },
  {
    id: 16,
    nombre: "Reserva Natural El Almejal",
    ubicacion: "Chocó",
    precio: 320000,
    imagen: "https://source.unsplash.com/800x600/?eco,lodge,jungle",
    descripcion: "Ecolodge rodeado de naturaleza."
  },
  {
    id: 17,
    nombre: "Caño Cristales",
    ubicacion: "Meta",
    precio: 700000,
    imagen: "https://source.unsplash.com/800x600/?colorful,river",
    descripcion: "El río de los cinco colores."
  },
  {
    id: 18,
    nombre: "PNN El Tuparro",
    ubicacion: "Vichada",
    precio: 650000,
    imagen: "https://source.unsplash.com/800x600/?savanna,river",
    descripcion: "Naturaleza salvaje y poco explorada."
  },
  {
    id: 19,
    nombre: "Hato La Aurora",
    ubicacion: "Casanare",
    precio: 480000,
    imagen: "https://source.unsplash.com/800x600/?wildlife,safari",
    descripcion: "Safari llanero con fauna silvestre."
  },
  {
    id: 20,
    nombre: "Bioparque Los Ocarros",
    ubicacion: "Meta",
    precio: 90000,
    imagen: "https://source.unsplash.com/800x600/?animals,zoo",
    descripcion: "Fauna típica de los llanos orientales."
  },
  {
    id: 21,
    nombre: "Parque Merecure",
    ubicacion: "Casanare",
    precio: 260000,
    imagen: "https://source.unsplash.com/800x600/?adventure,park",
    descripcion: "Aventura extrema en los llanos."
  },
  {
    id: 22,
    nombre: "PNN Chiribiquete",
    ubicacion: "Amazonas",
    precio: 800000,
    imagen: "https://source.unsplash.com/800x600/?amazon,jungle",
    descripcion: "Patrimonio natural y cultural de la humanidad."
  },
  {
    id: 23,
    nombre: "Reserva Tanimboca",
    ubicacion: "Amazonas",
    precio: 300000,
    imagen: "https://source.unsplash.com/800x600/?amazon,canopy",
    descripcion: "Experiencia en la selva amazónica."
  },
  {
    id: 24,
    nombre: "Puerto Nariño",
    ubicacion: "Amazonas",
    precio: 350000,
    imagen: "https://source.unsplash.com/800x600/?river,village",
    descripcion: "Pueblo ecológico sin carros."
  },
  {
    id: 25,
    nombre: "Isla de los Micos",
    ubicacion: "Amazonas",
    precio: 200000,
    imagen: "https://source.unsplash.com/800x600/?monkeys,jungle",
    descripcion: "Interacción con monos en libertad."
  },
  {
    id: 26,
    nombre: "Lagos de Tarapoto",
    ubicacion: "Amazonas",
    precio: 270000,
    imagen: "https://source.unsplash.com/800x600/?pink,dolphin,river",
    descripcion: "Avistamiento de delfines rosados."
  }
];

// esperamos el dom y añadimos select label para destinos
document.addEventListener("DOMContentLoaded", () => {

  const select = document.getElementById("destinoSelect");

  //Validación clave
  if (!select) {
    console.error("No se encontró el select destinoSelect");
    return;
  }

  //llenamos el select
  DESTINOS.forEach(destino => {
    const option = document.createElement("option");
    option.value = destino.id;
    option.textContent = destino.nombre;
    select.appendChild(option);
  });

  //creamos un evento que nos permita renderizar
  select.addEventListener("change", (e) => {
    const id = e.target.value;

    const destinoSeleccionado = DESTINOS.find(d => d.id == id);

    console.log("Seleccionado:", destinoSeleccionado);

    // 👇 prueba visual rápida
    alert(`Seleccionaste: ${destinoSeleccionado.nombre}`);
  });

});

