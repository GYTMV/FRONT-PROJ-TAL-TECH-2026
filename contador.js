window.actualizarContadorCarrito = function () {

    const carrito =
        JSON.parse(localStorage.getItem("carrito")) || [];

    let cantidadProductos = 0;

    carrito.forEach(producto => {
        cantidadProductos += producto.cantidad;
    });

    const contador =
        document.getElementById("contador-carrito");

    if (contador) {
        contador.textContent = cantidadProductos;
    }
};

actualizarContadorCarrito();