import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Clientes from './paginas/clientes';
import Home from './paginas/home';
import Funcionarios from './paginas/funcionarios';
import Salas from './paginas/salas';
import Salasmod from './paginas/modsalas'
import Salasmodfic from './paginas/modsalaseditado';
import Cadger from './paginas/index';
import Salasmodficcli from './paginas/modsalaseditadoclientes';
import Salasmodficfunc from './paginas/modsalaseditadofuncionarios';
import SalasmodficRSVS from './paginas/modsalaseditadoreservas';
import Resaervas from './paginas/reservas';
import Reservasion from './paginas/reservasNOVO';
import CadCliente from './paginas/CADASTROCLIENTE';
import Controleresaervas from './paginas/controleFuncionario';
import Cadfuncio from './paginas/CADASTROFUNCIO';

function App() {
  return (
    
    <Container>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/clientes" element={<Clientes/>} />
          <Route path="/funcionarios" element={<Funcionarios/>} />
          <Route path="/salas" element={<Salas/>} />
          <Route path="/index" element={<Cadger/>} />
          <Route path="/salas/:id" element={<Salasmod/>} />
          <Route path="/assalas" element={<Salasmodfic/>} />
          <Route path="/assalas/:id" element={<Salasmodfic/>} />
          <Route path="/clisalas" element={<Salasmodficcli/>} />
          <Route path="/clisalas/:id" element={<Salasmodficcli/>} />
          <Route path="/funcsalas" element={<Salasmodficfunc/>} />
          <Route path="/funcsalas/:id" element={<Salasmodficfunc/>} />
          <Route path="/reservas" element={<Resaervas/>} />
          <Route path="/resvSalas" element={<SalasmodficRSVS/>} />
          <Route path="/resvSalas/:id" element={<SalasmodficRSVS/>} />
          <Route path="/reservasu" element={<Reservasion/>} />
          <Route path="/reservasu/:id" element={<Reservasion/>} />
          <Route path="/cadcliente" element={<CadCliente/>} />
          <Route path="/cadcliente/:id" element={<CadCliente/>} />
          <Route path="/controlefunc" element={<Controleresaervas/>} />
          <Route path="/controlefunc/:id" element={<Controleresaervas/>} />
          <Route path="/cadfuncio" element={<Cadfuncio/>} />
          <Route path="/cadfuncio/:id" element={<Cadfuncio/>} />
        </Routes>
      </BrowserRouter>    

    </Container>

  );
}

export default App;