import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MuestraColor from "./MuestraColor";

const ItemColores = ({ color }) => {
  return (
    <Card className="text-center shadow-lg mb-2">
      <Card.Header>
      <span><b>{color.nombreColor} </b></span>
      </Card.Header>
      <Card.Body className="d-flex justify-content-center flex-column">
        <div className="d-flex justify-content-center">
        <MuestraColor fondo={color.codHexadecimal} className='text-center'></MuestraColor>
        </div>
       <span><b>{color.codHexadecimal}</b></span>
       <span><b>R={color.rgb.r}, G={color.rgb.g}, B={color.rgb.b}</b></span>
      </Card.Body>
      <Card.Footer className="text-muted ">
        <Button
          variant="danger"
          type="submit"
        >
          Borrar
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ItemColores;
