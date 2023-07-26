import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavSc from '../componentes/navbar';
import Bootfooter from '../componentes/BSfooter';
import '../componentes/style.css';
import funcionariosService from '../services/funcionarioService';


function Salasmodficfunc() {
  
  const { id } = useParams();
  const [sala, setFormData] = useState({});
  const history = useNavigate();
  
  useEffect(() => {
    async function fetchFormData () {
      try {
        console.log('id =' + id);
        const response = await funcionariosService.getOnefuncionarios(id);
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
            await funcionariosService.postFuncionarios(sala);
            alert('incluido com sucesso!'); 
          }
          else {
            await funcionariosService.updtFuncionarios(id, sala);
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
                    <Form.Label>CPF:</Form.Label>
                      <Col sm={6}>
                        <Form.Control type="number" placeholder="" name='cpf' value={sala.cpf} onChange={handleChange}/>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="me-2" >
                    <Form.Label>Nome:</Form.Label>
                      <Col sm={6}>
                        <Form.Control type="text" placeholder="" name='nome' value={sala.nome} onChange={handleChange}/>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="me-2" >
                    <Form.Label>Cep:</Form.Label>
                      <Col sm={6}>
                        <Form.Control type="number" placeholder="" name='cep' value={sala.cep} onChange={handleChange}/>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="me-2" >
                    <Form.Label>Email:</Form.Label>
                      <Col sm={6}>
                        <Form.Control type="text" placeholder="" name='email' value={sala.email} onChange={handleChange}/>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="me-2" >
                    <Form.Label>Telefone:</Form.Label>
                      <Col sm={6}>
                        <Form.Control type="number" placeholder="" name='telefone' value={sala.telefone} onChange={handleChange}/>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="me-2" >
                    <Form.Label>Função:</Form.Label>
                      <Col sm={6}>
                        <Form.Control type="text" placeholder="" name='funcao' value={sala.funcao} onChange={handleChange}/>
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
                  <Button variant="warning" name='cancelar' size='lg' href='/funcionarios'>
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

export default Salasmodficfunc;