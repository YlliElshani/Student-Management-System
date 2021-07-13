import { observer } from 'mobx-react-lite';
import {ChangeEvent, useState} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { useStore } from '../../../../app/stores/store';

export default observer(function NotaForm() {
    const {notaStore} = useStore();
    const {selectedNota, closeForm, createNota, updateNota, loading} = notaStore;

    const initialState =selectedNota ?? {
          notaId: '',
          grade: '',
    }
    
    const [nota, setNota] = useState(initialState);
  
    function handleSubmit () {
      nota.notaId ? updateNota(nota) : createNota(nota);
    };
  
    function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      const { name, value } = event.target;
      setNota({ ...nota, [name]: value });
    };
    
    return (
      <Segment clearing>
        <Form onSubmit={handleSubmit} autoComplete='off'>
          <Form.Input onChange={handleInputChange} name='grade' placeholder='Grade' value={nota.grade} />
          <Button loading={loading} floated='right' positive type='submit' content='Dërgo'/>
          <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
        </Form>
    </Segment>
    )
})


