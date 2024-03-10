import { Button, Card, Form } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useState, useEffect } from "react";
import { agregarColoresAPI, leerColoresAPI } from "../helpers/queries";
import { useForm } from "react-hook-form";
import colorName from "color-name";

const FormularioColor = () => {
  const [color, setColor] = useState("");
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
    const nombreColor = encontarNombreColor(rgb);
    color.rgb = rgb;
    color.nombreColor = nombreColor;
    const respuesta = await agregarColoresAPI(color);
    consultarAPI();
  };

  // Función para convertir un valor hexadecimal a RGB
  function hexRgb(hex) {
    hex = hex.replace(/^#/, "");
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return { r: r, g: g, b: b };
  }

  // Función para buscar el nombre del color basado en su valor RGB
  function encontarNombreColor(rgb) {
    for (const name in colorName) {
      if (colorName.hasOwnProperty(name)) {
        if (
          colorName[name][0] === rgb.r &&
          colorName[name][1] === rgb.g &&
          colorName[name][2] === rgb.b
        ) {
          return name;
        }
      }
    }
    return "Color desconocido";
  }

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
      <ListaColores colores={colores}></ListaColores>
    </section>
  );
};

export default FormularioColor;
