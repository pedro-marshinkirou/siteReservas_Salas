import axios from 'axios';

var clientesService = {
  getClientes: async () => {
    var cliAPI = axios.get('http://localhost:2527/apiclits/');
    return await cliAPI;
  },
  getOneclientes: async (id) => {
    var cliAPI1 = await axios.get('http://localhost:2527/apiclits/'+ id);
    return cliAPI1;
  },
  postClientes: async (sala) =>{
    var sala = await axios.post('http://localhost:2527/apiclits/', sala);
    return sala;
  },
  updtClientes: async (id, sala) =>{
    var cliupdt = await axios.put('http://localhost:2527/apiclits/'+ id, sala);
    return cliupdt;
  },
  deltClientes: async (id) =>{
    var deltcli = await axios.delete('http://localhost:2527/apiclits/'+ id);
    return deltcli;
  },
  getClienteCPF: async (cpf) =>{
    console.log(cpf);
    console.log( typeof cpf);
    var Getcpf = await axios.get('http://localhost:2527/apiclits/consultaCPF/'+ cpf);
    return Getcpf;
  }
};

export default clientesService;