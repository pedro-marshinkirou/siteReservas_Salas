import axios from 'axios';

var salasService = {
  getSalas: async () => {
    var salaAPI = axios.get('http://localhost:2527/apisalas/');
    return await salaAPI;
  },
  getOnesalas: async (id) => {
    var salaAPI1 = await axios.get('http://localhost:2527/apisalas/'+ id);
    return salaAPI1;
  },
  postSalas: async (sala) =>{
    var sala = await axios.post('http://localhost:2527/apisalas/', sala);
    return sala;
  },
  updtSalas: async (id, sala) =>{
    var salaupdt = await axios.put('http://localhost:2527/apisalas/'+ id, sala);
    return salaupdt;
  },
  deltSalas: async (id) =>{
    var deltsal = await axios.delete('http://localhost:2527/apisalas/'+ id);
    return deltsal;
  },
  getSalasbyNum: async (num) =>{
    var Getnum = await axios.get('http://localhost:2527/apisalas/consultaNumero/'+ num);
    return Getnum;
  }
};

export default salasService;