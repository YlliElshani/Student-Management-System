import { observer } from 'mobx-react-lite';
import React from 'react'
import { Grid, Button, Segment } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store';


export default function QytetiDetails ()  {
    const {qytetiStore} = useStore();
    const {selectedQyteti: qyteti, openForm, cancelSelectedQyteti} = qytetiStore;
    
    return (
        <Segment>
         <Grid key={qyteti!.id} columns={1} divided>
            <Grid.Row stretched>
            <Grid.Column>
                <Segment>{qyteti!.emri}</Segment>
                <Segment>{qyteti!.shteti}</Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Button.Group>
                <Button onClick={() => openForm(qyteti?.id)}  basic color='blue' content='Ndrysho'/>
                <Button onClick={cancelSelectedQyteti} basic color='grey' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
}

