import { observer } from 'mobx-react-lite';
import React from 'react'
import { Grid, Button, Segment } from 'semantic-ui-react'
import { IKoheZ } from '../../app/models/kOres';
import { useStore } from '../../app/stores/store';


export default observer (function PlaniMDetails ()  {
    const {pMesimorStore} = useStore();
    const {selectedPlaniM: planiM, openForm, cancelSelectedPlaniM} = pMesimorStore;

    
    return (
        <Segment>
         <Grid key={planiM!.id} columns={1} divided>
            <Grid.Row stretched>
            <Grid.Column>
                <Segment>{planiM!.planiInfo}</Segment>
                <Segment>{planiM!.kriteriPlotsimit}</Segment>
                <Segment>{planiM!.lendaId}</Segment>
                <br/>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Button.Group>
                <Button onClick={() => openForm(planiM?.id)}  basic color='blue' content='Ndrysho'/>
                <Button onClick={cancelSelectedPlaniM} basic color='grey' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
})

