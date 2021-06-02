import React, {FormEvent, useState} from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import {v4 as uuid} from 'uuid';
import { INota } from '../../../app/models/nota';

interface IProps {
    setEditMode: (editMode: boolean) => void;
    nota: INota
    createNota: (nota: INota) => void;
    editNota: (nota: INota) => void;
}

const NotaForm:React.FC<IProps> = ({setEditMode, nota: initialFormState, editNota, createNota}) => {
    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState
        }
        else {
            return {
                notaId: '',
                lenda: '',
                grade: '',
            }
        }
    }

    const [nota, setNota] = useState<INota>(initializeForm);

    const handleSubmit = () => { 
        if(nota.notaId.length === 0){
            let newNota = {
                 ...nota,
                 notaId: uuid()
            };
            createNota(newNota);
        } else{
          editNota(nota);
        }
    };
 
     const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
         const {name, value} = event.currentTarget;
         setNota({...nota, [name]: value});
     }
    
    return (
    <Segment clearing>
        <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleInputChange}
          name='lenda'
          placeholder='Lenda'
          value={nota.lenda}
        />
        <Form.Input
          onChange={handleInputChange}
          name='grade'
          rows={2}
          placeholder='Grade'
          value={nota.grade}
        />
        <Button floated='right' positive type='submit' content='Submit' />
        <Button
          onClick={() => setEditMode(false)}
          floated='right'
          type='button'
          content='Cancel'
        />
      </Form>
    </Segment>
    );
};

export default NotaForm;

