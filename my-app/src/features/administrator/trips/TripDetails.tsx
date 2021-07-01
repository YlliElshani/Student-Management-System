import { observer } from 'mobx-react-lite';
import React from 'react'
import { Grid, Button, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';


export default observer( function TripDetails ()  {
    const {tripStore} = useStore();
    const {selectedTrip: trip, openForm, cancelSelectedTrip} = tripStore;
    
    return (
        <Segment>
         <Grid key={trip!.tripId} columns={1} divided>
            <Grid.Row stretched>
            <Grid.Column>
                <Segment>{trip!.name}</Segment>
                <Segment>{trip!.place}</Segment>
                <Segment>{trip!.date}</Segment>
            </Grid.Column>
            <Grid.Column>
                <br/>
                <Segment>{trip!.description}</Segment>
                <Segment>{trip!.participants}</Segment>
                <Segment>{trip!.price}</Segment>
                <Segment>{trip!.user}</Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Button.Group>
                <Button onClick={() => openForm(trip?.tripId)}  basic color='blue' content='Ndrysho'/>
                <Button onClick={cancelSelectedTrip} basic color='grey' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
}
)
