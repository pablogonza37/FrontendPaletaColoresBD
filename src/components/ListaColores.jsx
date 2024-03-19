import ItemColores from "./ItemColores";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ListaColores = ({
  colores,
  setColores,
  encontrarNombreColor,
  hexRgb,
}) => {
  return (
    <div className="mt-5 text-center">
      <Row className="d-flex justify-content-center">
        {colores.map((color, posicionColor) => (
          <Col md={4} className="mb-2" key={posicionColor}>
            <ItemColores
              color={color}
              setColores={setColores}
              hexRgb={hexRgb}
              encontrarNombreColor={encontrarNombreColor}
            ></ItemColores>
          </Col>
        ))}
        ;
      </Row>
    </div>
  );
};

export default ListaColores;
