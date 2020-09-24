//... clase 8 - DOM
//... Carrito de Compras, agregando y eliminando items
let baseServicios = [
  {
    id: 1,
    nombre: 'Manual de Identidad',
    precio: '$9.990'
  },
]
let itemsCarrito = document.getElementById('itemsCarrito')

let item = document.createElement('li');
item.textContent = "Nuevo Servicio";
console.log(item);

function agregarItemBtn() {
  itemsCarrito.push(this.getAttribute('marcador'))
}



//... Primera Entrega
//...Esto es para el Login o Registro de nuevos usuarios.

let firstName = prompt('¿Cual es tu nombre?');
let lastName = prompt('¿Cual es tu apellido?');
let yourEmail = prompt('¿Cual es tu correo electronico?');

function UsuarioNuevo(firstName, lastName, yourEmail) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._yourEmail = yourEmail;

    this.welcomeUser = function(){
        return `{$'Bienvenido } {$this._firstName} {$this._lastName}`
    }
}

let loginUsario = new UsuarioNuevo(firstName, lastName, yourEmail);

//...Esto es para cambiar de tema Claro a Oscuro con el toggle en Header

const TOGGLE = 'toggleSwitchContainer';

const changeTheme = () => {


//...Esto es parte de los Servicios destacados, de ser selecionados agregarlos al carrito de compras.

function Servicio(nombre, descripcion, precio) {
  this._nombre = nombre;
  this._descriopcion = descripcion;
  this._precio = precio;  
  
  this.getPrice = function(){
    return this._precio;

  }  this.addCarrito = function(){
    //...Este codigo agregaria el producto seleccionado al carrito de compras, aun no lo aprendimos a hacer. 
  }
}

producto1 = new Servicio('Manual de Identidad','documento en el que se diseñan las líneas maestras de la imagen de una compañía, servicio, producto o institución.', 10000);
producto2 = new Servicio('Brochure','Pequeño libro o revista que contiene imágenes e información sobre un producto o servicio.', 10000);
producto3 = new Servicio('Post de Instagram', 'Imagen publicitaria para la red social Instagram', 10000);
producto4 = new Servicio('Sitio Web - Informativa', 'Sitio web para emprendimientos que continiene varias paginas informativas', 10000);

//... Alguna Function para descargar algun archivo desde la pagina.
