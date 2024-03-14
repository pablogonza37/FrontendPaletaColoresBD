import { Button, Card, Form, Modal } from "react-bootstrap";
import MuestraColor from "./MuestraColor";
import {
  borrarColorAPI,
  editarColorAPI,
  leerColoresAPI,
} from "../helpers/queries";
import Swal from "sweetalert2";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { encontrarNombreColor, hexRgb } from "../helpers/convertirColor";

const ItemColores = ({ color, setColores }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
  };

  const abrirModal = () => {
    handleShow();
  };

  const editarColor = async (codHexadecimal) => {
    const hexa = codHexadecimal;
    const rgb = hexRgb(hexa.codHexadecimal);
    const nombreColor = encontrarNombreColor(rgb);
    codHexadecimal.rgb = rgb;
    codHexadecimal.nombreColor = nombreColor;
    editarColorAPI(codHexadecimal, color.id);
    const listaColores = await leerColoresAPI();
    setColores(listaColores);
    handleClose();
  };

  return (
    <>
      <Card className=" shadow-lg mb-2">
        <Card.Header>
          <span>
            <b>{color.nombreColor.toUpperCase()}</b>
          </span>
        </Card.Header>
        <Card.Body className="d-flex justify-content-center flex-column">
          <div className="d-flex justify-content-center">
            <MuestraColor
              fondo={color.codHexadecimal}
              className="text-center"
            ></MuestraColor>
          </div>
          <span className="lead">
            <hr />
            {color.codHexadecimal}
          </span>
          <span className="lead">
            R: {color.rgb.r}, G: {color.rgb.g}, B: {color.rgb.b}
          </span>
        </Card.Body>
        <Card.Footer className="text-muted ">
          <Button
            variant="warning"
            className="me-1"
            title="Editar"
            onClick={abrirModal}
          >
            <i className="bi bi-pencil-square"></i>
          </Button>
          <Button variant="danger" title="Borrar" onClick={borrarColor}>
            <i className="bi bi-trash3-fill"></i>
          </Button>
        </Card.Footer>
      </Card>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Form onSubmit={handleSubmit(editarColor)}>
          <Card className="text-center">
            <Card.Header className="display-6">Editar color</Card.Header>
            <Card.Body className="text-center d-flex justify-content-center flex-column">
              <Form.Label htmlFor="exampleColorInput">
                Seleccione un color:{" "}
              </Form.Label>
              <div className="d-flex justify-content-center">
                <Form.Control
                  type="color"
                  id="exampleColorInput"
                  className="inputColor"
                  defaultValue={color.codHexadecimal}
                  title="Choose your color"
                  {...register("codHexadecimal", {
                    required: "El campo es obligatorio",
                  })}
                />
              </div>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Button variant="primary" type="submit">
                Guardar
              </Button>
              <Button variant="danger" className='ms-2' onClick={handleClose}>
                Cancelar
              </Button>
            </Card.Footer>
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default ItemColores;
