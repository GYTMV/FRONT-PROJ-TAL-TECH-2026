const listaCarrito = document.getElementById("lista-carrito");
const totalHTML = document.getElementById("total");
const btnVaciar = document.getElementById("vaciar-carrito");

let carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarCarrito() {

    listaCarrito.innerHTML = "";

    let total = 0;

    carrito.forEach(producto => {

        const li = document.createElement("li");

        li.textContent =
            `${producto.nombre} x${producto.cantidad}
             - $${producto.precio * producto.cantidad}`;

        listaCarrito.appendChild(li);

        total += producto.precio * producto.cantidad;
    });

    totalHTML.textContent = total;
}

btnVaciar.addEventListener("click", () => {

    carrito = [];

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    mostrarCarrito();
    actualizarContadorCarrito();
});

mostrarCarrito();