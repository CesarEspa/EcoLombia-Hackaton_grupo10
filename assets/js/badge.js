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

//funcion para dar formato a moneda local
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

    //rendreizamos el carrito dentro del contenedor
    contenedor.innerHTML = carrito.map(item => `
          <div class="cart-item d-flex align-items-center justify-content-between mb-3 p-2">

        <div class="flex-grow-1">
            <h6 class="mb-1 fw-bold">${item.nombre}</h6>
            <small class="text-muted">${formatearPrecio(item.precio)} x ${item.cantidad}</small>
        </div>

        <div class="d-flex align-items-center gap-2">

            <button onclick="disminuirCantidad(${item.id})" 
                class="btn btn-sm btn-light border">
                ➖
            </button>

            <span class="fw-bold">${item.cantidad}</span>

            <button onclick="addtoCart(${JSON.stringify(item).replace(/"/g, '&quot;')})" 
                class="btn btn-sm btn-light border">
                ➕
            </button>

            <button onclick="eliminarItem(${item.id})" 
                class="btn btn-sm btn-danger">
                ✕
            </button>

        </div>
    </div>
      `).join("");

    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    totalContainer.innerHTML = `
    <div class="d-flex justify-content-between align-items-center">
        <span class="fw-bold">Total</span>
        <span class="fs-5 text-success fw-bold">
            ${formatearPrecio(total)}
        </span>
    </div>  `;
}

//abrimos y cerramos badge con sidebar
function abrirCarrito() {
    sidebar.classList.add("open");
    overlay.classList.add("show");
    renderCarrito();
}

//Cerramos
function cerrarCarrito() {
    sidebar.classList.remove("open");
    overlay.classList.remove("show")
}
//añadimos escuchas al DOM
botonCarrito.addEventListener("click", abrirCarrito);
cerrarBtn.addEventListener("click", cerrarCarrito);
