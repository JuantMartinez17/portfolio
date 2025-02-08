document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Formulario enviado!');
        alert('Gracias por tu mensaje. Me pondré en contacto contigo pronto.');
        form.reset();
    });
});