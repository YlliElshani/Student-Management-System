import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { ChangeEvent,  useState } from 'react'
import { Button,  Form, Segment } from 'semantic-ui-react'
import { IKlasa } from '../../../app/models/klasa';
import { IParaleljaa } from '../../../app/models/paraleljaa';
import { useStore } from '../../../app/stores/store';


export default observer(function PlaniMForm() {
  const { pMesimorStore } = useStore();
  const { selectedPlaniM, closeForm, createPlaniM, updatePlaniM, loading } = pMesimorStore;
   //@ts-ignore
   const [data, setData]=React.useState<ILenda[]>([]);
   const [paralelet, setParalelet]=React.useState<IParaleljaa[]>([]);
   const [klaset, setKlaset]=React.useState<IKlasa[]>([]);

     React.useEffect(()=>{
       axios
       .get(('https://localhost:5000/API/Lendet'))
       .then((res)=>setData(res.data));

       axios
       .get(('https://localhost:5000/API/paraleleet'))
       .then((res)=>setParalelet(res.data));

       axios
      .get(('https://localhost:5000/API/klaset'))
      .then((res)=>setKlaset(res.data));
   },[])


  const initialState = selectedPlaniM ?? {
    id:'',
    planiInfo:'',
    kriteriPlotsimit:'',
    lenda:'',
    emriKl:'',
    emriPar:''
  }

 
  const [planiM, setPlaniM] = useState(initialState);
  const [selected, setSelected] = React.useState("");


  function handleSubmit() {
    planiM.id ? updatePlaniM(planiM) : createPlaniM(planiM);
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setPlaniM({ ...planiM, [name]: value });
  };

  function changeSelectOptionHandler(event: { target: { value: any; name?: any; }; }) {
    setSelected(event.target.value);
    const { name, value } = event.target;
    setPlaniM({ ...planiM, [name]: value });
  }

  return (
    <Segment clearing>

      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input>
      <select onChange={changeSelectOptionHandler} name='lenda' placeholder='Lenda' value={planiM.lenda}>
          {data.map(lenda => (
            
            <option key={lenda.id}>{lenda.emri}</option>
          ))}
        </select>
        </Form.Input>
        <Form.Input>
        <select onChange={changeSelectOptionHandler} name='emriKl' placeholder='Klasa' value={planiM.emriKl}>
          {klaset.map(klasa => (
            
            <option key={klasa.klasaId}>{klasa.emriKl}</option>

          ))}
        </select>
        </Form.Input>
        <Form.Input>
        <select onChange={changeSelectOptionHandler} name='emriPar' placeholder='Paralelet' value={planiM.emriPar}>
          {paralelet.map(paralelja => (
            
            <option key={paralelja.paraleljaaId}>{paralelja.emriPar}</option>

          ))}
        </select>
        </Form.Input>
        <Form.TextArea  onChange={handleInputChange} name='planiInfo' placeholder='Plani Info' value={planiM.planiInfo} />
        <Form.TextArea onChange={handleInputChange} name='kriteriPlotsimit' placeholder='Kriteri Plotsimit' value={planiM.kriteriPlotsimit} />
        <Button loading={loading} floated='right' positive type='submit' content='Dërgo' />
        <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
      </Form>
    </Segment>
  )
});

