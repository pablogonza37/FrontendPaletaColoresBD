import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListaColores from "./ListaColores";
import { Col, Row, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const FormularioColor = () => {
  const [color, setColor] = useState("");
  const coloresLocalStorage =
    JSON.parse(localStorage.getItem("coloresKey")) || [];
  const [colores, setColores] = useState(coloresLocalStorage);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!error && color) {
      setColores([...colores, color]);
      setColor("");
    } else {
      alert("Color inválido");
    }
  };

  const borrarColor = (nombreColor) => {
    const indiceColor = colores.findIndex((color) => color === nombreColor);
    if (indiceColor !== -1) {
      const nuevosColores = [
        ...colores.slice(0, indiceColor),
        ...colores.slice(indiceColor + 1),
      ];
      setColores(nuevosColores);
    }
  };

  useEffect(() => {
    localStorage.setItem("coloresKey", JSON.stringify(colores));
  }, [colores]);

  const [error, setError] = useState("");

  return (
    <section className="container ">
      <Form onSubmit={handleSubmit} className='px-lg-5'>
        <Card className="text-center m-lg-5">
          <Card.Header className='display-6'>Administrar colores</Card.Header>
          <Card.Body className="text-center d-flex justify-content-center flex-column">
            <Form.Label htmlFor="exampleColorInput">Elija un color: </Form.Label>
            <div className="d-flex justify-content-center">
            <Form.Control
              type="color"
              id="exampleColorInput"
              className="inputColor"
              defaultValue="#563d7c"
              title="Choose your color"
              onChange={(e) => {
                setColor(e.target.value);
              
              }}
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
      <hr />
      <ListaColores colores={colores} borrarColor={borrarColor}></ListaColores>
    </section>
  );
};

export default FormularioColor;
