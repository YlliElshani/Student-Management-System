import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { IKlasa } from '../../../app/models/klasa';
import { useStore } from '../../../app/stores/store'


export default observer(function LendaForm() {
  const { lendaStore } = useStore();
  const { selectedLenda, closeForm, createLenda, updateLenda, loading } = lendaStore;

  //@ts-ignore
  const [data, setData] = React.useState<IKlasa[]>([] as klaset);

  React.useEffect(() => {
    axios
      .get(('https://localhost:5000/API/klaset'))
      .then((res) => setData(res.data));
  }, [])

  const initialState = selectedLenda ?? {
    lendaId: '',
    emri: '',
    klasa: '',
    profesori: '',
    descripion: ''
  }


  const [lenda, setLenda] = useState(initialState);
  const [selected, setSelected] = React.useState("");


  function handleSubmit() {
    lenda.lendaId ? updateLenda(lenda) : createLenda(lenda);
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setLenda({ ...lenda, [name]: value });
  };

  function changeSelectOptionHandler(event: { target: { value: any; name?: any; }; }) {
    setSelected(event.target.value);
    const { name, value } = event.target;
    setLenda({ ...lenda, [name]: value });
  }

  return (
    <Segment clearing>

      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input onChange={handleInputChange} name='emri' placeholder='Lenda' value={lenda.emri} />
        <Form.Input>
          <select onChange={changeSelectOptionHandler} name='klasa' placeholder='Klasa' value={lenda.klasa}>
            {data.map(klasa => (

              <option key={klasa.klasaId}>{klasa.emriKl}</option>
            ))}
          </select>
        </Form.Input>
        <Form.Input onChange={handleInputChange} name='profesori' placeholder='Profesori' value={lenda.profesori} />
        <Form.Input onChange={handleInputChange} name='descripion' placeholder='Description' value={lenda.descripion} />
        <Button loading={loading} floated='right' positive type='submit' content='Dërgo' />
        <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
      </Form>

    </Segment>
  )
})

