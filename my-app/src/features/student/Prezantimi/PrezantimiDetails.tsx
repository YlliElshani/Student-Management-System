import { observer } from 'mobx-react-lite';
import { Grid, Button, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';


export default observer(function PrezantimiDetails ()  {
    const {prezantimiStore} = useStore();
    const {selectedPrezantimi: prezantimi, openForm, cancelSelectedPrezantimi} = prezantimiStore;
    
    return (
        <Segment>
            <Grid key={prezantimi!.prezantimiId} columns={1} divided>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Segment>{prezantimi!.prezantimiInfo}</Segment>
                        <Segment>{prezantimi!.kohezgjatja}</Segment>
                        <Segment>{prezantimi!.lenda}</Segment>
                        <Segment>{prezantimi!.profesori}</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <br/>
                        <Segment>{prezantimi!.salla}</Segment>
                        <Segment>{prezantimi!.data}</Segment>
                        <Segment>{prezantimi!.ora}</Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Button.Group>
                <Button onClick={() => openForm(prezantimi?.prezantimiId)}  basic color='blue' content='Ndrysho'/>
                <Button onClick={cancelSelectedPrezantimi} basic color='red' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
}) 
