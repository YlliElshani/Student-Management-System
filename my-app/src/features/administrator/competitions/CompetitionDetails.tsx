import { observer } from 'mobx-react-lite';
import React from 'react'
import { Grid, Button, Segment, Label } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';
import CompetitionForm from './CompetitionForm';

export default observer( function CompetitionDetails () {
    const {competitionStore, modalStore} = useStore();
    const {selectedCompetition: competition} = competitionStore;

    return (
        <Segment>
            <Label style={{marginLeft:'3em', fontSize:'15pt', background:'none'}}  content='Competitions' />
         <Grid key={competition!.competitionId} columns={1} divided>
            <Grid.Row stretched>
            <Grid.Column>
                <Segment>{competition!.name}</Segment>
                <Segment>{competition!.field}</Segment>
                <Segment>{competition!.date}</Segment>
            </Grid.Column>
            <Grid.Column>
                <br/>
                <Segment>{competition!.description}</Segment>
                <Segment>{competition!.awards}</Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Button.Group style={{marginTop:'20px'}}>
                <Button onClick={() => modalStore.openModal(<CompetitionForm/>)}  basic color='blue' content='Ndrysho'/>
                <Button onClick={modalStore.closeModal} basic color='grey' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
}
)