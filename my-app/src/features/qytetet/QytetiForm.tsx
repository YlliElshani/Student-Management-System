import { observer } from 'mobx-react-lite';
import React, {ChangeEvent, useState} from 'react'
import { combineValidators, composeValidators, hasLengthGreaterThan, isRequired } from 'revalidate';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { validate } from 'uuid';
import { useStore } from '../../app/stores/store';


export default observer(function QytetiForm() {
    const {qytetiStore} = useStore();
    const {selectedQyteti, closeForm, createQyteti, updateQyteti, loading} = qytetiStore;

    const initialState = selectedQyteti ?? {
        id: '',
        emri: '',
        shteti: ''
    }
    

    const [qyteti, setQyteti] = useState(initialState);

    function handleSubmit () { 
        qyteti.id ? updateQyteti(qyteti) : createQyteti(qyteti);
     }
 
    function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.currentTarget;
        setQyteti({...qyteti, [name]: value});
    }
    
    return (
    <Segment clearing>
        <Grid>
        <Form validate={validate} onSubmit={handleSubmit} autoComplete='off' style={{padding:'20px', width:'100%'}}>
            <Form.Input onChange={handleInputChange}  name='emri' placeholder='Emri' value={qyteti.emri} />
            <Form.Input onChange={handleInputChange} name='shteti' placeholder='Shteti' value={qyteti.shteti} />
            <Button loading={loading} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
})

