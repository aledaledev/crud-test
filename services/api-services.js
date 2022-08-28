/*  CRUD    - metodos HTTP
    create  - POST          -> enviar información a procesar
    read    - GET           -> obtener datos de un recurso determinado  
    update  - PUT/PATCH     -> reemplaza todas las informaciones de un recurso en particular/actualiza parcialmente los datos de un producto
    delete  - DELETE        -> eliminar algún recurso           */

//El HTTP es el protocolo responsable de la comunicación de sitios en la web.
const listaCLientes = () => fetch("http://localhost:3000/perfil").then(response => response.json());    //abre una conexion (GET implicito) y nos devuelve algo, luego trabajo con lo que me da (response)

const crearCliente = (nombre, email) => {               //recibe parametros
    return fetch("http://localhost:3000/perfil", {      //abre una peticion
        method: "POST",                                 //actualizamos
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ nombre, email, id: uuid.v4() })    //cuerpo de la peticion (lo que va a subir al json) y http solo lee texto   
    })
}
const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {     //selecciona aquel objeto con ese id y le manda una peticion de eliminar
        method: 'DELETE',                                    //va eliminarlo de json de manera que automaticamente no se resiba mas sus datos para que no los muestre
    })
}
const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then(response => response.json());   //obtendra objeto de un cliente en especifico
}
const actualizarCliente = (nombre, email, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: 'PUT',                                    //editamos
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ nombre, email }),  //automaticamente se le asigna el valor que tienen como key
    })
        .then(response => response)
        .catch(err => console.log(err));
}
export const apiServices = {     //encapsula las funciones a exportar
    listaCLientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
};

//creamos un servidor local con json-server y usamos ajax para traer ese json del servidor
//export e inport
//return fetch(url,{method,headers,body})
//response => response.json()
//uuid.v4()
//JSON.parse() y JSON.Stringify({})
