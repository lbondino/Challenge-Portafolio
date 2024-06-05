// Obtener el formulario
var formulario = document.getElementById('miFormulario');

// Agregar un evento de escucha para el envío del formulario
formulario.addEventListener('submit', function(event) {
  // Obtener los valores de los campos del formulario
  var nombre = document.getElementById('nombre').value.trim();
  var email = document.getElementById('email').value.trim();
  var asunto = document.getElementById('asunto').value.trim();
  var mensaje = document.getElementById('mensaje').value.trim();

  // Validar el nombre (solo letras y espacios)
  if (!/^[a-zA-Z\s]+$/.test(nombre)) {
    alert('Por favor, ingresa un nombre válido (solo letras y espacios).');
    event.preventDefault(); // Evitar el envío del formulario
    return;
  }

  // Validar el correo electrónico
  if (!/\S+@\S+\.\S+/.test(email)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    event.preventDefault(); // Evitar el envío del formulario
    return;
  }

  // Validar el asunto
  if (!/^[a-zA-Z\s]+$/.test(asunto)) {
    alert('Por favor, ingresa un asunto válido (solo letras y espacios).');
    event.preventDefault(); // Evitar el envío del formulario
    return;
  }

  // Validar el mensaje (debe contener al menos 10 caracteres)
  if (mensaje.length < 10) {
    alert('Por favor, ingresa un mensaje con al menos 10 caracteres.');
    event.preventDefault(); // Evitar el envío del formulario
    return;
  }

  // Si la validación es exitosa, el formulario se enviará normalmente
});
