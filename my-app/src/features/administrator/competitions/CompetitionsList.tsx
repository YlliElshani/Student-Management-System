import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Item, Segment } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import AdminNavBar from '../AdminNavBar'

import CompetitionDetails from './CompetitionDetails'
import CompetitionForm from './CompetitionForm'

export default observer(function CompetitionsList() {
    const {competitionStore, modalStore} = useStore();
    const { deleteCompetition, competitionsByDate, loading} = competitionStore;

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
        <Grid >
            <Grid.Column width='4'>
                <AdminNavBar />
            </Grid.Column>
            <Segment style={{width:'65%', marginTop:'5em', marginLeft:'5em'}}>
            <Grid.Column style={{ padding:'20px'}}>
                <Button size='mini' basic onClick={() =>{modalStore.openModal(<CompetitionForm/>); competitionStore.cancelSelectedCompetition()}} content='Shto Garën'/>
                    <Item.Group divided>
                        {competitionsByDate.map((competition) => (
                        <Item key={competition.competitionId}>
                            <Item.Content inverted="true">
                            <Item.Header >{competition.name}</Item.Header>
                            <Item.Meta>{competition.field}</Item.Meta>
                            <Item.Extra>
                                <Button basic onClick={() => {competitionStore.selectCompetition(competition.competitionId); modalStore.openModal(<CompetitionDetails/>)}} size='mini' floated='right' content='Shiko Detajet'/>
                                <Button basic name={competition.competitionId} loading={loading && target === competition.competitionId} onClick={(e) => handleDeleteCompetition(e, competition.competitionId)} size='mini' floated='right' content='Fshij Garën' />
                            </Item.Extra>
                            </Item.Content>
                        </Item>
                        ))}
                    </Item.Group>
            </Grid.Column>
            </Segment>
        </Grid>
                
    )
})
