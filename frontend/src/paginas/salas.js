import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavSc from '../componentes/navbar';
import Table from 'react-bootstrap/Table';
import Bootfooter from '../componentes/BSfooter';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import logo5 from '../logo5.png';
import logo6 from '../logo6.png';
import salasService from '../services/salaService';
import '../componentes/style.css';

function Salas() {
  
  const [tableData, setTableData] = useState([]);
  
  useEffect(() => {
    async function fetchTableData () {
      try {
        const response = await salasService.getSalas();
        setTableData(response.data);

      } catch (error) {
        console.error(error);
      }
    };
    fetchTableData();
  },[tableData]); 

  async function handleDelete(id) {
    var confirma = window.confirm('Confere?');
      if(confirma){
        try{
            await salasService.deltSalas(id);
            alert('deletado com sucesso!');

        } catch (error){
          console.error(error);
        }
      }
  }
  
  return (    

    <Container fluid>
      <Row>
        <Col xs={12}>
          <NavSc/>
        </Col>
      </Row>
      <Card>
        <Card.Body>
          <Row>
            <Button variant="success" size='lg' type="submit" href='/assalas'>
              incluir
            </Button>
            <div className='tableContainer'>
              <Table striped bordered hover variant="light">
                <thead>
                  <tr>
                    <th>imgLink</th>
                    <th>Numero</th>
                    <th>Capacidade</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => {
                    return (
                      <tr key={index} data-toogle="tooltip" title={row.imgsala}>
                        <td>{row.imgsala}</td>
                        <td>{row.numero}</td>
                        <td>{row.capacidade}</td>
                        <td>{row.descricao}</td>
                        <td>{row.valor}</td>
                        <td>
                          <a href={`/assalas/${row._id}`}>
                            <img src={logo5} alt='logo5'></img>
                          </a>
                        </td>
                        <td>
                          <Button variant='dark'>
                            <img src={logo6} alt='logo6' onClick={() => handleDelete(row._id)}></img>
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              </div>
            <Button variant="dark" size='lg' href='/index'>
              Retornar
            </Button>
          </Row>
        </Card.Body>
      </Card>
    <Bootfooter/>

    </Container>
  );
}

export default Salas;