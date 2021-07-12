import { observer } from 'mobx-react-lite';
import React, {ChangeEvent, useState} from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { validate } from 'uuid';
import { useStore } from '../../../app/stores/store';


export default observer(function ArsyejaForm() {
    const {arsyejaStore} = useStore();
    const {selectedArsyeja, closeForm, createArsyeja, updateArsyeja, loading} = arsyejaStore;

    const initialState = selectedArsyeja ?? {
        id: '',
        arsyejaMungeses: '',
        nrDiteve: ''
    }
    

    const [arsyeja, setArsyeja] = useState(initialState);

    function handleSubmit () { 
        arsyeja.id ? updateArsyeja(arsyeja) : createArsyeja(arsyeja);
     }
 
    function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.currentTarget;
        setArsyeja({...arsyeja, [name]: value});
    }
    
    return (
    <Segment clearing>
        <Grid>
        <Form validate={validate} onSubmit={handleSubmit} autoComplete='off' style={{padding:'20px', width:'100%'}}>
            <Form.TextArea onChange={handleInputChange} required  name='arsyejaMungeses' placeholder='Arsyeja e mungeses' value={arsyeja.arsyejaMungeses} />
            <Form.Input type='number' min='1' max='8' required onChange={handleInputChange} name='nrDiteve' placeholder='Nr i diteve' value={arsyeja.nrDiteve} />
            <Button loading={loading} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
})

