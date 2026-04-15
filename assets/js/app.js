function navbar () {
    
}

// ===== DATOS =====
const DESTINOS = [
  { id: 1, nombre: "PNN Tayrona" },
  { id: 2, nombre: "Sierra Nevada de Santa Marta" },
  { id: 3, nombre: "Santuario Los Flamencos" },
  { id: 4, nombre: "Archipiélago de San Bernardo" },
  { id: 5, nombre: "Mompox (Río Magdalena)" },
  { id: 6, nombre: "Valle del Cocora" },
  { id: 7, nombre: "PNN El Cocuy" },
  { id: 8, nombre: "Parque Arví" },
  { id: 9, nombre: "Desierto de la Tatacoa" },
  { id: 10, nombre: "Cañón del Chicamocha" },
  { id: 11, nombre: "PNN Ensenada de Utría" },
  { id: 12, nombre: "Bahía Solano" },
  { id: 13, nombre: "Isla Gorgona" },
  { id: 14, nombre: "Nuquí" },
  { id: 15, nombre: "Reserva Natural El Almejal" },
  { id: 16, nombre: "Caño Cristales" },
  { id: 17, nombre: "PNN El Tuparro" },
  { id: 18, nombre: "Hato La Aurora" },
  { id: 19, nombre: "Bioparque Los Ocarros" },
  { id: 20, nombre: "Parque Merecure" },
  { id: 21, nombre: "PNN Chiribiquete" },
  { id: 22, nombre: "Reserva Tanimboca" },
  { id: 23, nombre: "Puerto Nariño" },
  { id: 24, nombre: "Isla de los Micos" },
  { id: 25, nombre: "Lagos de Tarapoto" }
];

// ===== ESPERAR DOM =====
document.addEventListener("DOMContentLoaded", () => {

  const select = document.getElementById("destinoSelect");

  //Validación clave
  if (!select) {
    console.error("No se encontró el select destinoSelect");
    return;
  }

  // ===== LLENAR SELECT =====
  DESTINOS.forEach(destino => {
    const option = document.createElement("option");
    option.value = destino.id;
    option.textContent = destino.nombre;
    select.appendChild(option);
  });

  // ===== EVENTO PARA VER SELECCIÓN =====
  select.addEventListener("change", (e) => {
    const id = e.target.value;

    const destinoSeleccionado = DESTINOS.find(d => d.id == id);

    console.log("Seleccionado:", destinoSeleccionado);

    // 👇 prueba visual rápida
    alert(`Seleccionaste: ${destinoSeleccionado.nombre}`);
  });

});