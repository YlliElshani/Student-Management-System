import { observer } from 'mobx-react-lite';
import React, {ChangeEvent, useState} from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import { validate } from 'uuid';
import { useStore } from '../../../app/stores/store';


export default observer(function DetyraForm() {
    const {detyraStore} = useStore();
    const {selectedDetyra, closeForm, createDetyra, updateDetyra, loading} = detyraStore;

    const initialState = selectedDetyra ?? {
        detyraId: '',
        detyraEmri: '',
        pershkrimi: ''
    }
    

    const [detyra, setDetyra] = useState(initialState);

    function handleSubmit () { 
        detyra.detyraId ? updateDetyra(detyra) : createDetyra(detyra);
     }
 
    function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.currentTarget;
        setDetyra({...detyra, [name]: value});
    }
    //duhet me shtu per cilen lende jon detyrat
    return (
    <Segment clearing  style={{width:'500px'}}>
        <Grid>
        <Form validate={validate} onSubmit={handleSubmit} autoComplete='off'  style={{padding:'20px', width:'400px'}}>
            <Form.Input onChange={handleInputChange}  name='detyraEmri' placeholder='Emri' value={detyra.detyraEmri} />
            <Form.TextArea onChange={handleInputChange} name='pershkrimi' placeholder='Pershkrimi' value={detyra.pershkrimi} />
            <Button loading={loading} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
})