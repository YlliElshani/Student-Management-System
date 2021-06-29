import { observer } from 'mobx-react-lite';
import { createInstanceofPredicate } from 'mobx/dist/internal';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Segment, Form, Button, InputOnChangeData } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';


export default observer( function NotaForm(){
  const {notaStore} = useStore();
  const {selectedNota, closeForm, createNota, updateNota, loading} = notaStore;

  const initialState = selectedNota ?? {
        notaId: '',
        lenda: '',
        grade: ''
  }


  const [nota, setNota] = useState(initialState);

  function handleSubmit() {
    nota.notaId ? updateNota(nota) : createNota(nota);
  }
  
  function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const {name, value} = event.currentTarget;
    setNota({...nota, [name]: value});
}

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleInputChange}
          name='lenda'
          placeholder='Lenda'
          value={nota.lenda}
        />
        <Form.Input
          onChange={handleInputChange}
          name='grade'
          placeholder='Grade'
          value={nota.grade}
        />
        <Button loading={loading} floated='right' positive type='submit' content='Submit' />
        <Button
          onClick={closeForm}
          floated='right'
          type='button'
          content='Cancel'
        />
      </Form>
    </Segment>
  )
})


