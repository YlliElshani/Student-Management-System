import { observer } from 'mobx-react-lite';
import React, {ChangeEvent, useState} from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { validate } from 'uuid';
import { useStore } from '../../app/stores/store';


export default observer(function KohaZForm() {
    const {koheZStore} = useStore();
    const {selectedkoheZ, closeForm, createKoheZ, updateKoheZ, loading} = koheZStore;

    const initialState = selectedkoheZ ?? {
        id: '',
        kohaMin:'',
        oraNisjes:''
    }
    

    const [kohaZ, setKohaZ] = useState(initialState);

    const [selected, setSelected] = React.useState("");


    function handleSubmit () { 
        kohaZ.id ? updateKoheZ(kohaZ) : createKoheZ(kohaZ);
     }
 
    function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.currentTarget;
        setKohaZ({...kohaZ, [name]: value});
    }

   
    return (
    <Segment clearing>
        <Grid>
        <Form validate={validate} onSubmit={handleSubmit} autoComplete='off' style={{padding:'20px', width:'100%'}}>
            <Form.Input onChange={handleInputChange}  name='kohaMin' placeholder='Ora mesimore ne minuta (min.25)' type='number' min="25" value={kohaZ.kohaMin} />
            <Form.Input onChange={handleInputChange} name='oraNisjes' placeholder='Ora nis ne:'  value={kohaZ.oraNisjes} />
            <Button loading={loading} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
})

