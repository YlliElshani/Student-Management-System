import { observer } from 'mobx-react-lite';
import React from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

export default observer (function TrajnimDetails ()  {
    const {trajnimStore} = useStore();
    const {selectedTrajnim: trajnim, openForm, cancelSelectedTrajnim} = trajnimStore;
    
    return (
        <Segment style={{width:'300px'}}>
         <Grid key={trajnim!.trajnimId} columns={1} divided>
            <Grid.Row stretched>
            <Grid.Column>
                <Segment>{trajnim!.trajnimEmri}</Segment>
                <Segment>{trajnim!.pershkrimi}</Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Button.Group>
                <Button onClick={() => openForm(trajnim?.trajnimId)}  basic color='blue' content='Ndrysho'/>
                <Button onClick={cancelSelectedTrajnim} basic color='grey' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
})

