import React, {FormEvent, useState} from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import {v4 as uuid} from 'uuid';
import { ILenda } from '../../../app/models/lenda';

interface IProps {
    setEditMode: (editMode: boolean) => void;
    lenda: ILenda
    createLenda: (lenda: ILenda) => void;
    editLenda: (lenda: ILenda) => void;
    submitting: boolean;
}

const LendaForm:React.FC<IProps> = ({setEditMode, lenda: initialFormState, editLenda, createLenda, submitting}) => {
    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState
        }
        else {
            return {
                lendaId: '',
                emri: '',
                klasa: '',
                profesori: '',
                description: '',
            }
        }
    }

    const [lenda, setLenda] = useState<ILenda>(initializeForm);

    const handleSubmit = () => { 
        if(lenda.lendaId === ''){
            let newLenda = {
                 ...lenda,
                 lendaId: uuid()
            }
 
 
            createLenda(newLenda);
        }
        else{
            editLenda(lenda);
        }
     }
 
     const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
         const {name, value} = event.currentTarget;
         setLenda({...lenda, [name]: value});
     }
    
    return (
    <Segment clearing>
        <Grid>
        <Form onSubmit={handleSubmit} style={{padding:'20px', width:'100%'}}>
            <Form.Input onChange={handleInputChange}  name='firstName' placeholder='Lenda' value={lenda.emri} />
            <Form.Input onChange={handleInputChange} name='lastName' placeholder='Klasa' value={lenda.klasa} />
            <Form.Input onChange={handleInputChange} name='gender' placeholder='Profesori' value={lenda.profesori} />
            <Form.Input onChange={handleInputChange} name='age' placeholder='Description' value={lenda.description} />
            <Button loading={submitting} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={() => setEditMode(false)} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
}

export default LendaForm;

