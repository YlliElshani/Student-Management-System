import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Container, Grid, Item, Segment } from 'semantic-ui-react'
import agent from '../../../app/api/agent'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { ICompetition } from '../../../app/models/competition'
import { NavBar } from '../../nav/NavBar'
import { AdminNavBar } from '../AdminNavBar'
import CompetitionDetails from './CompetitionDetails'
import CompetitionForm from './CompetitionForm'

export const CompetitionsList:React.FC = () => {
    const [competitions, setCompetitions] = useState<ICompetition[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCompetition, setSelectedCompetition] = useState<ICompetition | null>(null);
    const [editMode, setEditMode] = useState (false);
    const [submitting, setSubmitting] = useState(false);
    const [target, setTarget] = useState('');
    
    const handleSelectCompetition = (id: string) => {
        setSelectedCompetition(competitions.filter(a => a.competitionId === id)[0])
    }

    const handleOpenCreateForm = () =>{
        setSelectedCompetition(null);
        setEditMode(true);
    }

    const handleCreatCompetition = (competition: ICompetition) => {
        setSubmitting(true);
        agent.Competitions.createCompetition(competition).then(() => {
        setCompetitions([...competitions, competition]);
        setSelectedCompetition(competition);
        setEditMode(false);
        }).then(() => setSubmitting(false))
    }

    const handleEditCompetition = (competition: ICompetition) => { 
        setSubmitting(true);
        agent.Competitions.updateCompetition(competition).then(() => {
          setCompetitions([...competitions.filter(a=> a.competitionId !== competition.competitionId), competition])
          setSelectedCompetition(competition);
          setEditMode(false);
        }).then(() => setSubmitting(false))
      }
    
    const handleDeleteCompetition = (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setSubmitting(true);
        setTarget(event.currentTarget.name)
        agent.Competitions.deleteCompetition(id).then(() => {
              setCompetitions([...competitions.filter(a => a.competitionId !==id)])
        }).then(() => setSubmitting(false))
    }

    useEffect(()=>{
        agent.Competitions.competitionsList().then((response) => { 
          let competitions: ICompetition[] = []; 
          response.forEach((competition) => {
            competitions.push(competition);
          })
          setCompetitions(competitions);
        }).then(() => setLoading(false));
      }, []); 
    
    if(loading) return <LoadingComponent content='Ju lutem prisni pak!'/>
    return (
        <Container>
            <NavBar/>
            <AdminNavBar />
            <Grid>
            <Grid.Column width='6'>
                <Segment>
                    <Button onClick={handleOpenCreateForm} content='Shto Garën'/>
                        <Item.Group divided>
                            {competitions.map((competition) => (
                            <Item key={competition.competitionId}>
                                <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                <Item.Content inverted="true">
                                <Item.Header >{competition.name}</Item.Header>
                                <Item.Meta>{competition.field}</Item.Meta>
                                <Item.Extra>
                                    <Button onClick={() => handleSelectCompetition(competition.competitionId)} size='mini' floated='right' content='Shiko Detajet'/>
                                    <Button name={competition.competitionId} loading={target === competition.competitionId && submitting} onClick={(e) => handleDeleteCompetition(e, competition.competitionId)} size='mini' floated='right' content='Fshij Garën' />
                                </Item.Extra>
                                </Item.Content>
                            </Item>
                            ))}
                        </Item.Group>
                </Segment>
                </Grid.Column>
                <Grid.Column width='6'>
                    {selectedCompetition && !editMode && (<CompetitionDetails setSelectedCompetition={setSelectedCompetition} competition={selectedCompetition} setEditMode={setEditMode}/>)}
                    {editMode && <CompetitionForm key={selectedCompetition && selectedCompetition.competitionId || 0} setEditMode={setEditMode} competition={selectedCompetition!} createCompetition={handleCreatCompetition} editCompetition={handleEditCompetition} submitting={submitting}/>}
                </Grid.Column>
            </Grid>
        </Container>
    )
}
