//Mensaje de confirmacion en Formulario

function getFormData() {
    const $nombre = $('input[name=nombre]');
    const nombreValor = $nombre.val();

    const $apellido = $('input[name=apellido]');
    const apellidoValor = $apellido.val();

    const $email = $('input[name=email]');
    const emailValor = $email.val();

    const formData = {
        nombre: nombreValor,
        apellido: apellidoValor,
        email: emailValor,
    }
    
    return formData;
}

function msjConfirm(){
    swal('Se ha enviado su confirmacion al correo');
}

//Formulario de NewsLetters con Jquery
$('document').ready(() => {
    const $btnSend = $('#btnSend');
    function msjConfirm() {
        swal('Se ha enviado su confirmacion al correo');
    }
    $btnSend.click(()=> {
        event.preventDefault();
        msjConfirm();
        const data = getFormData();
        console.log(data);
    })
    $("#formNews").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 2
            },
            apellido: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            nombre: {
                required: "Es necesario que escriba un nombre",
                minlength: "Su nombre debe tener al menos 2 caracteres"
            },
            apellido: {
                required: "Es necesario que escriba un apellido",
                minlength: "Su apellido debe tener al menos 2 caracteres"
            },
            email: {
                required: "Es necesario que escriba un email valido",
                email: "Introduzca una dirección de correo valida"
            },
        }
    });
})