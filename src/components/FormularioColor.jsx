import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListaColores from "./ListaColores";
import { Col, Row, Form } from "react-bootstrap";
import { useState, useEffect } from "react";


const FormularioColor = () => {
  const [color, setColor] = useState("");
  const coloresLocalStorage = JSON.parse(localStorage.getItem('coloresKey')) || [] 
  const [colores, setColores] = useState(coloresLocalStorage);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!error && color) {
      setColores([...colores, color]);
    setColor('');
    } else {
      alert('Color inválido');
    }
    
  };

  const borrarColor = (nombreColor) => {
    const indiceColor = colores.findIndex(color => color === nombreColor);
    if (indiceColor !== -1) {
        const nuevosColores = [...colores.slice(0, indiceColor), ...colores.slice(indiceColor + 1)];
        setColores(nuevosColores);
    }
}

  useEffect(()=>{
    localStorage.setItem('coloresKey', JSON.stringify(colores))
  },[colores])

 
    const [error, setError] = useState('');
  
    const handleInputChange = (e) => {
      const inputValue = e.target.value.toLowerCase(); 
      const colorRegex = /^(red|green|blue|yellow|orange|purple|pink|cyan|magenta)$/i;
  
      setColor(inputValue);
  
      if (!colorRegex.test(inputValue)) {
        setError('Ingrese un nombre de color válido');
      } else {
        setError('');
      }
    };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Card className="text-center">
          <Card.Header>Administrar colores</Card.Header>
          <Card.Body className="d-flex justify-content-center">
            <Row className="w-100 p-3">
              <Col md={4} className="d-flex justify-content-center">
              <div className="muestraColor mx-3">
            
            </div>
              </Col>
              <Col md={8}>
                <Form.Group
                  className="my-4"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="text"
                    placeholder="Ingrese un color ej: red"
                    minLength={3}
                    maxLength={10}
                    onChange={(e) => {
                      setColor(e.target.value);
                      handleInputChange(e);
                    }}
                    value={color}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Card.Footer>
        </Card>
      </Form>
      <ListaColores colores={colores} borrarColor={borrarColor}></ListaColores>
    </section>
  );
};

export default FormularioColor;
