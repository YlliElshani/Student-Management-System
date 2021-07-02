import { observer } from 'mobx-react-lite';
import React from 'react'
import { Grid, Button, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';


export default observer( function SallaDetails ()  {
    const {sallaStore} = useStore();
    const {selectedSalla: salla, openForm, cancelSelectedSalla} = sallaStore;
    
    return (
        <Segment>
         <Grid key={salla!.sallaId} columns={1} divided>
            <Grid.Row stretched>
            <Grid.Column>
                <Segment>{salla!.emri}</Segment>
                <Segment>{salla!.kapaciteti}</Segment>
                <Segment>{salla!.statusi}</Segment>
            </Grid.Column>
            <Grid.Column>
                <br/>
                <Segment>{salla!.dataRezervimit}</Segment>
                <Segment>{salla!.oraRezervimit}</Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Button.Group>
                <Button onClick={() => openForm(salla?.sallaId)}  basic color='blue' content='Ndrysho'/>
                <Button onClick={cancelSelectedSalla} basic color='grey' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
}
)
