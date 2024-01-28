import ItemColores from "./ItemColores";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ListaColores = ({colores, borrarColor}) => {
    return (
        <div className='my-5 text-center'>
        <Row className="d-flex justify-content-center">
          {
             colores.map((color, posicionColor)=><Col md={4} className="mb-2" key={posicionColor}
             ><ItemColores nombreColor={color} borrarColor={borrarColor}></ItemColores>
             </Col>)
          };
       
        
      </Row>
        </div>
    );
};

export default ListaColores;