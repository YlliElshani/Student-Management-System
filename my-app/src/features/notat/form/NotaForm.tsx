import React, { useState, FormEvent } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import {v4 as uuid} from 'uuid';
import { INota } from '../../../app/models/nota';

interface IProps {
  setEditMode: (editMode: boolean) => void;
  nota: INota;
  createNota:(nota:INota)=>void;
  editNota: (nota: INota) => void;
  submitting: boolean;
}

export const NotaForm: React.FC<IProps> = ({
  setEditMode,
  nota: initialFormState,
  createNota,
  editNota,
  submitting
}) => {
  const initializeForm = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        notaId: '',
        lenda: '',
        grade: ''
      };
    }
  };

  const [nota, setNota] = useState<INota>(initializeForm);

  const handleSubmit = () => {
    if (nota.notaId.length === 0) {
      alert(nota.lenda)
      let newNota = {
        ...nota,
        notaId: uuid()
      };
      alert(nota.notaId)

      createNota(newNota);
    } else {
      editNota(nota);
    }
  };

  
  const handleInputChange = (
    event: FormEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.currentTarget;
    setNota({ ...nota, [name]: value });
  };

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
          placeholder='Grade'
          value={nota.grade}
        />
        <Button loading={submitting} floated='right' positive type='submit' content='Submit' />
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
