import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavSc from '../componentes/navbar';
import Bootfooter from '../componentes/BSfooter';
import '../componentes/style.css';
import reservasService from '../services/reservasService';


function SalasmodficRSVS() {
  
  const { id } = useParams();
  const [sala, setFormData] = useState({});
  const history = useNavigate();
  
  useEffect(() => {
    async function fetchFormData () { 
      try {
        console.log('id =' + id);
        const response = await reservasService.getOneReservas(id);
        setFormData(response.data);
        console.log('response ' + response.data);      
      } catch (error) {
        console.error(error);
      }
    };
    fetchFormData();
  },[id]); 

  const handleSubmit = async (event) => {
    event.preventDefault();
      try {
        if (event.nativeEvent.submitter.name === "salvar") {
          console.log(typeof id);
          alert(id);
          if ( typeof id === 'undefined') {
              await reservasService.postReservas(sala);
              alert('incluido com sucesso!'); 
          }
          else {
              await reservasService.updtReservas(id, sala);
              alert('alterado com sucesso!');
          }
        }

      } catch (error) {
        console.error(error);
      }

      history(-1);
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
  setFormData({...sala, [name]: value});
  };

  return (    

    <Container fluid>

      <NavSc/>
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <Form onSubmit={handleSubmit}>
                  <Form.Group as={Row} className="me-2" >
                    <Form.Label>Numero:</Form.Label>
                      <Col sm={6}>
                        <Form.Control type="number" placeholder="" name='numero' value={sala.numero} onChange={handleChange}/>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="me-2" >
                    <Form.Label>Sala:</Form.Label>
                      <Col sm={6}>
                        <Form.Control type="text" placeholder="" name='sala' value={sala.sala} onChange={handleChange}/>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="me-2" >
                    <Form.Label>Funcionario:</Form.Label>
                      <Col sm={6}>
                        <Form.Control type="text" placeholder="" name='funcionario' value={sala.funcionario} onChange={handleChange}/>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="me-2" >
                    <Form.Label>Cliente:</Form.Label>
                      <Col sm={6}>
                        <Form.Control type="text" placeholder="" name='cliente' value={sala.cliente} onChange={handleChange}/>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="me-2" >
                    <Form.Label>Data:</Form.Label>
                      <Col sm={6}>
                        <Form.Control type="date" placeholder="" name='data' value={sala.data} onChange={handleChange}/>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="me-2" >
                    <Form.Label>Inicio:</Form.Label>
                      <Col sm={6}>
                        <Form.Control type="number" placeholder="" name='inicio' value={sala.inicio} onChange={handleChange}/>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="me-2" >
                    <Form.Label>Fim:</Form.Label>
                      <Col sm={6}>
                        <Form.Control type="number" placeholder="" name='fim' value={sala.fim} onChange={handleChange}/>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="me-2" >
                    <Form.Label>Valor Total:</Form.Label>
                      <Col sm={6}>
                        <Form.Control type="number" placeholder="" name='valortotal' value={sala.valortotal} onChange={handleChange}/>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="me-2" >
                    <Form.Label>Observação:</Form.Label>
                      <Col sm={6}>
                        <Form.Control type="text" placeholder="" name='observacao' value={sala.observacao} onChange={handleChange}/>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="me-2" >
                    <Form.Label>Status:</Form.Label>
                      <Col sm={6}>
                        <Form.Control type="text" placeholder="" name='status' value={sala.status} onChange={handleChange}/>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="me-2" >
                      <Col sm={6}>
                        <Form.Check type="checkbox" label="Check me out" />
                      </Col>
                  </Form.Group>
                  <Button variant="dark" name='salvar' size='lg' type="submit">
                    SALVAR
                  </Button>
                  <Button variant="warning" name='cancelar' size='lg' href='/reservas'>
                    CANCELAR
                  </Button>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      <Bootfooter/>

    </Container>
  );
}

export default SalasmodficRSVS;