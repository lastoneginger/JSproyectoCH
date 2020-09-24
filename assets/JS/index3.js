// clase 10 - DOM

// Light/Dark Toggle theme
//Toggle para cambiar de tema
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

//Carrito de Compras
//Boton para agregar servicio
let botonAgregarAlCarrito = document.querySelectorAll('#boton-agregar-servicio');
botonAgregarAlCarrito.forEach(agregarAlCarrito => {
    agregarAlCarrito.addEventListener('click', agregarAlCarritoClick);
});

//Variable para la lista de servicios agregados
let carritoContenedorLista = document.querySelector('#carrito-lista');

//Funcion para agregar los servicios a la lista, llamar las clases dentro de cada servicios y poder usarlos luego
function agregarAlCarritoClick(event) {
    let button = event.target;
    let servicio = button.closest('.servicio');
    
    let tituloServicio = servicio.querySelector('.servicio-title').textContent;
    let precioServicio = servicio.querySelector('.servicio-price').textContent;
    let imagenServicio = servicio.querySelector('.servicio-img').src;

    agregarAlCarritoLista(tituloServicio, precioServicio, imagenServicio);
}

//Funcion para agregar el servicio a la lista
function agregarAlCarritoLista(tituloServicio, precioServicio, imagenServicio){
    let carritoContenedor = document.createElement('li');
    let carritoContenedorServicio = `
        <div class="carrito-productos">
            <img src="${imagenServicio}" width="50" height="50" alt="imagen producto">
            <div class="carrito-info-productos">
                <h4>${tituloServicio}</h4>
                <h4 class="servicio-price">${precioServicio}</h4>
                <input class="cantidadServicios" type="number" value="1">
            </div>
            <div class="botonquitar">
                <button class="boton-quitar" type="button"><b>X</button>
            </div>
        </div>`;
    carritoContenedor.innerHTML = carritoContenedorServicio;
    //append inserta el objeto <li> despues del ultimo hijo de <ul> 
    carritoContenedorLista.append(carritoContenedor);

    //Boton para quitar servicio de la lista
    carritoContenedor.querySelector('.boton-quitar').addEventListener('click', btnQuitar);

    actualtotalEnCarrito();
}

//Funcion para actualizar el valor Total
function actualtotalEnCarrito(){
    let total = 0;
    let totalEnCarrito = document.querySelector('#total-pagar');

    let servicioItems = document.querySelectorAll('.carrito-productos');
    //ForEach ejecuta la funcion por cada elemento en la lista
    servicioItems.forEach((servicioItems) => {
        //llamar al elemento de la lista para usar sus datos
        let servicioItemsPrice = servicioItems.querySelector('.servicio-price');
        //llamar a la info de precio y recibir un number con las clase Number, sin elementos string como el $
        let servicioPrice = Number(servicioItemsPrice.textContent.replace('$', ''));
        //llamar como variable el input de Unidades del articulo
        let numeroServiciosAgregadosElemento = servicioItems.querySelector('.cantidadServicios');
        //recibir el valor de la variable como numero
        let numeroServiciosAgregados = Number(numeroServiciosAgregadosElemento.value);

        //Operador del total
        total = total + servicioPrice * numeroServiciosAgregados;
    });
    //el llamado en total venga solo con dos decimales
    totalEnCarrito.innerHTML = `$ ${total.toFixed(0)}`;
}

//Funcion para el boton de eliminar articulo de la lista
function btnQuitar(event){
    let clickBoton = event.target;
    clickBoton.closest('.carrito-productos').remove();

    actualtotalEnCarrito();
}

//Funcion para el contador de articulos en el icono
