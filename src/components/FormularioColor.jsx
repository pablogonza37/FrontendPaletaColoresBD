import { Button, Card, Form } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useState, useEffect } from "react";
import { agregarColoresAPI, leerColoresAPI } from "../helpers/queries";
import { useForm } from "react-hook-form";
import { encontrarNombreColor, hexRgb } from "../helpers/convertirColor";

const FormularioColor = () => {
  const [colores, setColores] = useState([]);
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
      const respuesta = await leerColoresAPI();
      setColores(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  const productoValidado = async (color) => {
    const hexa = color.codHexadecimal;
    const rgb = hexRgb(hexa);
    const nombreColor = encontrarNombreColor(rgb);
    color.rgb = rgb;
    color.nombreColor = nombreColor;
    const respuesta = await agregarColoresAPI(color);
    consultarAPI();
  };

  return (
    <section className="container ">
      <Form className="px-lg-5" onSubmit={handleSubmit(productoValidado)}>
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
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Card.Footer>
        </Card>
      </Form>
      <ListaColores colores={colores} setColores={setColores}></ListaColores>
    </section>
  );
};

export default FormularioColor;
