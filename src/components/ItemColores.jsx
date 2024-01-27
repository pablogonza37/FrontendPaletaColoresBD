import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MuestraColor from "./MuestraColor";

const ItemColores = ({nombreColor}) => {
  return (
    <Card className="text-center">
      <Card.Header>{nombreColor}</Card.Header>
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
