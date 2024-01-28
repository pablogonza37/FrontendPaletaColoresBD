import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListaColores from "./ListaColores";
import { Col, Row, Form } from "react-bootstrap";
import { useState } from "react";


const FormularioColor = () => {
  const [color, setColor] = useState("");
  const [colores, setColores] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setColores([...colores, color]);
    setColor('');
  };

  const borrarColor = (nombreColor)=>{
    const ColoresFiltrados = colores.filter((color)=>color !== nombreColor); 
    setColores(ColoresFiltrados);
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Card className="text-center">
          <Card.Header>Administrar colores</Card.Header>
          <Card.Body className="d-flex justify-content-center">
            <Row className="w-100 p-3">
              <Col md={4} className="d-flex justify-content-center">
              <div className="muestraColor mx-3">
            
            </div>
              </Col>
              <Col md={8}>
                <Form.Group
                  className="my-4"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="text"
                    placeholder="Ingrese un color ej: blue"
                    minLength={3}
                    maxLength={10}
                    onChange={(e) => setColor(e.target.value)}
                    value={color}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Card.Footer>
        </Card>
      </Form>
      <ListaColores colores={colores} borrarColor={borrarColor}></ListaColores>
    </section>
  );
};

export default FormularioColor;
