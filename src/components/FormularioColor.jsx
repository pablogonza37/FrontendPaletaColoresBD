import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import MuestraColor from "./MuestraColor";
import ListaColores from "./ListaColores";
import { Col, Row } from "react-bootstrap";

const FormularioColor = () => {
  return (
    <section>
      <Form>
        <Card className="text-center">
          <Card.Header>Administrar colores</Card.Header>
          <Card.Body className="d-flex justify-content-center">
            <Row className="w-100 p-3">
              <Col md={4} className="d-flex justify-content-center">
                <MuestraColor></MuestraColor>
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
      <ListaColores></ListaColores>
    </section>
  );
};

export default FormularioColor;
