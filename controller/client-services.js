import { apiServices } from "../services/api-services.js";   //traemos el objeto que contiene al metodo
const crearNuevaLinea = (nombre, email, id) => {
    const linea = document.createElement("tr");
    const contenido = `
        <td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a
                        href="../screens/editar_cliente.html?id=${id}"
                        class="simple-button simple-button--edit"
                    >Editar</a
                    >
                </li>
                <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button"
                        id=${id}> 
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>`;
    linea.innerHTML = contenido;
    const btn = linea.querySelector('button');
    btn.addEventListener('click', async () => {
        const id = btn.id;
        try {
            await apiServices.eliminarCliente(id)
            //console.log(response)  si todo salio bien (no pasa nada pero es una buena practica)
        } catch (err) { err => alert(err) }
    })
    return linea
}

(async () => {
    const table = document.querySelector('[data-table]');
    try {
        const getClients = await apiServices.listaCLientes();
        getClients.forEach(({ nombre, email, id }) => {                  //desestructuracion
            const nuevaLinea = crearNuevaLinea(nombre, email, id);
            table.appendChild(nuevaLinea);
        });
    } catch {() => alert('hubo un error')}
})();

/*apiServices      //se ejecuta en todo momento
    .listaCLientes()     //dependiendo que de que nos de
    .then(data => {     //si todo salio bien
        data.forEach(({ nombre, email, id }) => {   //desestructuracion
            const nuevaLinea = crearNuevaLinea(nombre, email, id);    //contenido html
            table.appendChild(nuevaLinea);
        });
    })
    .catch(err => alert('hubo un error'))    //si existe algun error */

//insertar parametro id en el url (html)
//insertar id al boton (html)
//desestructuracion