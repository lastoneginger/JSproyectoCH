//****Carrito de Compras******//

/*Añadir al carrito*/

/*todos los botones de los servicios*/
let addBoton = document.querySelectorAll('.boton-agregar-servicio');

for (let i=0; i < addBoton.length; i++) {
    addBoton[i].addEventListener('click', () => {
        cartNumber(servicios[i]);
        totalCost(servicios[i]);
    })
}

function loadCartNumber() {
    let numberItems = localStorage.getItem('cartNumber');
    if(numberItems) {
        document.querySelector('#cantidad-articulos').textContent = numberItems;
    }
}

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
                    <button data-id="${servicios.tag}" class="boton-quitar" type="button"><b>X</button>
                </div>
            </div>
            `;

            let removeItem = document.querySelectorAll('.boton-quitar')
            for (var i=0; i<removeItem.length; i++){
                let button = removeItem[i]
                button.addEventListener('click', removeItemCart);
            }
        });

        totalContainer.textContent = `$` + cartCost + `,°°`;
        upDateTotal();
    }
}

function upDateTotal() {
    let total = 0;
    let cartCost = localStorage.getItem('totalCost');
    cartCost = JSON.parse(cartCost);
    let cartItem = localStorage.getItem('itemsInCart')
    cartItems = JSON.parse(cartItems);

    cartItems.forEach((cartItem) => {
        let cartItemTotal = item.priceUnit;
        let cartItemPrice = cartItemTotal.textContent;
    });
}

//Funcion para remover el item del Dom
function removeItemCart(event) {
    let buttonClicked = event.target;
    buttonClicked.closest('.carrito-productos').remove();
}


//Llamando funcion actualizar contador 
loadCartNumber();
displayItem();