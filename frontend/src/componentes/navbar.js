import Container from 'react-bootstrap/Container';
import { MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import {Form, Button} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.png';

function NavSc() {
  return (
    <Navbar bg="light" expand="lg" className="shadow bg-light border-primary text-center">
      <Container fluid>
        <a className="navbar-brand" href='/'>
            <img src={logo} alt="logo"/>
        </a>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll> 
              <Nav.Link href="../">
                Menu
              </Nav.Link>
              <Nav.Link href="#">
                Contate-nos
              </Nav.Link>
              <Nav.Link href="#">
                Sobre nós
              </Nav.Link>
              <Nav.Link href="#">
                Intranet
              </Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="../funcionarios">
                    Funcionarios
                  </NavDropdown.Item>
                  <NavDropdown.Item href="../clientes">
                    Clientes
                  </NavDropdown.Item>
                    <NavDropdown.Divider />
                      <NavDropdown.Item href="../salas">
                        Salas
                      </NavDropdown.Item>
                      <NavDropdown.Item href="../reservas">
                        Reservas
                      </NavDropdown.Item>
                </NavDropdown>
                <Form className="d-flex">
                  <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                    <Button variant="outline-success">
                      Search
                    </Button>
                </Form>
            </Nav>
          </Navbar.Collapse>
            <MDBBtn outline color="dark" floating className='me-4 text-reset' href="../index" role='button'>
              <MDBIcon className='fa-solid fa-greater-than' color='warning' fas icon='rss'/>
            </MDBBtn>
      </Container>
    </Navbar>
  );
}

export default NavSc;