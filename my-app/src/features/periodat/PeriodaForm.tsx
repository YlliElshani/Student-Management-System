import { observer } from 'mobx-react-lite';
import React, {ChangeEvent, useState} from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import { validate } from 'uuid';
import { useStore } from '../../app/stores/store';

export default observer(function PeriodaForm() {
    const {periodaStore} = useStore();
    const {selectedPerioda, closeForm, createPerioda, updatePerioda, loading} = periodaStore;

    const initialState = selectedPerioda ?? {
        periodaId: '',
        emri: '',
        fillimi: '',
        mbarimi: '',
    }
    

    const [perioda, setPerioda] = useState(initialState);

    function handleSubmit () { 
        perioda.periodaId ? updatePerioda(perioda) : createPerioda(perioda);
     }
 
    function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.currentTarget;
        setPerioda({...perioda, [name]: value});
    }
    
    return (
    <Segment clearing  style={{width:'300px'}}>
        <Grid>
        <Form validate={validate} onSubmit={handleSubmit} autoComplete='off' style={{padding:'20px'}}>
            <Form.Input onChange={handleInputChange}  name='emri' placeholder='emri' value={perioda.emri} />
            <Form.Input onChange={handleInputChange} name='fillimi' placeholder='fillimi'  type='date' value={perioda.fillimi} />
            <Form.Input onChange={handleInputChange} name='mbarimi' placeholder='mbarimi'  type='date' value={perioda.mbarimi} />
            <Button loading={loading} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
})
