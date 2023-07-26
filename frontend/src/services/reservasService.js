import axios from 'axios';
import salasService from './salaService';

var reservasService = {
  getReservas: async () => {
    var rsvsAPI = axios.get('http://localhost:2527/apirsvs/');
    return await rsvsAPI;
  },
  getOneReservas: async (id) => {
    var rsvsAPI1 = await axios.get('http://localhost:2527/apirsvs/unica/'+ id);
    return rsvsAPI1;
  },
  postReservas: async (sala) =>{
    var sala = await axios.post('http://localhost:2527/apirsvs/', sala);
    return sala;
  },
  updtReservas: async (id, sala) =>{
    var Rsvsupdt = await axios.put('http://localhost:2527/apirsvs/'+ id, sala);
    return Rsvsupdt;
  },
  deltReservas: async (id) =>{
    var cancrsvs = await axios.put('http://localhost:2527/apirsvs/cancelar/'+ id);
    return cancrsvs;
  },
  getReservasbySalaid: async (idSala) => {
    var rsvSALAid = await axios.get('http://localhost:2527/apirsvs/consultaSalas/'+ idSala);
    return rsvSALAid;
  },
  calculaValorReservas: async (idSala,horaInicio, horaFim) => {

    const response = await salasService.getOnesalas(idSala);    
    const valorTotal = response.data.valor * (horaFim - horaInicio);

    return valorTotal;
  },


  getNumeroReservas: async () => {
    const response = await axios.get('http://localhost:2527/apirsvs/novonumero');

    return response;
  }
};

export default reservasService;