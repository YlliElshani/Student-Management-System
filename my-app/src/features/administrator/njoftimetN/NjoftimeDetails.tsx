import { observer } from 'mobx-react-lite';
import { Grid, Button, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';


export default observer (function NjoftimeDetails ()  {
    const {njoftimeStore} = useStore();
    const {selectedNjoftimi: njoftim, openForm, cancelSelectedNjoftimi} = njoftimeStore;
    
    return (
        <Segment>
         <Grid key={njoftim!.id} columns={1} divided>
            <Grid.Row stretched>
            <Grid.Column>
                <Segment>{njoftim!.njoftimi}</Segment>
                <Segment>{njoftim!.dataENjoftimit}</Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Button.Group>
                <Button onClick={() => openForm(njoftim?.id)}  basic color='blue' content='Ndrysho'/>
                <Button onClick={cancelSelectedNjoftimi} basic color='grey' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
})

