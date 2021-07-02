import { observer } from 'mobx-react-lite';
import React from 'react'
import { Grid, Button, Segment } from 'semantic-ui-react'
import { IKoheZ } from '../../app/models/kOres';
import { useStore } from '../../app/stores/store';


export default observer (function KohaZDetails ()  {
    const {koheZStore} = useStore();
    const {selectedkoheZ: kohaZ, openForm, cancelSelectedKOheZ} = koheZStore;

    
    return (
        <Segment>
         <Grid key={kohaZ!.id} columns={1} divided>
            <Grid.Row stretched>
            <Grid.Column>
                <Segment>{kohaZ!.kohaMin}</Segment>
                <Segment>{kohaZ!.oraNisjes}</Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Button.Group>
                <Button onClick={() => openForm(kohaZ?.id)}  basic color='blue' content='Ndrysho'/>
                <Button onClick={cancelSelectedKOheZ} basic color='grey' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
})

