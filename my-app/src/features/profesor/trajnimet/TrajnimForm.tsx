import { observer } from 'mobx-react-lite';
import React, {ChangeEvent, useState} from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import { validate } from 'uuid';
import { useStore } from '../../../app/stores/store';

export default observer(function TrajnimForm() {
    const {trajnimStore} = useStore();
    const {selectedTrajnim, closeForm, createTrajnim, updateTrajnim, loading} = trajnimStore;

    const initialState = selectedTrajnim ?? {
        trajnimId: '',
        trajnimEmri: '',
        pershkrimi: '',
        numriDiteve: ''
    }
    

    const [trajnim, setTrajnim] = useState(initialState);

    function handleSubmit () { 
        trajnim.trajnimId ? updateTrajnim(trajnim) : createTrajnim(trajnim);
     }
 
    function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.currentTarget;
        setTrajnim({...trajnim, [name]: value});
    }
    
    return (
    <Segment clearing  style={{width:'500px'}}>
        <Grid>
        <Form validate={validate} onSubmit={handleSubmit} autoComplete='off' style={{padding:'20px',width:'90%'}}>
            <Form.Input onChange={handleInputChange}  name='trajnimEmri' placeholder='Emri' value={trajnim.trajnimEmri} />
            <Form.Input onChange={handleInputChange} name='pershkrimi' placeholder='Pershkrimi' value={trajnim.pershkrimi} />
            <Form.Input onChange={handleInputChange} name='numriDiteve' placeholder='numriDiteve' value={trajnim.numriDiteve} />
            <Button loading={loading} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
})
