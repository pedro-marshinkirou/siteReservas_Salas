import React, { useState, useEffect } from 'react';
import { Container, Row, Form, Col, Card, Button, Table } from 'react-bootstrap';
import { useParams, useNavigate, } from "react-router-dom";
import NavSc from '../componentes/navbar';
import Bootfooter from '../componentes/BSfooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import reservasService from '../services/reservasService';
import ComboSalasion from '../componentes/combosalasNOVO';
import clientesService from '../services/clienteService';
import funcionariosService from '../services/funcionarioService';
import '../componentes/style.css';

function Controleresaervas() {
  
  const [tableData, setTableData] = useState([]);
  const { id } = useParams();
  const [reserva, setFormData] = useState({});
  const [selectedValue, setSelectedValue] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [nomeCliente, setNomeCliente] = useState([]);
  const [cpfCliente, setcpfCliente] = useState([]);

  const history = useNavigate();
  
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

    async function fetchFormData () {
      try {
        if (id !== 'inserir') {
        const response = await reservasService.getOneReservas(id);
        setFormData(response.data);
        }

      } catch (error) {
        console.error(error);
      }
  
    };
    fetchFormData();
  },[tableData], [id]); 

  const handleSubmit = async (event, req, res) => {
    event.preventDefault();
      try {
        if (event.nativeEvent.submitter.name === "salvar") {
          reserva.funcionario = 'WEB - Internet';
          reserva.cliente = 'Internet - WWW';
          reserva.valortotal = await reservasService.calculaValorReservas(reserva.sala, reserva.inicio, reserva.fim);
          reserva.status = 'R';
          //reserva.cpf = this.clienteButton(reserva.cpf);
          alert(id);
          if ( id === 'inserir') {
            await reservasService.postReservas(reserva);
            alert('incluido com sucesso!');
          }
          else {
              await reservasService.updtReservas(id,reserva);
              alert('alterado com sucesso!');  
          }
        }

        if (event.nativeEvent.submitter.name === "cancelarReserva") {
          if ( id === 'inserir') {
            setButtonDisabled(true);
            alert('não autorizado!');
          }
          else {
              setButtonDisabled(false);
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
        }

        if (event.nativeEvent.submitter.name === "encontrar") {
          console.log('suzy');
          var found = await clientesService.getClienteCPF(reserva.cpf);
          if((found.data.length) == 1){
            console.log(found);
            alert('usuário já cadastrado!');
            reserva.cpf = found.data[0].cpf;
            console.log(reserva.cpf);
            console.log(typeof reserva.cpf);
          }
          else {
            alert('usuário não encontrado!');
            var confirma = window.confirm('Deseja se Cadastrar?');
              if(confirma){
                try{
                    history('/clisalas');
                } catch (error){
                  console.error(error);
                }
              }
          }
        }

        if (event.nativeEvent.submitter.name === "encontrarFunc") {
          console.log('suzie');
          var found = await funcionariosService.getFuncCPF(reserva.nomeFuncionario);
          if((found.data.length) == 1){
            console.log(found);
            alert('funcionario já cadastrado!');
            reserva.nomeFuncionario = found.data[0].nome;
            console.log(reserva.nomeFuncionario);
            console.log(typeof reserva.nomeFuncionario);
          }
          else {
            alert('funcionario não encontrado!');
            var confirma = window.confirm('Deseja se Cadastrar?');
              if(confirma){
                try{
                    history('/funcsalas');
                } catch (error){
                  console.error(error);
                }
              }
          }
        }

      } catch (error) {
        console.error(error);
        
      }
    //history(-1);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...reserva, [name]: value });
  }; 

  const handleSelectChange = (value) => {
    setSelectedValue(value);      
    reserva.sala = value;
  };   
  
  const clienteButton = async () => {
    const cpfBanco = await clientesService.getClienteCPF(cpfCliente);
    console.log(cpfBanco);
    setNomeCliente(cpfBanco.nome);
  };   

  const handleCPFChange = (event) => {
    setcpfCliente(event.target.value);
  };
  
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
            <Col sm={4}>
            <Form onSubmit={handleSubmit}>        
                <Form.Label>Valor select</Form.Label>
                  <Form.Control name='sala' type="text" value={selectedValue} readOnly />
                    <ComboSalasion onSelectChange={handleSelectChange} />
                    <Form.Label>CPF:</Form.Label>    
                      <Form.Control type="number" name='cpf' value={reserva.cpf} aria-label="Search" onChange={handleChange}/>
                          <Col>
                          <Button variant="dark" type='submit' name="encontrar" >
                            Search
                          </Button>
                          <Button variant="dark" href='/cadcliente/inserir'>
                            Cadastre-se
                          </Button>
                          </Col>
                          <Form.Label>NOME Funcionario:</Form.Label>    
                      <Form.Control type="text" name='nomeFuncionario' value={reserva.nomeFuncionario} aria-label="Search" onChange={handleChange}/>
                          <Col>
                          <Button variant="warning" type='submit' name="encontrarFunc" >
                            Pesquisar
                          </Button>
                          <Button variant="warning" href='/cadfuncio/inserir'>
                            Castre-se
                          </Button>
                          </Col>
                      <Form.Label>Numero:</Form.Label>
                        <Form.Control type="number" name="numero" value={reserva.numero} onChange={handleChange}/>
                      <Form.Label>Data:</Form.Label>
                        <Form.Control type="date" name="data" value={reserva.data} onChange={handleChange}/>
                      <Form.Label>Hora inicio:</Form.Label>
                        <Form.Control type="number" name="inicio" value={reserva.inicio} onChange={handleChange}/>
                      <Form.Label>Hora fim:</Form.Label>
                        <Form.Control type="number" name="fim" value={reserva.fim} onChange={handleChange}/>          
                      <Form.Label>Observação:</Form.Label>
                        <Form.Control type="text" name="observacao" value={reserva.observacao} onChange={handleChange}/>
                      <Form.Label>Status Quo:</Form.Label>
                        <Form.Control name='stts' type="text" value={reserva.status} readOnly />          
                      <Button variant="success" type="submit" name="salvar">
                        Salvar
                      </Button>
                      <Button variant="dark" name="cancelar" href='/'>
                        Retornar
                      </Button>
                      <Button variant="danger" type="submit" name="cancelarReserva">
                        Cancelar Reserva
                      </Button>
                      <Form.Label>CPF do Cliente: </Form.Label>
                      <Form.Control type="number" name="cpf" value={cpfCliente} onChange={handleCPFChange}/>
                      <Form.Label>Nome: {nomeCliente}</Form.Label>
                      <Button onClick={clienteButton}>
                        Clientes
                      </Button>
              </Form>
            </Col>
            <Col sm={8}>
            <Button variant="success" size='lg' type="submit" href='/resvSalas'>
              incluir
            </Button>
            <div className='tableContainer'>
              <Table striped bordered hover variant="light">
                <thead>
                  <tr>
                    <th>Numero</th>
                    <th>Sala</th>
                    <th>Data</th>
                    <th>ValorTotal</th>
                    <th>Período</th>
                    <th>Status</th>
                  </tr>
                </thead>
                  <tbody>
                    {tableData.map((row, index) => {
                      return (
                        <tr key={index} data-toogle="tooltip" title={row.imgsala}>
                          <td>{row.numero}</td>
                          <td>{row.sala}</td>
                          <td>{row.data}</td>
                          <td>{row.valortotal}</td>
                          <td>{row.inicio} - {row.fim}</td>
                          <td>{row.status}</td>
                        </tr>
                      );
                    })}
                  </tbody>
              </Table>
              </div>
            <Button variant="dark" size='lg' href='/index'>
              Retornar
            </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Bootfooter/>

    </Container>
  );
}

export default Controleresaervas;