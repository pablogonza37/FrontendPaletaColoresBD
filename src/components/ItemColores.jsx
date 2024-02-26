import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MuestraColor from "./MuestraColor";

const ItemColores = ({ nombreColor, borrarColor }) => {
  const mayusculaPrimerLetra = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Card className="text-center shadow-lg mb-2">
      <Card.Header>{mayusculaPrimerLetra(nombreColor)}</Card.Header>
      <Card.Body className="d-flex justify-content-center">
        <MuestraColor fondo={nombreColor}></MuestraColor>
      </Card.Body>
      <Card.Footer className="text-muted">
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
