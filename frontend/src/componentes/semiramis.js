import React, {useState, useEffect} from 'react';
import { Container, Form } from 'react-bootstrap';
import salasService from '../services/salaService';

function ComboSalasu() {

    const [selectData, setSelectData] = useState([]);
  
    useEffect(() => {
      async function fetchSelectData () {
      
      try {
        const response = await salasService.getSalas();
        setSelectData(response.data);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchSelectData();
    },[selectData]);

    const handleChange = (event) => {
      event.preventDefault()
      const value = event.target.value;
      setSelectData(value);
    };

    return (
      
        <Container fluid>        
          <Form>
            <Form.Label>Selecione uma sala</Form.Label>
            <Form.Control as="select">
              {selectData.map(item => (
                <option key={item._id} value={item._id} onChange={handleChange}>
                  {item.numero}
                </option>
              ))}
            </Form.Control>
          </Form>
      </Container>

    );
  }
  
  export default ComboSalasu;