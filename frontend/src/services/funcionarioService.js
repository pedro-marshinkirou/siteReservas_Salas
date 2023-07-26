import axios from 'axios';

var funcionariosService = {
  getFuncionarios: async () => {
    var funcAPI = axios.get('http://localhost:2527/apifuncs/');
    return await funcAPI;
  },
  getOnefuncionarios: async (id) => {
    var funcAPI1 = await axios.get('http://localhost:2527/apifuncs/'+ id);
    return funcAPI1;
  },
  postFuncionarios: async (sala) =>{
    var sala = await axios.post('http://localhost:2527/apifuncs/', sala);
    return sala;
  },
  updtFuncionarios: async (id, sala) =>{
    var funcupdt = await axios.put('http://localhost:2527/apifuncs/'+ id, sala);
    return funcupdt;
  },
  deltFuncionarios: async (id) =>{
    var deltfunc = await axios.delete('http://localhost:2527/apifuncs/'+ id);
    return deltfunc;
  },
  getFuncCPF: async (cpf) =>{
    console.log(cpf);
    console.log( typeof cpf);
    var Getcpf = await axios.get('http://localhost:2527/apifuncs/consultaCPFnome/'+ cpf);
    return Getcpf;
  }
};

export default funcionariosService;