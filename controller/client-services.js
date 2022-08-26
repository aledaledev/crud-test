import { clientServices } from "../services/api-services.js";   //traemos el objeto que contiene al metodo
const crearNuevaLinea = (nombre, email) => {
    const linea = document.createElement("tr");
    const contenido = `
        <td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a
                        href="../screens/editar_cliente.html"
                        class="simple-button simple-button--edit"
                    >Editar</a
                    >
                </li>
                <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button">
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>`;
    linea.innerHTML = contenido;
    return linea
}
const table = document.querySelector('[data-table]');
clientServices.listaCLientes()     //dependiendo que de que nos de
.then(data => {     //si todo salio bien
    data.forEach(perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);    //contenido html
        table.appendChild(nuevaLinea);      //
    });
})
.catch(error => alert('hubo un error'))    //si existe algun error