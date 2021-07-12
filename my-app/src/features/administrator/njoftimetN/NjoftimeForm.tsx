import { observer } from 'mobx-react-lite';
import React, {ChangeEvent, useState} from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { validate } from 'uuid';
import { useStore } from '../../../app/stores/store';


export default observer(function NjoftimeFom() {
    const {njoftimeStore} = useStore();
    const {selectedNjoftimi, closeForm, createNjoftim, updateNjoftimi, loading} = njoftimeStore;

    const initialState = selectedNjoftimi ?? {
        id: '',
        njoftimi: '',
        dataENjoftimit: ''
    }
    

    const [njoftimi, setNjoftimi] = useState(initialState);

    function handleSubmit () { 
        njoftimi.id ? updateNjoftimi(njoftimi) : createNjoftim(njoftimi);
     }
 
    function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.currentTarget;
        setNjoftimi({...njoftimi, [name]: value});
    }
    
    return (
    <Segment clearing>
        <Grid>
        <Form validate={validate} onSubmit={handleSubmit} autoComplete='off' style={{padding:'20px', width:'100%'}}>
            <Form.TextArea required onChange={handleInputChange}  name='njoftimi' placeholder='Njoftimi' value={njoftimi.njoftimi} />
            <Form.Input required onChange={handleInputChange} name='dataENjoftimit' placeholder='Data e Vendosjes' type='date' value={njoftimi.dataENjoftimit} />
            <Button loading={loading} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
})

