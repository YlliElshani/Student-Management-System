import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Container, Grid, Item, Segment } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'

import { NavBar } from '../../nav/NavBar'
import { AdminNavBar } from '../AdminNavBar'
import TripDetails from './TripDetails'
import TripForm from './TripForm'

export default observer(function TripsList () {

    const {tripStore} = useStore();
    const {selectedTrip, editMode} = tripStore;
    const {deleteTrip, tripsByDate, loading} = tripStore;

    const [target, setTarget] = useState('');
    
    useEffect(()=>{
        tripStore.loadTrips();
      }, [tripStore]); 
    
    if(tripStore.loadingInitial) return <LoadingComponent content='Loading Trips'/>
    
    function handleDeleteTrip(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteTrip(id);
    }

    return (
        <Container>
            <NavBar/>
            <AdminNavBar />
            <Grid>
            <Grid.Column width='6'>
                <Segment>
                    <Button onClick={() => tripStore.openForm()} content='Shto Shëtitjen'/>
                        <Item.Group divided>
                            {tripsByDate.map((trip) => (
                            <Item key={trip.tripId}>
                                <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                <Item.Content inverted="true">
                                <Item.Header >{trip.name}</Item.Header>
                                <Item.Meta>{trip.place}</Item.Meta>
                                <Item.Extra>
                                    <Button onClick={() => tripStore.selectTrip(trip.tripId)} size='mini' floated='right' content='Shiko Detajet'/>
                                    <Button name={trip.tripId} loading={loading && target === trip.tripId} onClick={(e) => handleDeleteTrip(e, trip.tripId)} size='mini' floated='right' content='Fshij Shëtitjen' />
                                </Item.Extra>
                                </Item.Content>
                            </Item>
                            ))}
                        </Item.Group>
                </Segment>
                </Grid.Column>
                <Grid.Column width='6'>
                    {selectedTrip && !editMode && 
                    <TripDetails />}
                    {editMode && <TripForm/>}
                </Grid.Column>
            </Grid>
        </Container>
    )
})
