// clase 8 y 9 - DOM
//****Carrito de Compras******//

//Variable para llamar del DOM los botones Agregar Servicio
let botonAgregarServicio = document.querySelectorAll('.boton-agregar-servicio');
    //For para pasar por todos los botones y ejecutar una funcion mediante eventlistener
for (let i = 0; i < botonAgregarServicio.length; i++) {
    botonAgregarServicio[i].addEventListener('click', () => {
        //llamando a la funcion
        contadorCarrito(servicios[i]);
        mirarServiciosEnLista(servicios[i]);
        totalCost(servicios[i])
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

//Funcion del valor Total
function totalCost(servicios) {
    //console.log ("the product price is", servicios.priceUnit);
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + servicios.priceUnit);
    } else {
        localStorage.setItem('totalCost', servicios.priceUnit)
    }
}
//Funcion para actualizar valor Total
/*function updateCost(servicios) {
    let cartCost = localStorage.getItem('totalCost');
    let quantity = document.querySelectorAll('.cantidadServicios');

}*/

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
                <img src="../${item.img}" width="140" height="140" alt="imagen producto">
                <div class="carrito-info-productos">
                    <h4>${item.name}</h4>
                    <h4 class="servicio-price">${item.unidades} x $ ${item.unidades * item.priceUnit},°°</h4>
                    <input class="cantidadServicios" type="number" value="1">
                </div>
                <div class="botonquitar">
                    <button class="boton-quitar" type="button"><b>X</button>
                </div>
            </div>
            `
        })
    }

    //Variable para llamar del DOM los botones Quitar Servicio
    let removeItem = document.querySelectorAll('.boton-quitar')
    for (var i=0; i<removeItem.length; i++){
        let button = removeItem[i]
        button.addEventListener('click', removeItemCart);
    }

    let cartCost = localStorage.getItem('totalCost');
    document.querySelector('#total-pagar').textContent = cartCost;

}

//Funcion removeItemCart
function removeItemCart(event) {
    let buttonClicked = event.target;
    buttonClicked.closest('.carrito-productos').remove();
    let servicioQuitar = localStorage.getItem('serviciosEnCarrito');
    removeService = parseInt(servicioQuitar);
    for (var i=0; i<removeService.length; i++){
        removeService.shift();
    }
    localStorage.setItem('serviciosEnCarrito')
    
    totalCost()
    contadorCarrito()
}

mirarServiciosEnLista();










/*let removeItem = document.querySelectorAll('.boton-quitar')
for (var i=0; i<removeItem.length; i++){
    let button = removeItem[i]
    button.addEventListener('click', function(){
        console.log('clicked')
    })
}*/

/*function upDateTotal(){
    let itemContainer = document.querySelectorAll('.carrito-productos')[0];
    let priceRow = itemContainer.querySelectorAll('carrito-info-productos')
    for (var i=0; i<priceRow.length; i++) {
        let priceRows = priceRow[i]
        let priceElement = priceRows.querySelectorAll('.servicio-price')[0]
        let quantityElement = priceRows.querySelectorAll('.cantidadServicios')[0]
        console.log(priceElement, quantityElement)
    }
}*/


/*function removeItemLocal(name) {
    let servicios = localStorage.getItem('serviciosEnCarrito');
    for (let i = 0; i < servicios.length; i += 1) {
        if (servicios[i].name ===name) {
            servicios.splice(i, 1)
            return
        }
    }
}*/


//Actualizar Total luego de modificar


//Remover articulo en carrito
/*function cartRemoveFun(event) {
    const buttonClicked = event.target;
    buttonClicked = localStorage.removeItem('serviciosEnCarrito')
    contadorCarrito(servicios[i]);
    totalCost(servicios[i]);
    mirarServiciosEnLista();
}

let removeItem = document.querySelectorAll('.boton-quitar')
for (var i=0; i<removeItem.length; i++){
    let button = removeItem[i]
    button.addEventListener('click', function(){
        console.log('clicked')
    })
}*/



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