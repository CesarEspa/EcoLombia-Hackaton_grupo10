const botonCarrito = document.querySelector('#badge');

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
    console.log("Guardado:", carrito);
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
botonCarrito.addEventListener("click", () => {

    const productoFake = {
        id: 1,
        nombre: "guatape",
        precio: 100000
    };

    addtoCart(productoFake);
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

//renderizamos section con info del carrito
function renderCarrito() {
    const contenedor = document.querySelector("#carrito-container");

    if (carrito.length === 0) {
        contenedor.innerHTML = `<p>El carrito esta vacio</p>`;
        return;
    }

    contenedor.innerHTML = carrito.map(item => `
        <div class="card mb-2 p-2">
            <h5>${item.nombre}</h5>
            <p>Precio: $${item.precio}</p>
            <p>Cantidad: ${item.cantidad}</p>

            <button onclick="disminuirCantidad(${item.id})" class="btn btn-warning btn-sm">-</button>
            <button onclick="eliminarItem(${item.id})" class="btn btn-danger btn-sm">Eliminar</button>
        </div>
    `).join("");
}
