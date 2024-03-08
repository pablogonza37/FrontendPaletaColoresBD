import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MuestraColor from "./MuestraColor";

const ItemColores = ({ nombreColor, borrarColor }) => {

  return (
    <Card className="text-center shadow-lg mb-2">
      <Card.Header>{nombreColor}</Card.Header>
      <Card.Body className="d-flex justify-content-center">
        <MuestraColor fondo={nombreColor}></MuestraColor>
      </Card.Body>
      <Card.Footer className="text-muted ">
        <Button
          variant="danger"
          type="submit"
          onClick={() => borrarColor(nombreColor)}
        >
          Borrar
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ItemColores;
