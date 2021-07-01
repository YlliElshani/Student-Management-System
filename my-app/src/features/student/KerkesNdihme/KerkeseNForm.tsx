import { observer } from 'mobx-react-lite';
import React, {ChangeEvent, useState} from 'react'
import { combineValidators, composeValidators, hasLengthGreaterThan, isRequired } from 'revalidate';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { validate } from 'uuid';
import { useStore } from '../../../app/stores/store';


export default observer(function KerkeseNForm() {
    const {kerkesNdihmeStore} = useStore();
    const {selectedKerkese, closeForm, createKerkesa, updateKerkese, loading} = kerkesNdihmeStore;

    const initialState = selectedKerkese ?? {
        id: '',
        kerkesaInfo: '',
        dataECaktuar: ''
    }
    

    const [kerkesa, setKerkesa] = useState(initialState);

    function handleSubmit () { 
        kerkesa.id ? updateKerkese(kerkesa) : createKerkesa(kerkesa);
     }
 
    function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.currentTarget;
        setKerkesa({...kerkesa, [name]: value});
    }
    
    return (
    <Segment clearing>
        <Grid>
        <Form validate={validate} onSubmit={handleSubmit} autoComplete='off' style={{padding:'20px', width:'100%'}}>
            <Form.Input onChange={handleInputChange}  name='kerkesaInfo' placeholder='Info rreth Kerkeses' value={kerkesa.kerkesaInfo} />
            <Form.Input onChange={handleInputChange} name='dataECaktuar' placeholder='Data e Vendosjes' type='date' value={kerkesa.dataECaktuar} />
            <Button loading={loading} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
})

