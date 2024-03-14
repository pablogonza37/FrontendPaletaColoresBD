import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import FormularioColor from "./components/FormularioColor";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav></Nav>
      <Container className="mainPage mt-5">
        <h1 className="display-3 text-center my-3 text-white">
          Paleta de Colores
        </h1>
        <FormularioColor></FormularioColor>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
