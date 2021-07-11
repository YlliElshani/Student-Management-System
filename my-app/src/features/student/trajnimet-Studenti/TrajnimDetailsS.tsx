import { observer } from 'mobx-react-lite';
import React from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

export default observer (function TrajnimDetailsS ()  {
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
        </Segment>
    )
})

