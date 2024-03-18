import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Nav = () => {
    return (
        <Navbar expand="lg" className="bg-dark shadow fixed-top">
        <Container>
          <Navbar.Brand href="#" className='text-white'><i className="bi bi-palette me-2"></i>Paleta de colores</Navbar.Brand>
        </Container>
      </Navbar>
    );
};

export default Nav;