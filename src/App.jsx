import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from 'react-bootstrap/Container';
import FormularioColor from "./components/FormularioColor";

function App() {
  return (
    <Container>
      <h1 className="display-3 text-center">Paleta de Colores</h1>
      <FormularioColor></FormularioColor>
    </Container>
  );
}

export default App;
