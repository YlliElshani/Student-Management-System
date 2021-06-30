import { observer } from 'mobx-react-lite';
import React, {ChangeEvent, useState} from 'react'
import { combineValidators, composeValidators, hasLengthGreaterThan, isRequired } from 'revalidate';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { validate } from 'uuid';
import { useStore } from '../../../app/stores/store';

export default observer(function PrezantimiForm() {
    const {prezantimiStore} = useStore();
    const {selectedPrezantimi, closeForm, createPrezantimi, updatePrezantimi, loading} = prezantimiStore;

    const initialState = selectedPrezantimi ?? {
        prezantimiId: '',
        prezantimiInfo: '',
        kohezgjatja: '',
        data: '',
        ora: ''
    }
    

    const [prezantimi, setPrezantimi] = useState(initialState);

    function handleSubmit () { 
        prezantimi.prezantimiId ? updatePrezantimi(prezantimi) : createPrezantimi(prezantimi);
     }
 
    function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.currentTarget;
        setPrezantimi({...prezantimi, [name]: value});
    }
    
    return (
    <Segment clearing>
        <Grid>
        <Form validate={validate} onSubmit={handleSubmit} autoComplete='off' style={{padding:'20px', width:'100%'}}>
        <Form.TextArea rows={5} onChange={handleInputChange} name='prezantimiInfo' placeholder='PrezantimiInfo' value={prezantimi.prezantimiInfo} />
            <Form.Input onChange={handleInputChange} name='kohezgjatja' placeholder='Kohezgjatja' value={prezantimi.kohezgjatja} />
            <Form.Input type='date' onChange={handleInputChange} name='data' placeholder='Data' value={prezantimi.data} />
            <Form.Input onChange={handleInputChange} name='ora' placeholder='Ora' value={prezantimi.ora}/>
            <Button loading={loading} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
})

