import { observer } from 'mobx-react-lite';
import {ChangeEvent, useState} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'

export default observer(function NderrimiForm() {
    const {nderrimiStore} = useStore();
    const {selectedNderrimi, closeForm, createNderrimi, updateNderrimi, loading} = nderrimiStore;

    const initialState =selectedNderrimi ?? {
          nderrimiId: '',
          ndrr: '',
        }
    
    const [nderrimi, setNderrimi] = useState(initialState);
  
  
    function handleSubmit () {
      nderrimi.nderrimiId ? updateNderrimi(nderrimi) : createNderrimi(nderrimi);
    };
  
    function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      const { name, value } = event.target;
      setNderrimi({ ...nderrimi, [name]: value });
    };
    
    return (
    <Segment clearing>
        
        <Form onSubmit={handleSubmit} autoComplete='off'>
            <Form.Input onChange={handleInputChange} name='ndrr' placeholder='Nderrimi' value={nderrimi.ndrr} />
            <Button loading={loading} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
        </Form>
        
    </Segment>
    )
})


