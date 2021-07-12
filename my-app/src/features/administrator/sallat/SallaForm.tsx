import { observer } from 'mobx-react-lite';
import React, {ChangeEvent, useState} from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { validate } from 'uuid';
import { useStore } from '../../../app/stores/store';


export default observer(function SallaForm() {
    const {sallaStore} = useStore();
    const {selectedSalla, closeForm, createSalla, updateSalla, loading} = sallaStore;

    const initialState = selectedSalla ?? {
        sallaId: '',
        emri: '',
        kapaciteti: '',
        statusi: '',
        dataRezervimit: '',
        oraRezervimit: ''
    }
    

    const [salla, setSalla] = useState(initialState);

    function handleSubmit () { 
        salla.sallaId ? updateSalla(salla) : createSalla(salla);
     }
 
    function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.currentTarget;
        setSalla({...salla, [name]: value});
    }

    return (
    <Segment clearing>
        <Grid>
        <Form validate={validate} onSubmit={handleSubmit} autoComplete='off' style={{padding:'20px', width:'100%'}}>
            <Form.Input onChange={handleInputChange}  name='emri' placeholder='Emri' value={salla.emri} />
            <Form.Input onChange={handleInputChange} name='kapaciteti' placeholder='Kapaciteti' value={salla.kapaciteti} />
            <Form.Input onChange={handleInputChange}  name='statusi' placeholder='Statusi' value={salla.statusi} />
            <Form.Input type='date' onChange={handleInputChange} name='dataRezervimit' placeholder='Data' value={salla.dataRezervimit} />
            <Form.Input onChange={handleInputChange} name='oraRezervimit' placeholder='Ora' value={salla.oraRezervimit} />
            <Button loading={loading} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
})

