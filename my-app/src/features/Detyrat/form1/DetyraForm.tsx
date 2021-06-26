import React, {FormEvent, useState} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import {v4 as uuid} from 'uuid';
import { IDetyra } from '../../../app/models/detyra';

interface IProps {
    setEditMode: (editMode: boolean) => void;
    detyra: IDetyra
    createDetyra: (detyra: IDetyra) => void;
    editDetyra: (detyra: IDetyra) => void;
}

const DetyraForm: React.FC<IProps> = ({
  setEditMode,
  detyra: initialFormState,
  editDetyra,
  createDetyra
}) => {
    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState
        }
        else {
            return {
                detyraId: '',
                detyraEmri: '',
                pershkrimi: '',
            }
        }
    }

    const [detyra, setDetyra] = useState<IDetyra>(initializeForm);

    const handleSubmit = () => { 
      if (detyra.detyraId === ''){
            let newDetyra = {
                 ...detyra,
                 detyraId: uuid()
            };
            createDetyra(newDetyra);
        } else{
          editDetyra(detyra);
        }
    };
 
     const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
         const {name, value} = event.currentTarget;
         setDetyra({...detyra, [name]: value});
     }
    
    return (
    <Segment clearing>
        <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleInputChange}
          name='detyraEmri'
          placeholder='DetyraEmri'
          value={detyra.detyraEmri}
        />
        <Form.Input
          onChange={handleInputChange}
          name='pershkrimi'
          rows={2}
          placeholder='Pershkrimi'
          value={detyra.pershkrimi}
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

export default DetyraForm;


