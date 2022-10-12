const URL = process.env.REACT_APP_API_CAFECITO;
//peticion GET (para recibir informacion)
export const consultarAPI = async () => {
    try {
        const respuesta = await fetch(URL);
        const listaProductos = await respuesta.json();
        return listaProductos;
    } catch (error) {
        console.log(error);
        return false;
    }
};

//peticion POST (para agregar un producto al servidor)// en el login tambien se usa para enviar datos

//peticion PUT (para Editar)

//peticion DELETE (para borrar)
