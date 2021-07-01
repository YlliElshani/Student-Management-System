import { observer } from 'mobx-react-lite';
import React from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

export default observer (function DetyraDetails ()  {
    const {detyraStore} = useStore();
    const {selectedDetyra: detyra, openForm, cancelSelectedDetyra} = detyraStore;
    
    return (
        <Segment style={{width:'300px'}}>
         <Grid key={detyra!.detyraId} columns={1} divided>
            <Grid.Row stretched>
            <Grid.Column>
                <Segment>{detyra!.detyraEmri}</Segment>
                <Segment>{detyra!.pershkrimi}</Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Button.Group>
                <Button onClick={() => openForm(detyra?.detyraId)}  basic color='blue' content='Ndrysho'/>
                <Button onClick={cancelSelectedDetyra} basic color='grey' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
})
