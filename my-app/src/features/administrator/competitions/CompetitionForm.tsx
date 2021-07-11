import React, {FormEvent, useState} from 'react'
import { Button, Form, Grid, Label, Segment } from 'semantic-ui-react'
import {combineValidators, composeValidators, hasLengthGreaterThan, isRequired} from 'revalidate';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/stores/store';
import axios from 'axios';
import {ILenda} from '../../../app/models/lenda';

const validate = combineValidators({
    name: isRequired({message: 'The competition name is required'}),
    description: composeValidators(
        isRequired('Name'), hasLengthGreaterThan(4)({message: 'Description needs to be at least 5 characters'}))(),
    field: isRequired('Field'),
    awards: isRequired('Awards')
})

export default observer(function CompetitionForm() {
    const {competitionStore, modalStore} = useStore();
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

    const [lendetData, setLendet]=React.useState<ILenda[]>([]);
    const [selected, setSelected] = React.useState("");

    
    React.useEffect(()=>{
        axios
        .get(('https://localhost:5000/api/lendet'))
        .then((res)=>setLendet(res.data));
    },[])


    function changeSelectOptionHandler(event: { target: { value: any; name?: any; }; }) {
        setSelected(event.target.value);
        const { name, value } = event.target;
        setCompetition({ ...competition, [name]: value });
      }
    
    return (
    <Segment clearing>
        <Grid>
        <Label style={{marginLeft:'3em', fontSize:'15pt', background:'none'}}  content='Competitions' />
        <Form validate={validate} onSubmit={handleSubmit} style={{padding:'20px', width:'100%'}}>
            <Form.Input onChange={handleInputChange}  name='name' placeholder='Name' value={competition.name} />
            <Form.Input type='date' onChange={handleInputChange} name='date' placeholder='Date' value={competition.date} />
            <Form.TextArea rows={5} onChange={handleInputChange} name='description' placeholder='Description' value={competition.description} />
            <select onChange={changeSelectOptionHandler} name='field' placeholder='Field' value={competition.field}>
                {lendetData.map(lenda=>(
                    <option key={lenda.lendaId}>{lenda.emri}</option>
                ) )}
            </select>
            <Form.Input style={{marginTop:'20px'}} onChange={handleInputChange} name='awards' placeholder='Awards' value={competition.awards}/>
            <Button loading={loading} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={modalStore.closeModal} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
})

