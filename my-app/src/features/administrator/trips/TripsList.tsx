import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Item } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import AdminNavBar from '../AdminNavBar'

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
    
    if(tripStore.loadingInitial) return <LoadingComponent content='Loading Trips ...'/>
    
    function handleDeleteTrip(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteTrip(id);
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='4'>
                    <AdminNavBar />
                </Grid.Column>
                <Grid.Column width='5' style={{marginTop:'5em', marginLeft:"3em"}}>
                    <Button size='mini' basic onClick={() => tripStore.openForm()} content='Shto Shëtitjen'/>
                    <Item.Group divided>
                        {tripsByDate.map((trip) => (
                        <Item key={trip.tripId}>
                            <Item.Content inverted="true">
                            <Item.Header >{trip.name}</Item.Header>
                            <Item.Meta>{trip.place}</Item.Meta>
                            <Item.Meta>{trip.user}</Item.Meta>
                            <Item.Extra>
                                <Button size='mini' basic onClick={() => tripStore.selectTrip(trip.tripId)}  floated='right' content='Shiko Detajet'/>
                                <Button size='mini' basic name={trip.tripId} loading={loading && target === trip.tripId} onClick={(e) => handleDeleteTrip(e, trip.tripId)}  floated='right' content='Fshij Shëtitjen' />
                            </Item.Extra>
                            </Item.Content>
                        </Item>
                        ))}
                    </Item.Group>
                </Grid.Column>
                <Grid.Column  width='4' style={{marginTop:'3em'}}>
                    {selectedTrip && !editMode && 
                    <TripDetails />}
                    {editMode && <TripForm/>}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})
