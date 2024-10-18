const form = document.getElementById('register-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Las contraseñas no coinciden';
        return;
    }

    // Enviar la solicitud de registro al servidor
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre,
            apellido,
            email,
            password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            errorMessage.textContent = data.error;
        } else {
            // Registro exitoso, redirigir al usuario a la página de inicio
            window.location.href = '/';
        }
    })
    .catch(error => {
        errorMessage.textContent = 'Error al registrar el usuario';
    });
});