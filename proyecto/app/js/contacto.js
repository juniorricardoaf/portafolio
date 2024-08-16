/*(function() {
    emailjs.init("YOUR_USER_ID"); 
})();
*/
document.addEventListener('DOMContentLoaded', function () {
    // Obtén el formulario y el botón de enviar
    const form = document.querySelector('form');
    const submitButton = form.querySelector('.submit-btn');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (form.checkValidity()) {
            enviarForm();
        } else {
            // Si no todos los campos están llenos, el navegador mostrará los mensajes de validación
            // Aquí puedes personalizar el comportamiento según tus necesidades
        }
    });
});


function enviarForm() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var numero = document.getElementById('numero').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;

    if (validarCorreo(email)) {
        // El correo es válido
        Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado!',
            text: 'Gracias por enviar tu mensaje.',
            confirmButtonText: 'Aceptar'
        }).then((result) => {
            if (result.isConfirmed) {
                setTimeout(function () {
                    location.reload();
                }, 1000);
            }
        });

        /*
        Hacer funcion de mandar un correo
        */
        /*
                emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
                .then(function(response) {
                    alert('Correo enviado exitosamente!');
                }, function(error) {
                    alert('Error al enviar el correo: ' + JSON.stringify(error));
                });
        */

    } else {
        // El correo no es válido, mostrar SweetAlert de "Intente de nuevo"
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, inténtelo de nuevo con un correo válido.',
            confirmButtonText: 'Cerrar'
        });
    }

}

// Función para validar correo electrónico
function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}
