import { clientServices } from "../services/api-services.js";
const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;
    clientServices.crearCliente(nombre,email)
    .then(() => {
        window.location.href = "../screens/registro_completado.html"
    })
    .catch(err => console.log(err))
})

