import { apiServices } from "../services/api-services.js";

const form = document.querySelector('[data-form]');
(async () => {
    const url = new URL(window.location);   //accede al objeto url de window
    const id = url.searchParams.get('id');
    if (id === null) {
        window.location.href = '../screens/error.html';     //si id no se encuentra
    }
    try {
        const perfil = await apiServices.detalleCliente('id');         //.then lo maneja adentro del await
        if (perfil.name && perfil.email) {
            const { nombre, email } = perfil;      //desestruturacion
            document.querySelector('[data-nombre]').value = nombre;      //espero a que me devuelva algo
            document.querySelector('[data-email]').value = email;
        } else {
            throw new Error();      //para que pase al catch
        }
    } catch (err) {
        console.log('hubo un error : ' + err);
        window.location.href = 'error.html'
    }

    /*apiServices.detalleCliente(id).then(({ nombre, email }) => {    //cuando este listo y como me devuelve un objeto
        document.querySelector('[data-nombre]').value = nombre;
        document.querySelector('[data-email]').value = email;
    }) */
})();   //IIFE asincrona!!!

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;
    const url = new URL(window.location);   //accede al objeto url de window
    const id = url.searchParams.get('id');
    await apiServices.actualizarCliente(nombre, email, id)        //no tenia catch
    window.location.href = 'edicion_concluida.html';
})