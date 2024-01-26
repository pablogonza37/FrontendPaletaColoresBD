import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import MuestraColor from "./MuestraColor";

const FormularioColor = () => {
  return (
    <section>
      <Form>
        <Card className="text-center mx-5">
          <Card.Header>Featured</Card.Header>
          <Card.Body className="d-flex justify-content-evenly">
            <MuestraColor></MuestraColor>

            <Form.Group
              className="mb-3 my-5"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="text"
                placeholder="Ingrese un color ej: blue"
              />
            </Form.Group>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Card.Footer>
        </Card>
      </Form>
    </section>
  );
};

export default FormularioColor;
