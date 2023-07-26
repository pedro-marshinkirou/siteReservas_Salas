import React, { useState, useEffect } from 'react';
import { Container, Row, Form, Card, Button, Col } from 'react-bootstrap';
import { useParams, useNavigate, } from "react-router-dom";
import NavSc from '../componentes/navbar';
import Bootfooter from '../componentes/BSfooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import reservasService from '../services/reservasService';
import ComboSalasion from '../componentes/combosalasNOVO';
import clientesService from '../services/clienteService';
import funcionariosService from '../services/funcionarioService';


function Reservasion() {
  
  const { id } = useParams();
  const [reserva, setFormData] = useState({});
  const [selectedValue, setSelectedValue] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const history = useNavigate();
  
  useEffect(() => {
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
  },[id]); 

  const handleSubmit = async (event, req, res) => {
    event.preventDefault();
      try {
        if (event.nativeEvent.submitter.name === "salvar") {
          reserva.funcionario = 'WEB - Internet';
          reserva.cliente = 'Internet - WWW';
          reserva.valortotal = await reservasService.calculaValorReservas(reserva.sala, reserva.inicio, reserva.fim);
          reserva.status = 'R';
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
  
  return (    

    <Container fluid>
      <Row>
        <NavSc/>
      </Row>
      <Row>
        <Card>
          <Card.Body>
            <Form onSubmit={handleSubmit}>        
                <Form.Label>Valor select</Form.Label>
                  <Form.Control name='sala' type="text" value={selectedValue} readOnly />
                    <ComboSalasion onSelectChange={handleSelectChange} />
                    <Form.Label>CPF:</Form.Label>    
                      <Form.Control type="number" name='cpf' value={reserva.cpf} aria-label="Search" onChange={handleChange}/>
                          <Col>
                          <Button variant="dark" type='submit' name="encontrar" >
                            Pesquisar
                          </Button>
                          <Button variant="dark" href='/cadcliente'>
                            Cadastre-se
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
              </Form>
            </Card.Body>
          </Card>
        </Row>        
        <Row>          
          <Bootfooter/>
        </Row>    

    </Container>
  );
}

export default Reservasion;