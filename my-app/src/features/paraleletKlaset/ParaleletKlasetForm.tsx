import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { ChangeEvent,  useState } from 'react'
import { Button,  Form, Segment } from 'semantic-ui-react'
import { IKlasa } from '../../app/models/klasa';
import { IParaleljaa } from '../../app/models/paraleljaa';
import { useStore } from '../../app/stores/store'


export default observer(function ParaleletKlasaForm() {
  const { paraleljaKlasaStore } = useStore();
  const { selectedParaleljaKlasa, closeForm, createParaleljaKlasa, updateParaleljaKlasa, loading } = paraleljaKlasaStore;
  //i shton qito store t'qasaj tabele qe ka me hi ndrop-down (12-13)
  const { klasaStore } = useStore();
  const { klasetByEmri } = klasaStore;
  const { paraleljaaStore } = useStore();
  const { paraleleetByEmri } = paraleljaaStore;
  
  //@ts-ignore
  const [data, setData]=React.useState<IKlasa[]>([] as klaset);
  //@ts-ignore
  const [data2, setData2]=React.useState<IParaleljaa[]>([] as paraleleet);

  const initialState = selectedParaleljaKlasa ?? {
    paraleljaKlasaId: '',
    emriKl: '',
    emriPar: '',
  }

 
  const [paraleljaKlasa, setParaleljaKlasa] = useState(initialState);
  //shton rreshtin 26
  const [selected, setSelected] = React.useState("");


  function handleSubmit() {
    paraleljaKlasa.paraleljaKlasaId ? updateParaleljaKlasa(paraleljaKlasa) : createParaleljaKlasa(paraleljaKlasa);
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setParaleljaKlasa({ ...paraleljaKlasa, [name]: value });
  };
  //e shton 45-49
  function changeSelectOptionHandler(event: { target: { value: any; name?: any; }; }) {
    setSelected(event.target.value);
    const { name, value } = event.target;
    setParaleljaKlasa({ ...paraleljaKlasa, [name]: value });
  }

  React.useEffect(()=>{
    axios
    .get(('https://localhost:5000/API/klaset'))
    .then((res)=>setData(res.data));
},[])

React.useEffect(()=>{
  axios
  .get(('https://localhost:5000/API/paraleleet'))
  .then((res)=>setData2(res.data));
},[])


  return (
    <Segment clearing>

      <Form onSubmit={handleSubmit} autoComplete='off'>
       
        {/* Rreshti 57-64 esht dropdowni */}
        <Form.Input>
        <select onChange={changeSelectOptionHandler} name='emriKl' placeholder='Klasa' value={paraleljaKlasa.emriKl}>
          {data.map(klasa => (    
            <option>{klasa.emriKl}</option>
          ))}
        </select>
        </Form.Input>

        <Form.Input>
        <select onChange={changeSelectOptionHandler} name='emriPar' placeholder='Klasa' value={paraleljaKlasa.emriPar}>
          {data2.map(paraleleet => (    
            <option>{paraleleet.emriPar}</option>
          ))}
        </select>
        </Form.Input>
        
        <Button loading={loading} floated='right' positive type='submit' content='Dërgo' />
        <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
      </Form>

    </Segment>
  )
})

