function navbar () {
    
}

// datos de destinos
const DESTINOS = [
  {
    id: 1,
    nombre: "Cañón del Río Claro",
    ubicacion: "Antioquia",
    precio: 180000,
    imagen: "assets/img/cano-cristiales.jpg",
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

    // prueba visual rápida
    alert(`Seleccionaste: ${destinoSeleccionado.nombre}`);
  });

});

function renderDestinos() {
    const container = document.querySelector("#cards-container");

    container.innerHTML = DESTINOS.map(destino => `
        <div class="col">
            <div class="card ecotour-card text-center shadow h-100">
                
                <img class="card-img-top" src="${destino.imagen}" alt="${destino.nombre}">
                
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title fw-bold">${destino.nombre}</h5>
                    <h6 class="card-subtitle mb-2 eco-text-muted">${destino.ubicacion}</h6>

                    <p class="card-text eco-text-muted small px-2 flex-grow-1">
                        ${destino.descripcion}
                    </p>

                    <p class="fw-bold text-success">$${destino.precio}</p>

                    <div class="mb-3 mt-auto">
                        <button class="btn btn-eco-primary btn-sm">Ver Plan</button>
                        <button 
                            class="btn btn-eco-secondary btn-sm"
                            onclick="agregarDestino(${destino.id})"
                        >
                            Reservar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join("");
}
renderDestinos();

// function agregarDestinos() {
//     const destino = DESTINOS.find(d => d.id === id);
//     if(!destino) return;

//     addtoCart(destino);
// }
// //agregamos la funcion al scope.
// window.agregarDestinos = agregarDestinos;

// //init
