import React, {FormEvent, useState} from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import {combineValidators, composeValidators, hasLengthGreaterThan, isRequired} from 'revalidate';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/stores/store';

const validate = combineValidators({
    name: isRequired({message: 'The competition name is required'}),
    description: composeValidators(
        isRequired('Name'), hasLengthGreaterThan(4)({message: 'Description needs to be at least 5 characters'}))(),
    field: isRequired('Field'),
    awards: isRequired('Awards')
})

export default observer(function CompetitionForm() {
    const {competitionStore} = useStore();
    const {selectedCompetition, closeForm, createCompetition, updateCompetition, loading} = competitionStore;

    const initialState = selectedCompetition ??  {
        competitionId: '',
        name: '',
        date: '',
        description: '',
        field: '',
        awards: ''
    }

    const [competition, setCompetition] = useState(initialState);

    function handleSubmit (){ 
        competition.competitionId ? updateCompetition(competition) : createCompetition(competition);
    }
 
    function handleInputChange (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>){
         const {name, value} = event.currentTarget;
         setCompetition({...competition, [name]: value});
    }
    
    return (
    <Segment clearing>
        <Grid>
        <Form validate={validate} onSubmit={handleSubmit} style={{padding:'20px', width:'100%'}}>
            <Form.Input onChange={handleInputChange}  name='name' placeholder='Name' value={competition.name} />
            <Form.Input type='date' onChange={handleInputChange} name='date' placeholder='Date' value={competition.date} />
            <Form.TextArea rows={5} onChange={handleInputChange} name='description' placeholder='Description' value={competition.description} />
            <Form.Input onChange={handleInputChange} name='field' placeholder='Field' value={competition.field}/>
            <Form.Input onChange={handleInputChange} name='awards' placeholder='Awards' value={competition.awards}/>
            <Button loading={loading} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
})

