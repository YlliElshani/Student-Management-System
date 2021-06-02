import React, {FormEvent, useState} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import {v4 as uuid} from 'uuid';
import { ILenda } from '../../../app/models/lenda';

interface IProps {
    setEditMode: (editMode: boolean) => void;
    lenda: ILenda;
    createLenda: (lenda: ILenda) => void;
    editLenda: (lenda: ILenda) => void;
    submitting: boolean;
}

const LendaForm:React.FC<IProps> = ({setEditMode, lenda: initializeFormState, editLenda, createLenda, submitting}) => {
    const initializeForm = () => {
        if (initializeFormState) {
            return initializeFormState
        }
        else {
            return {
                lendaId: '',
                emri: '',
                klasa: '',
                profesori: '',
                descripion: ''
            }
        }
    }

    const [lenda, setLenda] = useState<ILenda>(initializeForm);

    const handleSubmit = () => { 
        if(lenda.lendaId.length === 0){
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
     };
    
    return (
    <Segment clearing>
        
        <Form onSubmit={handleSubmit}>
            <Form.Input onChange={handleInputChange} name='emri' placeholder='Lenda' value={lenda.emri} />
            <Form.Input onChange={handleInputChange} name='klasa' placeholder='Klasa' value={lenda.klasa} />
            <Form.Input onChange={handleInputChange} name='profesori' placeholder='Profesori' value={lenda.profesori} />
            <Form.Input onChange={handleInputChange} name='descripion' placeholder='Description' value={lenda.descripion} />
            <Button loading={submitting} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={() => setEditMode(false)} floated='right' type='submit' content='Anulo' />
        </Form>
        
    </Segment>
    )
}

export default LendaForm;

