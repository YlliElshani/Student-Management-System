import { observer } from 'mobx-react-lite';
import React from 'react'
import { Grid, Button, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';


export default observer (function KerkeseNDetailsView ()  {
    const {kerkesNdihmeStore} = useStore();
    const {selectedKerkese: kerkesa, openForm, cancelSelectedKerkese} = kerkesNdihmeStore;
    
    return (
        <Segment>
         <Grid key={kerkesa!.id} columns={1} divided>
            <Grid.Row stretched>
            <Grid.Column>
                <Segment>{kerkesa!.kerkesaInfo}</Segment>
                <Segment>{kerkesa!.dataECaktuar}</Segment>
                <Segment>{kerkesa!.displayName}</Segment>
                <Segment>{kerkesa!.emri}</Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <br/>
        <Button.Group>
                <Button onClick={cancelSelectedKerkese} basic color='grey' content='Mbyll'/>
            </Button.Group>
        </Segment>
    )
})

