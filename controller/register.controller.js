import { apiServices } from "../services/api-services.js";
const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (event)=>{        //cuando procese el form
    event.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;
    apiServices.crearCliente(nombre,email)       //crea peticion
    .then(() => {    
        window.location.href = "../screens/registro_completado.html"    //y cuando se concrete y todo salio bien se ejecutara el .then
    })
    .catch(err => console.log(err))
})

