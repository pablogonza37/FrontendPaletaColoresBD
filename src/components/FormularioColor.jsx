import { Button, Card, Form, Spinner } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useState, useEffect } from "react";
import { agregarColoresAPI, leerColoresAPI } from "../helpers/queries";
import { useForm } from "react-hook-form";
import { encontrarNombreColor, hexRgb } from "../helpers/convertirColor";

const FormularioColor = () => {
  const [colores, setColores] = useState([]);
  const [error, setError] = useState(null);
  const [spinner, setSpinner] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      setSpinner(true);
      const respuesta = await leerColoresAPI();
      setColores(respuesta.reverse());
      setError(null);
      setSpinner(false);
    } catch (error) {
      console.log(error);
      setError("Error al cargar los colores desde la API");
      setSpinner(false);
    }
  };

  const colorValidado = async (color) => {
    const hexa = color.codHexadecimal;
    const rgb = hexRgb(hexa);
    const nombreColor = encontrarNombreColor(rgb);
    color.rgb = rgb;
    color.nombreColor = nombreColor;
    const respuesta = await agregarColoresAPI(color);
    consultarAPI();
  };

  const mostrarComponente = spinner ? (
    <div className="my-4 text-center">
      <Spinner animation="border" variant="warning" />
    </div>
  ) : (
    <div>
      {!error && colores.length === 0 && (
        <div className="alert alert-info mt-3">No hay colores.</div>
      )}
      {colores.length > 0 && (
        <div>
          <ListaColores
            colores={colores}
            setColores={setColores}
          ></ListaColores>
        </div>
      )}
    </div>
  );

  return (
    <section className="container ">
      <Form className="px-lg-5 " onSubmit={handleSubmit(colorValidado)}>
        <Card className="text-center m-lg-5">
          <Card.Header className="display-6">Administrar colores</Card.Header>
          <Card.Body className="text-center d-flex justify-content-center flex-column">
            <Form.Label htmlFor="exampleColorInput">
              Seleccione un color:{" "}
            </Form.Label>
            <div className="d-flex justify-content-center">
              <Form.Control
                type="color"
                id="exampleColorInput"
                className="inputColor"
                defaultValue="#563d7c"
                title="Choose your color"
                {...register("codHexadecimal", {
                  required: "El campo es obligatorio",
                })}
              />
            </div>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Button variant="primary" type="submit" className="w-50">
              Agregar
            </Button>
          </Card.Footer>
        </Card>
      </Form>
      {error && <div className="alert alert-danger mt-3">{error}</div>}
      {mostrarComponente}
    </section>
  );
};

export default FormularioColor;
