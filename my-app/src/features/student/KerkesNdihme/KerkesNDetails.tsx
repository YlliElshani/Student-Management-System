import { observer } from 'mobx-react-lite';
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
                <Segment>{kerkesa!.displayName}</Segment>
                <Segment>{kerkesa!.emri}</Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <br/>
        <Button.Group>
                <Button onClick={() => openForm(kerkesa?.id)}  basic color='blue' content='Ndrysho'/>
                <Button onClick={cancelSelectedKerkese} basic color='grey' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
})

