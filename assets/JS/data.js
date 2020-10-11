//Lista de servicios 
let listaServicios = document.querySelector('#servicesList');

let servicios = [
    {
        name: 'Manual de Identidad',
        priceUnit: 9990,
        description: 'Descripcion del servicio',
        img: './assets/img/products/revista.png',
        unidades: 0,
    },
    {
        name: 'Poster Digital',
        priceUnit: 16990,
        description: 'Descripcion del servicio',
        img: './assets/img/products/poster.png',
        unidades: 0,
    },
    {
        name: 'Sitio Web',
        priceUnit: 250990,
        description: 'Descripcion del servicio',
        img: './assets/img/products/web.png',
        unidades: 0,
    },
    {
        name: 'Menú de Servicios',
        priceUnit: 5960,
        description: 'Descripcion del servicio',
        img: './assets/img/products/menu.png',
        unidades: 0,
    },
    {
        name: 'Taza Personalizada',
        priceUnit: 5000,
        description: 'Descripcion del servicio',
        img: './assets/img/products/taza.png',
        unidades: 0,
    },
    {
        name: 'Pin Decorativo',
        priceUnit: 2500,
        description: 'Descripcion del servicio',
        img: './assets/img/products/pin.png',
        unidades: 0,
    },
    {
        name: 'Roller 85x200cm',
        priceUnit: 35000,
        description: 'Descripcion del servicio',
        img: './assets/img/products/roller01.png',
        unidades: 0,
    },
    {
        name: 'Roller 100x200cm',
        priceUnit: 45000,
        description: 'Descripcion del servicio',
        img: './assets/img/products/roller02.png',
        unidades: 0,
    }
];

servicios.forEach(servicioItems => {
    let itemLista = document.createElement('div');
    itemLista.setAttribute('class', 'articleContainer')
    itemLista.innerHTML = `
        <div class="servicio-img-contenedor">
            <img class="servicio-img" src="${servicioItems.img}" alt="Imagen del Articulo">
            <div class="servicio-img-description">${servicioItems.description}</div>
        </div>
        <div>
            <h3 class="servicio-title">${servicioItems.name}</h3>
            <h4 class="servicio-price">$${servicioItems.priceUnit}</h4>
            <button type="button" class="magnifyBorder boton-agregar-servicio">Agregar al carrito</button>
        </div>
    `
    ;
    listaServicios.appendChild(itemLista);
})
