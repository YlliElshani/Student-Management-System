import { observer } from 'mobx-react-lite';
import React from 'react'
import { Grid, Button, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';

export default observer( function CompetitionDetails () {
    const {competitionStore} = useStore();
    const {selectedCompetition: competition, openForm, cancelSelectedCompetition} = competitionStore;

    return (
        <Segment>
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
        <Button.Group>
                <Button onClick={() => openForm(competition?.competitionId)}  basic color='blue' content='Ndrysho'/>
                <Button onClick={cancelSelectedCompetition} basic color='grey' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
}
)