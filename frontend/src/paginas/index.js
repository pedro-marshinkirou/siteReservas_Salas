import React from 'react';
import { MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavSc from '../componentes/navbar';
import Bootfooter from '../componentes/BSfooter';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../componentes/style.css';

function Cadger() {
    
  return (    

    <Container fluid>

      <NavSc/>
        <Card>
          <Card.Body>
            <Row sm={4}>
              <Col sm={4}>
                <MDBBtn outline color="dark" floating className='me-4 text-reset' href="/clientes" role='button'>
                  <MDBIcon className='fa-solid fa-greater-than' color='warning' fas icon='user-alt'/>
                </MDBBtn>
                <h3>Clientes</h3>
              </Col>
              <Col sm={4}>
                <MDBBtn outline color="dark" floating className='me-4 text-reset' href="../salas" role='button'>
                  <MDBIcon className='fa-solid fa-greater-than' color='warning' fas icon='hospital'/>
                </MDBBtn>
                <h3>Salas</h3>
              </Col>
            </Row>
            <Row sm={4}>
              <Col sm={4}>
                <MDBBtn outline color="dark" floating className='me-4 text-reset' href="../funcionarios" role='button'>
                  <MDBIcon className='fa-solid fa-greater-than' color='warning' fas icon="id-card-alt"/>
                </MDBBtn>
                <h3>Funcionários</h3>
              </Col>
              <Col sm={4}>
                <MDBBtn outline color="dark" floating className='me-4 text-reset' href="/reservas" role='button'>
                  <MDBIcon className='fa-solid fa-greater-than' color='warning' fas icon="database"/>
                </MDBBtn>
                <h3>T-Reservas</h3>
              </Col>
            </Row>
            <Row sm={4}>
              <Col sm={4}>
                <MDBBtn outline color="dark" floating className='me-4 text-reset' href="https://i.imgflip.com/7256p5.jpg" role='button'>
                  <MDBIcon className='fa-solid fa-greater-than' color='warning' fas icon="users-cog"/>
                </MDBBtn>
                <h3>Usuários</h3>
              </Col>
            </Row>
            <Button variant="warning" size='lg' type="submit" href='../'>
              VOLTAR
            </Button>
          </Card.Body>
        </Card>
      <Bootfooter/>

    </Container>
  );
}

export default Cadger;