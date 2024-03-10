import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MuestraColor from "./MuestraColor";
import { borrarColorAPI, leerColoresAPI } from "../helpers/queries";
import Swal from "sweetalert2";

const ItemColores = ({ color, setColores }) => {

  const borrarColor = () => {
    Swal.fire({
      title: "¿Estas seguro de eliminar el color?",
      text: "No se puede revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarColorAPI(color.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Color eliminado",
            text: `El color fue eliminado correctamente`,
            icon: "success",
          });
          const listaProductos = await leerColoresAPI();
          setColores(listaProductos);
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `El color no fue eliminado. Intente realizar esta operación en unos minutos`,
            icon: "error",
          });
        }
      }
    });

  }
  return (
    <Card className="text-center shadow-lg mb-2">
      <Card.Header>
      <span><b>{color.nombreColor} </b></span>
      </Card.Header>
      <Card.Body className="d-flex justify-content-center flex-column">
        <div className="d-flex justify-content-center">
        <MuestraColor fondo={color.codHexadecimal} className='text-center'></MuestraColor>
        </div>
       <span><b>{color.codHexadecimal}</b></span>
       <span><b>R={color.rgb.r}, G={color.rgb.g}, B={color.rgb.b}</b></span>
      </Card.Body>
      <Card.Footer className="text-muted ">
        <Button
          variant="danger"
          onClick={borrarColor}
        >
          <i className="bi bi-trash3-fill"></i>
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ItemColores;
