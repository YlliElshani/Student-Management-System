import { observer } from 'mobx-react-lite';
import React from 'react'
import { Grid, Button, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';


export default observer (function KerkeseNDetails ()  {
    const {kerkesNdihmeStore} = useStore();
    const {selectedKerkese: kerkesa, openForm, cancelSelectedKerkese} = kerkesNdihmeStore;
    
    return (
        <Segment>
         <Grid key={kerkesa!.id} columns={1} divided>
            <Grid.Row stretched>
            <Grid.Column>
                <Segment>{kerkesa!.kerkesaInfo}</Segment>
                <Segment>{kerkesa!.dataECaktuar}</Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Button.Group>
                <Button onClick={() => openForm(kerkesa?.id)}  basic color='blue' content='Ndrysho'/>
                <Button onClick={cancelSelectedKerkese} basic color='grey' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
})

