const botonCarrito = document.querySelector('#badge');
const sidebar = document.querySelector('#carritoSidebar');
const overlay = document.querySelector('#overlay-carrito');
const cerrarBtn = document.querySelector('#cerrarSidebar')

//inicializamos el carrito
let carrito = [];

//logica para agregar productos al carrito
function addtoCart(producto) {
    const existe = carrito.find(item => item.id === producto.id);

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    actualizarBadge();
    guardarCarrito();
    renderCarrito();
}
//actualizamos el carrito
function actualizarBadge() {
    const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    botonCarrito.innerHTML = `
    Comprar destino <i class="bi bi-cart3"></i> (${total})
    `;
}

//funcion para guardar item en localstorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//funcion para cargar datos del carrito en localstorage
function cargarCarrito() {
    const data = localStorage.getItem("carrito");

    if (data) {
        carrito = JSON.parse(data);
    }

    actualizarBadge();
    renderCarrito();
}
cargarCarrito();

//testing basico funcionalidad añadir
//añadimos funcion para abrir modal con contenido del carrito.
botonCarrito.addEventListener("click", () => {
    renderCarrito();

    const modal = new bootstrap.Modal(document.getElementById('carritoModal'));
    modal.show();
});

//probamos eliminar carrito
function eliminarItem(id) {
    carrito = carrito.filter(item => item.id !== id);

    actualizarBadge();
    guardarCarrito();
    renderCarrito();
}

//funcion para disminuir cantidad de items en el carrito

function disminuirCantidad(id) {
    const producto = carrito.find(item => item.id === id);

    if (producto) {
        producto.cantidad--;

        if (producto.cantidad <= 0) {
            eliminarDelCarrito(id);
        } else {
            actualizarBadge();
            guardarCarrito();
            renderCarrito();
        }
    }
}
window.disminuirCantidad = disminuirCantidad;

function formatearPrecio(valor) {
    return `$${valor.toLocaleString('es-CO')}`;
}
//renderizamos section con info del carrito
function renderCarrito() {
    const contenedor = document.querySelector("#carrito-container");
    const totalContainer = document.querySelector("#total-carrito")

    if (carrito.length === 0) {
        contenedor.innerHTML = `<p>El carrito esta vacio</p>`;
        totalContainer.textContent = "Total: $0";
        return;
    }

    contenedor.innerHTML = carrito.map(item => `
        <div class="card mb-2 p-2">
            <h5>${item.nombre}</h5>
            <p>Precio: ${formatearPrecio(item.precio)}</p>
            <p>Cantidad: ${item.cantidad}</p>

            <button onclick="disminuirCantidad(${item.id})" class="btn btn-warning btn-sm">-</button>
            <button onclick="eliminarItem(${item.id})" class="btn btn-danger btn-sm">Eliminar</button>
        </div>
    `).join("");

    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    totalContainer.textContent = `Total: ${formatearPrecio(total)}`
}

//abrimos y cerramos badge con sidebar
function abrirCarrito(){
    sidebar.classList.add("open");
    overlay.classList.add("show");
    renderCarrito();
}

//Cerramos
function cerrarCarrito() {
    sidebar.classList.remove("open");
    overlay.classList.remove("show")
}

botonCarrito.addEventListener("click", abrirCarrito);
cerrarBtn.addEventListener("click", cerrarCarrito);
