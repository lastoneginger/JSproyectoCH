function borrarServiciosEnLista(servicios){
    let serviciosAgregados = localStorage.getItem('serviciosEnCarrito');
    serviciosAgregados = JSON.parse(serviciosAgregados);
    serviciosAgregados.shift(servicios.name)
    localStorage.setItem('serviciosEnCarrito', JSON.stringify(serviciosAgregados));
}
