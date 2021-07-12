import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { ChangeEvent,  useState } from 'react'
import { Button,  Form, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'

export default observer(function DetyraDashboard() {
  const { detyraStore } = useStore();
  const { selectedDetyra, closeForm, createDetyra, updateDetyra, loading } = detyraStore;


   //@ts-ignore
   const [data, setData]=React.useState<ILenda[]>([] as lendetByEmri);

  //@ts-ignore
   const [dataa, setDataa]=React.useState<IKlasa[]>([] as klasetByEmri);

    //@ts-ignore
    const [dataa2, setDataa2]=React.useState<User[]>([] as users);

  React.useEffect(()=>{
    axios
    .get(('https://localhost:5000/API/lendet'))
    .then((res)=>setData(res.data));
    axios
    .get(('https://localhost:5000/API/klaset'))
    .then((res)=>setDataa(res.data));
    axios
    .get(('https://localhost:5000/API/profesor/list'))
    .then((res)=>setDataa2(res.data));
},[])




  const initialState = selectedDetyra ?? {
    detyraId: '',
    lenda: '',
    klasa: '',
    profesori: '',
    detyraEmri: '',
    pershkrimi: ''
  }

 
  const [detyra, setDetyra] = useState(initialState);
  const [selected, setSelected] = React.useState("");

  function handleSubmit() {
    detyra.detyraId ? updateDetyra(detyra) : createDetyra(detyra);
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setDetyra({ ...detyra, [name]: value });
  };
  function changeSelectOptionHandler(event: { target: { value: any; name?: any; }; }) {
    setSelected(event.target.value);
    const { name, value } = event.target;
    setDetyra({ ...detyra, [name]: value });
  }

  return (
    <Segment clearing>

      <Form onSubmit={handleSubmit} autoComplete='off'>

      <Form.Input type='text' onChange={handleInputChange} name='detyraEmri' placeholder='detyraEmri' value={detyra.detyraEmri} />

        <Form.Input>
      <select onChange={changeSelectOptionHandler} name='lenda' placeholder='Lenda' value={detyra.lenda}>
          {data.map(lenda => (
            
            <option key={lenda.id}>{lenda.emri}</option>
          ))}
        </select>
        </Form.Input>
        <Form.Input>
        <select onChange={changeSelectOptionHandler} name='klasa' placeholder='Klasa' value={detyra.klasa}>
          {dataa.map(klasa => (
            
            <option>{klasa.emriKl}</option> 
          ))}
        </select>
        </Form.Input>

        <Form.Input>
        <select onChange={changeSelectOptionHandler} name='profesori' placeholder='Profesori' value={detyra.profesori}>
          {dataa2.map(user => (
            
            <option>{user.displayName}</option> 
          ))}
        </select>
        </Form.Input>

        <Form.Input type='text' onChange={handleInputChange} name='pershkrimi' placeholder='pershkrimi' value={detyra.pershkrimi} />

        <Button loading={loading} floated='right' positive type='submit' content='Dërgo' />
        <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
      </Form>
    </Segment>
  )
});

