import React from 'react'
import { Grid, Button, Segment } from 'semantic-ui-react'
import { ITrip } from '../../../app/models/trip';


interface IProps {
   trip: ITrip
   setEditMode: (editMode: boolean)=>void;
   setSelectedTrip: (trip: ITrip | null)=>void;
}


const TripDetails:React.FC<IProps> = ({trip, setEditMode, setSelectedTrip}) => {
    return (
        <Segment>
         <Grid key={trip.tripId} columns={1} divided>
            <Grid.Row stretched>
            <Grid.Column>
                <Segment>{trip.name}</Segment>
                <Segment>{trip.place}</Segment>
                <Segment>{trip.date}</Segment>
            </Grid.Column>
            <Grid.Column>
                <br/>
                <Segment>{trip.description}</Segment>
                <Segment>{trip.participants}</Segment>
                <Segment>{trip.price}</Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Button.Group>
                <Button onClick={() => setEditMode(true)}  basic color='blue' content='Ndrysho'/>
                <Button onClick={() => setSelectedTrip(null)} basic color='grey' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
}

export default TripDetails;