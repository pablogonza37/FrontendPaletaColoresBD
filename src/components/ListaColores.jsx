import ItemColores from "./ItemColores";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ListaColores = ({ colores, setColores, hexRgb, encontarNombreColor }) => {

  return (
    <div className="my-3 text-center">
      <Row className="d-flex justify-content-center">
        {colores.map((color, posicionColor) => (
          <Col md={4} className="mb-2" key={posicionColor}>
            <ItemColores
              color={color} setColores={setColores} hexRgb={hexRgb} encontarNombreColor={encontarNombreColor}
            ></ItemColores>
          </Col>
        ))}
               ;
      </Row> 
    </div>
  );
};

export default ListaColores;
