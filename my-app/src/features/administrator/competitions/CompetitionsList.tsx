import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Container, Grid, Item, Segment } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import { NavBar } from '../../nav/NavBar'
import { AdminNavBar } from '../AdminNavBar'
import CompetitionDetails from './CompetitionDetails'
import CompetitionForm from './CompetitionForm'

export const CompetitionsList:React.FC = () => {
    const {competitionStore} = useStore();
    const {selectedCompetition, editMode} = competitionStore;
    const {deleteCompetition, competitionsByDate, loading} = competitionStore;

    const [target, setTarget] = useState('');
    
    useEffect(()=>{
        competitionStore.loadCompetitions();
      }, [competitionStore]); 
    
    //if(competitionStore.loadingInitial) return <LoadingComponent content='Loading Competitions'/>
    
    function handleDeleteCompetition(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteCompetition(id);
    }
    
    return (
        <Container>
            <NavBar/>
            <AdminNavBar />
            <Grid>
            <Grid.Column width='6'>
                <Segment>
                    <Button onClick={() => competitionStore.openForm} content='Shto Garën'/>
                        <Item.Group divided>
                            {competitionsByDate.map((competition) => (
                            <Item key={competition.competitionId}>
                                <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                <Item.Content inverted="true">
                                <Item.Header >{competition.name}</Item.Header>
                                <Item.Meta>{competition.field}</Item.Meta>
                                <Item.Extra>
                                    <Button onClick={() => competitionStore.selectCompetition(competition.competitionId)} size='mini' floated='right' content='Shiko Detajet'/>
                                    <Button name={competition.competitionId} loading={loading && target === competition.competitionId} onClick={(e) => handleDeleteCompetition(e, competition.competitionId)} size='mini' floated='right' content='Fshij Garën' />
                                </Item.Extra>
                                </Item.Content>
                            </Item>
                            ))}
                        </Item.Group>
                </Segment>
                </Grid.Column>
                <Grid.Column width='6'>
                    {selectedCompetition && !editMode && <CompetitionDetails />}
                    {editMode && <CompetitionForm />}
                </Grid.Column>
            </Grid>
        </Container>
    )
}
