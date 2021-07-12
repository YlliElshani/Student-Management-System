import { observer } from 'mobx-react-lite';
import { Button, Grid, Segment } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';

export default observer (function PeriodaDetails ()  {
    const {periodaStore} = useStore();
    const {selectedPerioda: perioda, openForm, cancelSelectedPerioda} = periodaStore;
    
    return (
        <Segment style={{width:'300px'}}>
         <Grid key={perioda!.periodaId} columns={1} divided>
            <Grid.Row stretched>
            <Grid.Column>
                <Segment>{perioda!.emri}</Segment>
                <Segment>{perioda!.fillimi}</Segment>
                <Segment>{perioda!.mbarimi}</Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Button.Group>
                <Button onClick={() => openForm(perioda?.periodaId)}  basic color='blue' content='Ndrysho'/>
                <Button onClick={cancelSelectedPerioda} basic color='grey' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
})

