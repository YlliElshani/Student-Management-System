import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Item } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import AdminNavBar from '../AdminNavBar'

import CompetitionDetails from './CompetitionDetails'
import CompetitionForm from './CompetitionForm'

export default observer(function CompetitionsList() {
    const {competitionStore} = useStore();
    const {selectedCompetition, editMode} = competitionStore;
    const {deleteCompetition, competitionsByDate, loading} = competitionStore;

    const [target, setTarget] = useState('');
    
    useEffect(()=>{
        competitionStore.loadCompetitions();
      }, [competitionStore]); 
    
    if(competitionStore.loadingInitial) return <LoadingComponent content='Loading Competitions ...'/>
    
    function handleDeleteCompetition(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteCompetition(id);
    }
    
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='4'>
                    <AdminNavBar />
                </Grid.Column>
                <Grid.Column width='5' style={{marginTop:'5em', marginLeft:"3em"}}>
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
                </Grid.Column>
                <Grid.Column width='4' style={{marginTop:'3em'}}>
                    {selectedCompetition && !editMode && <CompetitionDetails />}
                    {editMode && <CompetitionForm />}
                </Grid.Column>
                </Grid.Row>
        </Grid>
                
    )
})
