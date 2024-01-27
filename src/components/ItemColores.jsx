import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MuestraColor from "./MuestraColor";

const ItemColores = () => {
  return (
    <Card className="text-center">
      <Card.Header>Nombre color</Card.Header>
      <Card.Body className="d-flex justify-content-center">
        <MuestraColor></MuestraColor>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Button variant="danger" type="submit">
          Borrar
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ItemColores;
