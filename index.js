const botonesAgregar =
    document.querySelectorAll(".agregar");

let carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );
}

botonesAgregar.forEach(boton => {

    boton.addEventListener("click", () => {

        const nombre = boton.dataset.producto;
        const precio = Number(boton.dataset.precio);

        const existente =
            carrito.find(p => p.nombre === nombre);

        if (existente) {
            existente.cantidad++;
        } else {
            carrito.push({
                nombre,
                precio,
                cantidad: 1
            });
        }

        guardarCarrito();
        actualizarContadorCarrito();
    });

});