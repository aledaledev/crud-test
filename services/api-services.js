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
export const clientServices = {
    listaCLientes,
};
