const usuario = document.getElementById('username');
const password = document.getElementById('password')
const btn = document.getElementById('submit');

btn.addEventListener('click', () => {

            if (usuario.value === '') {
                usuario.setCustomValidity('Ingrese su dirección de correo electrónico')

            } else if (usuario.value.indexOf('@')===-1) {
                usuario.setCustomValidity('Debe contener un @')

            } else if (password.value === '') {
                password.setCustomValidity('Ingrese su contraseña')

            } else {
                usuario.setCustomValidity('');
                password.setCustomValidity('');

            }
        }
    )