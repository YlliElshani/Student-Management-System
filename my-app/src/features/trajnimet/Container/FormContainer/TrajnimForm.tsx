import React, {FormEvent, useState} from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import {v4 as uuid} from 'uuid';
import { ITrajnim } from '../../../../app/models/trajnim';

interface IProps {
    setEditMode: (editMode: boolean) => void;
    trajnim: ITrajnim
    createTrajnim: (trajnim: ITrajnim) => void;
    editTrajnim: (trajnim: ITrajnim) => void;
    submitting: boolean;
}

const TrajnimForm:React.FC<IProps> = ({setEditMode, trajnim: initialFormState, editTrajnim, createTrajnim, submitting}) => {
    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState
        }
        else {
            return {
                trajnimId: '',
                trajnimEmri: '',
                pershkrimi: '',
                numriDiteve: ''
            }
        }
    }

    const [trajnim, setTrajnim] = useState<ITrajnim>(initializeForm);

    const handleSubmit = () => { 
        if(trajnim.trajnimId === ''){
            let newTrajnim = {
                 ...trajnim,
                 trajnimId: uuid()
            }
 
 
            createTrajnim(newTrajnim);
        }
        else{
            editTrajnim(trajnim);
        }
     }
 
     const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
         const {name, value} = event.currentTarget;
         setTrajnim({...trajnim, [name]: value});
     }
    
    return (
    <Segment clearing>
        <Grid>
        <Form onSubmit={handleSubmit} style={{padding:'20px', width:'100%'}}>
        <Form.Input onChange={handleInputChange} name='numriDiteve' placeholder='Numri I Diteve' value={trajnim.numriDiteve} />
            <Form.Input onChange={handleInputChange}  name='trajnimEmri' placeholder='Emri' value={trajnim.trajnimEmri} />
            <Form.Input onChange={handleInputChange} name='pershkrimi' placeholder='Pershkrimi' value={trajnim.pershkrimi} />
            
            <Button loading={submitting} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={() => setEditMode(false)} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
}

export default TrajnimForm;
