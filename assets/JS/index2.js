// clase 8 y 9 - DOM

//Toggle para cambiar de tema - Light/Dark Toggle theme
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

//****Carrito de Compras******//
//Variable para llamar del DOM los botones Agregar Servicio
let botonAgregarServicio = document.querySelectorAll('.boton-agregar-servicio');

//For para pasar por todos los botones y ejecutar una funcion mediante eventlistener
for (let i = 0; i < botonAgregarServicio.length; i++) {
    botonAgregarServicio[i].addEventListener('click', () => {
        //llamando a la funcion
        contadorCarrito(servicios[i]);
    })
}
//Funcion actualiza el contador de servicios en Carrito
function numeroServiciosLista(){
    let numeroDeServicios = localStorage.getItem('contadorCarrito');
    if (numeroDeServicios){
        document.querySelector('#cantidad-articulos').textContent = numeroDeServicios;
    }
    
}
numeroServiciosLista();
//Funcion contador de servicio en Carrito
function contadorCarrito(servicios) {
    
    let numeroDeServicios = localStorage.getItem('contadorCarrito');
    numeroDeServicios = parseInt(numeroDeServicios);   
    if (numeroDeServicios) {
        localStorage.setItem('contadorCarrito', numeroDeServicios + 1);
        document.querySelector('#cantidad-articulos').textContent = numeroDeServicios + 1;
    }   else {
        localStorage.setItem('contadorCarrito', 1);
        document.querySelector('#cantidad-articulos').textContent = 1;
    }
    mostrarServiciosEnLista(servicios);
}

function mostrarServiciosEnLista(servicios){
    let serviciosAgregados = localStorage.getItem('serviciosEnCarrito');
    serviciosAgregados = JSON.parse(serviciosAgregados);

    if(serviciosAgregados != null) {
        if (serviciosAgregados[servicios.name] == undefined){
            serviciosAgregados = {
                ...serviciosAgregados,
                [servicios.name]: servicios,
            }
        }
        serviciosAgregados[servicios.name].unidades += 1;
    } else {
        servicios.unidades = 1;
        serviciosAgregados = {
            [servicios.name]: servicios,
        }
    }

    localStorage.setItem('serviciosEnCarrito', JSON.stringify(serviciosAgregados));

}

//Funcion para mostrar los servicios en lista, sacados del LocalStorage
function mirarServiciosEnLista(){
    let mirarServicios = localStorage.getItem('serviciosEnCarrito');
    mirarServicios = JSON.parse(mirarServicios);
    let contenedorServicios = document.querySelector('#carrito-lista');
    if (mirarServicios && contenedorServicios){
        contenedorServicios.innerHTML = '';
        Object.values(mirarServicios).map(item => {
            contenedorServicios.innerHTML += `
            <div class="carrito-productos">
                <img src="${item.img}" width="50" height="50" alt="imagen producto">
                <div class="carrito-info-productos">
                    <h4>${item.name}</h4>
                    <h4 class="servicio-price">${item.unidades} x $ ${item.unidades * item.priceUnit},00</h4>
                    <input class="cantidadServicios" type="number" value="1">
                </div>
                <div class="botonquitar">
                    <button class="boton-quitar" type="button"><b>X</button>
                </div>
            </div>
            `
        })
    }
    
}

mirarServiciosEnLista();

//Funcion para actualizar el valor Total
function valorTotal() {
    let totalAPagar = 0;

}

//llamando a la funcion












//Boton de agregar el articulo al carrito - se ubica en cada pestaña del servicio
/*let carritoLista = document.querySelector('#items-carrito');
function agregarServicio(imagen, nombre, precio){
    //crear html a insertar en el DOM
    let producto = document.createElement('li');
    producto.innerHTML = `
    <div class="carrito-productos">
        <img src="http://lorempixel.com/50/50/${servicio-img}" alt="imagen producto">
        <div class="carrito-info-productos">
        <h4>${servicio-title}</h4>
        <h4>${servicio-price}</h4>
        </div>
        <div class="boton-quitar">
        <button id="boton-quitar"><b>X</button>
        </div>
    </div>
    `; 
    //agregar nuevo elemento al listado de productos en el carrito
    let carrito = carritoLista;
    carrito.appendChild(producto);

    agregarServicio();
}*/

// Formulario de datos usuario
//Boton formulario
/*let datosFormulario = [];

let botonRegistrar = document.querySelector('boton-formulario').addEventListener('event', reunirDatosForm);

//Funcion para el formulario
function reunirDatosForm(){
    let nombreUsuario = document.querySelector('nombre-usuario');
    let apellidoUsuario = document.querySelector('apellido-usuario');
    let emailUsuario = document.querySelector('email-usuario');

    reunirDatosForm =[nombreUsuario, apellidoUsuario, emailUsuario];
    reunirDatosForm = datosFormulario;
}

//Evento de Enter
function capturarEnter(e) {
    if (event.which == 13 || event.keyCode == 13) { 
        alert("Los datos ingresados son");        
    }
 }
 

//Botones quitar servicio de lista
let vaciarLista = document.getElementById('boton-quitar');
vaciarLista.addEventListener('click', function(){
    let carrito = document.querySelector('#items-carrito');
    let producto = carrito.lastElementChild;
    carrito.remove(producto);
})

//Contador de servicios agregados
let contador = 0;*/