import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarProductoAPI, consultarAPI } from "../../helpers/queries";
const ItemProducto = ({ producto, setProductos }) => {
    //para desestructurar aun mas
    const { id, nombreProducto, precio, imagen, categoria } = { ...producto };

    const borrarProducto = () => {
        //tarea: agregar con sweat alert si esta seguro de eliminar el producto: si=>logica ya hecha no?=>nada

        borrarProductoAPI(id).then((respuesta) => {
            if (respuesta.status === 200) {
                Swal.fire("Producto Eliminado", "El producto se eliminó correctamente", "success");
                //busco todos los productos en ese instante de tiempo luego de borrado el producto y actualizo el state productos de administrador
                consultarAPI().then((response) => {
                    setProductos(response);
                });
            } else {
                Swal.fire("Ocurrio un error", "Intente esta operación en unos minutos", "error");
            }
        });
    };

    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{nombreProducto}</td>
                <td>${precio}</td>
                <td>{imagen}</td>
                <td>{categoria}</td>
                <td className="text-center">
                    <Link className="btn btn-outline-light me-1" to={`/administrar/editar/:id`}>
                        <i className="bi bi-arrow-clockwise text-warning"></i>
                    </Link>
                    <Button variant="outline-light" onClick={borrarProducto}>
                        <i className="bi bi-x-lg text-danger"></i>
                    </Button>
                </td>
            </tr>
        </>
    );
};

export default ItemProducto;
