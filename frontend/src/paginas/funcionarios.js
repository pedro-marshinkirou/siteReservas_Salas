import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Card } from 'react-bootstrap';
import NavSc from '../componentes/navbar';
import Bootfooter from '../componentes/BSfooter';
import logo5 from '../logo5.png';
import logo6 from '../logo6.png';
import funcionariosService from '../services/funcionarioService';
import '../componentes/style.css';


function Funcionarios() {
  
  const [tableData, setTableData] = useState([]);

    useEffect(() => {
      async function fetchTableData () {
      
        try {
          const response = await funcionariosService.getFuncionarios();
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
              await funcionariosService.deltFuncionarios(id);
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
          <Button variant="danger" size='lg' href='../controlefunc/inserir'>
              controle
            </Button>
            <Button variant="success" size='lg' href='../funcsalas'>
              incluir
            </Button>
            <div className='tableContainer'>
              <Table striped bordered hover variant="light">
                <thead>
                  <tr>
                    <th>CPF</th>
                    <th>Nome</th>
                    <th>Cep</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Funcao</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                  <tbody>
                    {tableData.map((row, index) => {
                        return (
                          <tr key={index} data-toogle="tooltip" title={row.cep}>
                            <td>{row.cpf}</td>
                            <td>{row.nome}</td>
                            <td>{row.cep}</td>
                            <td>{row.email}</td>
                            <td>{row.telefone}</td>
                            <td>{row.funcao}</td>
                            <td>
                              <a href={`/funcsalas/${row._id}`}>
                              <img src={logo5} alt='logo5'></img>
                              </a>
                            </td>
                            <td>
                              <Button variant='dark'>
                                <img src={logo6} alt='logo6' onClick={() => handleDelete(row._id)} ></img>
                              </Button>
                            </td>
                          </tr>
                        );
                    })}
                  </tbody>
              </Table>
              </div>
            <Button variant="dark" size='lg' href='../index'>
              Retornar
            </Button>
          </Row>
        </Card.Body>
      </Card>       
      
      <Bootfooter/>

    </Container>
  );
}

export default Funcionarios;