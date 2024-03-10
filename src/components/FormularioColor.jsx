import {Button, Card, Form} from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useState, useEffect } from "react";

const FormularioColor = () => {
  const [color, setColor] = useState("");
  
  const [colores, setColores] = useState();

 

  useEffect(() => {
    
  }, []);

  

  return (
    <section className="container ">
      <Form className='px-lg-5'>
        <Card className="text-center m-lg-5">
          <Card.Header className='display-6'>Administrar colores</Card.Header>
          <Card.Body className="text-center d-flex justify-content-center flex-column">
            <Form.Label htmlFor="exampleColorInput">Seleccione un color: </Form.Label>
            <div className="d-flex justify-content-center">
            <Form.Control
              type="color"
              id="exampleColorInput"
              className="inputColor"
              defaultValue="#563d7c"
              title="Choose your color"
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
      <ListaColores></ListaColores>
    </section>
  );
};

export default FormularioColor;
