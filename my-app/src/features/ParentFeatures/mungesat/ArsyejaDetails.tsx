import { observer } from 'mobx-react-lite';
import { Grid, Button, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';


export default observer (function ArsyejaDetails ()  {
    const {arsyejaStore} = useStore();
    const {selectedArsyeja: arsyeja, openForm, cancelSelectedArsyeja} = arsyejaStore;
    
    return (
        <Segment>
         <Grid key={arsyeja!.id} columns={1} divided>
            <Grid.Row stretched>
            <Grid.Column>
                <Segment>{arsyeja!.arsyejaMungeses}</Segment>
                <Segment>{arsyeja!.nrDiteve}</Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Button.Group>
                <Button onClick={() => openForm(arsyeja?.id)}  basic color='blue' content='Ndrysho'/>
                <Button onClick={cancelSelectedArsyeja} basic color='grey' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
})

