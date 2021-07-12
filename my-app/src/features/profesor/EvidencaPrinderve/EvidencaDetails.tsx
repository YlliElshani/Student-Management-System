import { observer } from 'mobx-react-lite';
import { Grid, Button, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';


export default observer (function EvidencaDetails ()  {
    const {evidencaStore} = useStore();
    const {selectedEvidenca: ev, openForm, cancelSelectedEvidence} = evidencaStore;

    
    return (
        <Segment>
         <Grid key={ev!.id} columns={1} divided>
            <Grid.Row stretched>
            <Grid.Column>
                <Segment>{ev!.evidencaInfo}</Segment>
                <Segment>{ev!.displayName}</Segment>
                <Segment>{ev!.displayName2}</Segment>
                <br/>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Button.Group>
                <Button onClick={() => openForm(ev?.id)}  basic color='blue' content='Ndrysho'/>
                <Button onClick={cancelSelectedEvidence} basic color='grey' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
})

