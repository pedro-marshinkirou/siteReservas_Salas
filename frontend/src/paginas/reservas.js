import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import NavSc from '../componentes/navbar';
import Bootfooter from '../componentes/BSfooter';
import logo5 from '../logo5.png';
import logo6 from '../logo6.png';
import reservasService from '../services/reservasService';
import '../componentes/style.css';

function Resaervas() {
  
  const [tableData, setTableData] = useState([]);
  
  useEffect(() => {
    async function fetchTableData () {
      try {
        const response = await reservasService.getReservas();
        setTableData(response.data);

      } catch (error) {
        console.error(error);
      }
  
    };
    fetchTableData();
  },[tableData]); 

  async function handlecancel(id) {
    var confirma = window.confirm('Deseja Cancelar?');
      if(confirma){
        try{
            await reservasService.deltReservas(id);
            alert('Cancelado com sucesso!');
            
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
            <Button variant="success" size='lg' type="submit" href='/resvSalas'>
              incluir
            </Button>
            <div className='tableContainer'>
              <Table striped bordered hover variant="light">
                <thead>
                  <tr>
                    <th>Numero</th>
                    <th>Sala</th>
                    <th>Cliente</th>
                    <th>CPF_CLIENTE</th>
                    <th>funcionario</th>
                    <th>NOME_FUNC</th>
                    <th>Data</th>
                    <th>Hora_INICIAL</th>
                    <th>Hora_FINAL</th>
                    <th>Valor</th>
                    <th>ValorTotal</th>
                    <th>Observacao</th>
                    <th>Status</th>
                    <th>Update</th>
                    <th>Cancel</th>
                  </tr>
                </thead>
                  <tbody>
                    {tableData.map((row, index) => {
                      return (
                        <tr key={index} data-toogle="tooltip" title={row.imgsala}>
                          <td>{row.numero}</td>
                          <td>{row.sala}</td>
                          <td>{row.cliente}</td>
                          <td>{row.cpf}</td>
                          <td>{row.funcionario}</td>
                          <td>{row.nomeFuncionario}</td>
                          <td>{row.data}</td>
                          <td>{row.inicio}</td>
                          <td>{row.fim}</td>
                          <td>{row.valor}</td>
                          <td>{row.valortotal}</td>
                          <td>{row.observacao}</td>
                          <td>{row.status}</td>
                          <td>
                            <a href={`/resvSalas/${row._id}`}>
                              <img src={logo5} alt='logo5'></img>
                            </a>
                          </td>
                          <td>
                            <Button variant='dark'>
                              <img src={logo6} alt='logo6' onClick={() => handlecancel(row._id)}></img>
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

export default Resaervas;