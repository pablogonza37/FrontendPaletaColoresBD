import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from 'react-bootstrap/Container';
import FormularioColor from "./components/FormularioColor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Container className=".mainPage">
      <h1 className="display-3 text-center my-3">Paleta de Colores</h1>
      <FormularioColor></FormularioColor>
    </Container>
    <Footer></Footer>
    </>
  );
}

export default App;
