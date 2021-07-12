import { observer } from 'mobx-react-lite';
import React from 'react';
import { ChangeEvent,  useState } from 'react'
import {  Form, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'


export default observer(function LendaForm() {
  const { lendaStore } = useStore();
  const { selectedLenda, createLenda, updateLenda } = lendaStore;
  //i shton qito store t'qasaj tabele qe ka me hi ndrop-down (12-13)
  const { klasaStore } = useStore();
  const { klasetByEmri } = klasaStore;

  const initialState = selectedLenda ?? {
    lendaId: '',
    emri: '',
    klasa: '',
    profesori: '',
    descripion: ''
  }

 
  const [lenda, setLenda] = useState(initialState);
  //shton rreshtin 26
  const [selected, setSelected] = React.useState("");


  function handleSubmit() {
    lenda.lendaId ? updateLenda(lenda) : createLenda(lenda);
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setLenda({ ...lenda, [name]: value });
  };
  //e shton 45-49
  function changeSelectOptionHandler(event: { target: { value: any; name?: any; }; }) {
    setSelected(event.target.value);
    const { name, value } = event.target;
    setLenda({ ...lenda, [name]: value });
  }

  return (
    <Segment clearing>

      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input onChange={handleInputChange} name='emri' placeholder='Lenda' value={lenda.emri} />
        {/* Rreshti 57-64 esht dropdowni */}
        <Form.Input>
        <select onChange={changeSelectOptionHandler} name='klasa' placeholder='Klasa' value={lenda.klasa}>
          {klasetByEmri.map(klasa => (
            
            <option>{klasa.emriKl}</option>
          ))}
        </select>
        </Form.Input>
        <Form.Input onChange={handleInputChange} name='profesori' placeholder='Profesori' value={lenda.profesori} />
        <Form.Input onChange={handleInputChange} name='descripion' placeholder='Description' value={lenda.descripion} />
      </Form>

    </Segment>
  )
})

