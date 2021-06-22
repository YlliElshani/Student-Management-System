import React, {FormEvent, useState} from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import {v4 as uuid, validate} from 'uuid';
import { IPrezantimi } from '../../../app/models/prezantimi';



interface IProps {
    setEditMode: (editMode: boolean) => void;
    prezantimi: IPrezantimi
    createPrezantimi: (prezantimi: IPrezantimi) => void;
    editPrezantimi: (prezantimi: IPrezantimi) => void;
    submitting: boolean;
}

export const PrezantimiForm:React.FC<IProps> = ({setEditMode, prezantimi: initialFormState, editPrezantimi, createPrezantimi, submitting}) => {
    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState
        }
        else {
            return {
                prezantimiId: '',
                prezantimiInfo: '',
                kohezgjatja: '',
                data: '',
                ora: '',
            }
        }
    }

    const [prezantimi, setPrezantimi] = useState<IPrezantimi>(initializeForm);

    const handleSubmit = () => { 
        if(prezantimi.prezantimiId === ''){
            let newPrezantimi = {
                 ...prezantimi,
                 prezantimiId: uuid()
            }
 
 
            createPrezantimi(newPrezantimi);
        }
        else{
            editPrezantimi(prezantimi);
        }
     }
 
     const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
         const {name, value} = event.currentTarget;
         setPrezantimi({...prezantimi, [name]: value});
     }
    
    return (
    <Segment clearing>
        <Grid>
        <Form validate={validate} onSubmit={handleSubmit} style={{padding:'20px', width:'100%'}}>
            <Form.TextArea rows={3} onChange={handleInputChange} name='prezantimiInfo' placeholder='Pershkrimi i prezantimit' value={prezantimi.prezantimiInfo} />
            <Form.TextArea onChange={handleInputChange} name='kohezgjatja' placeholder='Kohezgjatja e prezantimit' value={prezantimi.kohezgjatja} />
            <Form.Input type='date' onChange={handleInputChange} name='data' placeholder='Date' value={prezantimi.data} />
            <Form.Input onChange={handleInputChange} name='ora' placeholder='Ora' value={prezantimi.ora}/>
            <Button loading={submitting} floated='right' positive type='submit' content='Shto'/>
            <Button onClick={() => setEditMode(false)} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
}

export default PrezantimiForm;

