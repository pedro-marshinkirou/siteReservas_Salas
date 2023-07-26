import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './style.css';
import salasService from '../services/salaService';

function Carrocell() {  

    const [tableData, setTableData] = useState([]);
  
    useEffect(() => {
        async function fetchTableData () {
        
        try {
        
          const dados = await salasService.getSalas();
          setTableData(dados.data);
        } catch (error) {
          console.error(error);
        }
    
        };
        fetchTableData();
    },[]); 
  
  return (

    <Container fluid>

      <Row>
        <Col xs={12}>
        </Col>
      </Row>
      <Row>
        <Card as='div'>            
          <Card.Body>
            <Card.Text as='div'>
              <Carousel>        
                {tableData.map((item, index) => (
                  <Carousel.Item key={item._id}>
                    <Link to={`/salas/${item._id}`}>
                      <img className='wow' key={index} src={item.imgsala} alt="" />
                        {item.id}
                    </Link> 
                    <Carousel.Caption>
                      <h3>{item.descricao}</h3>
                      <p>N°:{item.numero}</p>
                        <Button variant="dark" size='lg' href='/reservasu/inserir'>
                          RESERVE AGORA!
                        </Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>      
            </Card.Text>          
          </Card.Body>
        </Card>
      </Row>

    </Container>

  );
}

export default Carrocell;