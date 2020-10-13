//****Carrito de Compras******//

/*Añadir al carrito*/

/*todos los botones de los servicios*/
let addBoton = document.querySelectorAll('.boton-agregar-servicio');
$(document).ready(function() {
    addBoton = $('.boton-agregar-servicio')
    addBoton.click(addService);
})


function addService() {
    let addBtn = $('.boton-agregar-servicio');
    for (let i=0; i < addBtn.length; i++) {
        addBtn[i].addEventListener('click', () => {
            cartNumber(servicios[i]);
            totalCost(servicios[i]);
        })
    }
}

function loadCartNumber() {
    let numberItems = localStorage.getItem('cartNumber');
    if(numberItems) {
        document.querySelector('#cantidad-articulos').textContent = numberItems;
    }
}

//Cantidad de servicios
function cartNumber(servicios) {
    let numberItems = localStorage.getItem('cartNumber');
    numberItems = parseInt(numberItems);//Cambiar de STRING a Number
    if (numberItems){
        localStorage.setItem('cartNumber', numberItems + 1);
        document.querySelector('#cantidad-articulos').textContent = numberItems + 1;
    } else {
        localStorage.setItem('cartNumber', 1);
        document.querySelector('#cantidad-articulos').textContent = 1;
    }

    setItems(servicios);
}

//Servicios en Localstorage
function setItems(servicios) {
    let cartItem = localStorage.getItem('itemsInCart');
    cartItem = JSON.parse(cartItem);
    
    if (cartItem != null) {

        if(cartItem[servicios.tag] == undefined) {
            cartItem = {
                ...cartItem,
                [servicios.tag]: servicios
            }
        }
        cartItem[servicios.tag].unidades += 1; 
    } else {
        servicios.unidades = 1;
        cartItem = {
            [servicios.tag]: servicios
        }
    }

    localStorage.setItem('itemsInCart', JSON.stringify(cartItem));
}

//Funcion para costo total en localstorage
function totalCost(serviciosClicked) {
    let cartCost = localStorage.getItem('totalCost');
    
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + serviciosClicked.priceUnit);
    } else {
        localStorage.setItem('totalCost', serviciosClicked.priceUnit);
    }
}
//Actualizar Total
function totalCostRefres() {
    let totalRefres = localStorage.getItem('totalCost');
    if (totalRefres) {
        document.querySelector('#total-pagar').textContent = totalRefres;
    }
}

function displayItem() {
    let cartItems = localStorage.getItem('itemsInCart');
    cartItems = JSON.parse(cartItems);
    let containerItems = document.querySelector('#carrito-lista');
    let totalContainer = document.querySelector('#total-pagar');
    let cartCost = localStorage.getItem('totalCost');

    if(cartItems && containerItems) {
        containerItems.innerHTML = '';
        Object.values(cartItems).map(item => {
            containerItems.innerHTML += `
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
        });

        totalContainer.textContent = `$` + cartCost + `,°°`;
        
    }
    deleteButton();
};



//Funcion para borrar los articulos en el DOM y en LocalStorage
function deleteButton(){
    let deleteButton = document.querySelectorAll('.boton-quitar');
    let serviceName ;
    let serviceAmount = localStorage.getItem('cartNumber');
    let serviceAdded = localStorage.getItem('itemsInCar');
    let cartTotal = localStorage.getItem('totalCost');
    
    serviceAdd = JSON.parse(cartNumber);
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i]. addEventListener('click', () => {
            serviceName = deleteButton[i].parentElement.textContent.trim();
            localStorage.setItem('serviceAdded', serviceAmount - serviceAdded[serviceName].unidades);
            localStorage.setItem('cartTotal', cartTotal - (serviceAdded[serviceName].priceUnit * serviceAdded[serviceName].unidades));
            
            delete serviceAdded[serviceName];
            localStorage.setItem('itemsInCar', JSON.stringify(cartNumber));

            location.reload()
        })
    }
}

//Llamando funcion actualizar contador
displayItem(); 
loadCartNumber();
totalCostRefres();