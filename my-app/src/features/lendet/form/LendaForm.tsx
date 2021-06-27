import { observer } from 'mobx-react-lite';
import {ChangeEvent, useState} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'

export default observer(function LendaForm() {
    const {lendaStore} = useStore();
    const {selectedLenda, closeForm, createLenda, updateLenda, loading} = lendaStore;

    const initialState =selectedLenda ?? {
          lendaId: '',
          emri: '',
          klasa: '',
          profesori: '',
          descripion: ''
        }
    
    const [lenda, setLenda] = useState(initialState);
  
  
    function handleSubmit () {
      lenda.lendaId ? updateLenda(lenda) : createLenda(lenda);
    };
  
    function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      const { name, value } = event.target;
      setLenda({ ...lenda, [name]: value });
    };
    
    return (
    <Segment clearing>
        
        <Form onSubmit={handleSubmit} autoComplete='off'>
            <Form.Input onChange={handleInputChange} name='emri' placeholder='Lenda' value={lenda.emri} />
            <Form.Input onChange={handleInputChange} name='klasa' placeholder='Klasa' value={lenda.klasa} />
            <Form.Input onChange={handleInputChange} name='profesori' placeholder='Profesori' value={lenda.profesori} />
            <Form.Input onChange={handleInputChange} name='descripion' placeholder='Description' value={lenda.descripion} />
            <Button loading={loading} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
        </Form>
        
    </Segment>
    )
})


