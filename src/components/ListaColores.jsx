import ItemColores from "./ItemColores";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ListaColores = () => {
    return (
        <div className='my-5 text-center'>
        <Row className="d-flex justify-content-center">
        <Col md={4} className="mb-2"><ItemColores></ItemColores></Col>
      </Row>
        </div>
    );
};

export default ListaColores;