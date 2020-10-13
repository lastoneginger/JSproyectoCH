//Lista de servicios 
let listaServicios = document.querySelector('#servicesList');

let servicios = [
    {   
        tag: 'manualdeidentidad',
        name: 'Manual de Identidad',
        priceUnit: 45,
        description: 'Descripcion del servicio',
        img: './assets/img/products/revista.png',
        unidades: 0,
    },
    {   
        tag:  'posterdigital', 
        name: 'Poster Digital',
        priceUnit: 15,
        description: 'Descripcion del servicio',
        img: './assets/img/products/poster.png',
        unidades: 0,
    },
    {
        tag: 'sitioweb',
        name: 'Sitio Web',
        priceUnit: 250,
        description: 'Descripcion del servicio',
        img: './assets/img/products/web.png',
        unidades: 0,
    },
    {
        tag: 'menudeservicio',
        name: 'Menú de Servicios',
        priceUnit: 40,
        description: 'Descripcion del servicio',
        img: './assets/img/products/menu.png',
        unidades: 0,
    },
    {
        tag: 'tazapersonalizada',
        name: 'Taza Personalizada',
        priceUnit: 5,
        description: 'Descripcion del servicio',
        img: './assets/img/products/taza.png',
        unidades: 0,
    },
    {
        tag: 'pindecorativa',
        name: 'Pin Decorativo',
        priceUnit: 2,
        description: 'Descripcion del servicio',
        img: './assets/img/products/pin.png',
        unidades: 0,
    },
    {
        tag: 'roller2',
        name: 'Roller 85x200cm',
        priceUnit: 35,
        description: 'Descripcion del servicio',
        img: './assets/img/products/roller01.png',
        unidades: 0,
    },
    {
        tag: 'roller1',
        name: 'Roller 100x200cm',
        priceUnit: 45,
        description: 'Descripcion del servicio',
        img: './assets/img/products/roller02.png',
        unidades: 0,
    }
];

$(document).ready(servicios.forEach(servicioItems => {
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
    listaServicios.append(itemLista);
}));
