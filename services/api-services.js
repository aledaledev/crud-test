/*
    CRUD    - metodos HTTP
    create  - POST
    read    - GET
    update  - PUT/PATCH
    delete  - DELETE
*/
const listaCLientes = () => fetch ("http://localhost:3000/perfil").then(response => response.json());    //abre una conexion y nos devuelve algo
//si pasaba que ingresabs a la pag sin ejecutar el servidor local nos mandaria algun error 
//creamos un servidor local con json-server
//usamos ajax para traer ese json del servidor
const crearCliente = (nombre,email) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {      //encabezados
            "content-type":"application/json",
        },
        body: JSON.stringify({nombre,email,id:uuid.v4()})    //cuerpo de la peticion (lo que va a mandar)
    })                                         //http solo lee texto      
}
const eliminarCliente = (id)=>{
    return fetch(`http://localhost:3000/perfil/${id}`,{     //selecciona aquel objeto con ese id y le manda una peticion de eliminar
        method:'DELETE',
    })
}
export const clientServices = {     //encapsula las funciones a exportar
    listaCLientes,
    crearCliente,
    eliminarCliente,
};
