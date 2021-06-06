import React, {FormEvent, useState} from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import {v4 as uuid} from 'uuid';
import { ICompetition } from '../../../app/models/competition';

interface IProps {
    setEditMode: (editMode: boolean) => void;
    competition: ICompetition
    createCompetition: (competition: ICompetition) => void;
    editCompetition: (competition: ICompetition) => void;
    submitting: boolean;
}

const CompetitionForm:React.FC<IProps> = ({setEditMode, competition: initialFormState, editCompetition, createCompetition, submitting}) => {
    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState
        }
        else {
            return {
                competitionId: '',
                name: '',
                date: '',
                description: '',
                field: '',
                awards: ''
            }
        }
    }

    const [competition, setCompetition] = useState<ICompetition>(initializeForm);

    const handleSubmit = () => { 
        if(competition.competitionId === ''){
            let newCompetition = {
                 ...competition,
                 competitionId: uuid()
            }
 
 
            createCompetition(newCompetition);
        }
        else{
            editCompetition(competition);
        }
     }
 
     const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
         const {name, value} = event.currentTarget;
         setCompetition({...competition, [name]: value});
     }
    
    return (
    <Segment clearing>
        <Grid>
        <Form onSubmit={handleSubmit} style={{padding:'20px', width:'100%'}}>
            <Form.Input onChange={handleInputChange}  name='name' placeholder='Name' value={competition.name} />
            <Form.Input type='date' onChange={handleInputChange} name='date' placeholder='Date' value={competition.date} />
            <Form.TextArea rows={5} onChange={handleInputChange} name='description' placeholder='Description' value={competition.description} />
            <Form.Input onChange={handleInputChange} name='field' placeholder='Field' value={competition.field}/>
            <Form.Input onChange={handleInputChange} name='awards' placeholder='Awards' value={competition.awards}/>
            <Button loading={submitting} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={() => setEditMode(false)} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
}

export default CompetitionForm;

