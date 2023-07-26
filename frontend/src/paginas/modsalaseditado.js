import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Figure} from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavSc from '../componentes/navbar';
import Bootfooter from '../componentes/BSfooter';
import '../componentes/style.css';
import logo4 from '../logo4.png';
import salasService from '../services/salaService';


function Salasmodfic() {
  
  const { id } = useParams();
  const [sala, setFormData] = useState({});
  const history = useNavigate();
  
  useEffect(() => {
    async function fetchFormData () {
      
      try {
        console.log('id =' + id);
        const response = await salasService.getOnesalas(id);
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
            await salasService.postSalas(sala);
            alert('incluido com sucesso!'); 
          }
          else {
              await salasService.updtSalas(id, sala);
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
                    <Form.Label>Descrição:</Form.Label>
                      <Col sm={6}>
                        <Form.Control type="text" placeholder="" name='descricao' value={sala.descricao} onChange={handleChange}/>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="me-2" >
                    <Form.Label>Número da Sala:</Form.Label>
                      <Col sm={6}>
                        <Form.Control type="number" placeholder="" name='numero' value={sala.numero} onChange={handleChange}/>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="me-2" >
                    <Form.Label>Capacidade da Sala:</Form.Label>
                      <Col sm={6}>
                        <Form.Control type="number" placeholder="" name='capacidade' value={sala.capacidade} onChange={handleChange}/>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="me-2" >
                    <Form.Label>Valor da Sala:</Form.Label>
                      <Col sm={6}>
                        <Form.Control type="number" placeholder="" name='valor' value={sala.valor} onChange={handleChange}/>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="me-2" >
                    <Form.Label>Link da imagem da Sala:</Form.Label>
                      <Col sm={6}>
                        <Form.Control type="text" placeholder="" name='imgsala' value={sala.imgsala} onChange={handleChange}/>
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
                  <Button variant="warning" name='cancelar' size='lg' href='/salas'>
                    CANCELAR
                  </Button>
                </Form>
              </Col>
              <Col sm={2}>
                <Figure>
                  <Figure.Image
                    width={200}
                    height={800}
                    alt="img"
                    src={logo4}
                  />
                </Figure>
              </Col>
              <Col sm={5}>
                <Figure>
                  <Figure.Image rounded
                    width={500}
                    height={200}
                    alt="img"
                    src={sala.imgsala}
                  />
                </Figure>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      
      <Bootfooter/>

    </Container>
  );
}

export default Salasmodfic;