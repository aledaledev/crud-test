import { apiServices } from "../services/api-services.js";

const form = document.querySelector('[data-form]');
(() =>{
    const url = new URL(window.location);   //accede al objeto url de window
    const id = url.searchParams.get('id');
    if (id === null) {
        window.location.href = '../screens/error.html';     //si id no se encuentra
    }
    apiServices.detalleCliente(id).then(({ nombre, email }) => {    //cuando este listo y como me devuelve un objeto
        document.querySelector('[data-nombre]').value = nombre;
        document.querySelector('[data-email]').value = email;
    })
})();   //IIFE

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;
    const url = new URL(window.location);   //accede al objeto url de window
    const id = url.searchParams.get('id');
    apiServices.actualizarCliente(nombre,email,id)
    .then(()=>{
        window.location.href='edicion_concluida.html';
    })
})