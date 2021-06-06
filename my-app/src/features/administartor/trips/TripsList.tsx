import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Container, Grid, Item, Segment } from 'semantic-ui-react'
import agent from '../../../app/api/agent'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { ITrip } from '../../../app/models/trip'
import { NavBar } from '../../nav/NavBar'
import { AdminNavBar } from '../AdminNavBar'
import TripDetails from './TripDetails'
import TripForm from './TripForm'

export const TripsList:React.FC = () => {
    const [trips, setTrips] = useState<ITrip[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedTrip, setSelectedTrip] = useState<ITrip | null>(null);
    const [editMode, setEditMode] = useState (false);
    const [submitting, setSubmitting] = useState(false);
    const [target, setTarget] = useState('');
    
    const handleSelectTrip = (id: string) => {
        setSelectedTrip(trips.filter(a => a.tripId === id)[0])
    }

    const handleOpenCreateForm = () =>{
        setSelectedTrip(null);
        setEditMode(true);
    }

    const handleCreateTrip = (trip: ITrip) => {
        setSubmitting(true);
        agent.Trips.createTrip(trip).then(() => {
        setTrips([...trips, trip]);
        setSelectedTrip(trip);
        setEditMode(false);
        }).then(() => setSubmitting(false))
    }

    const handleEditTrip = (trip: ITrip) => { 
        setSubmitting(true);
        agent.Trips.updateTrip(trip).then(() => {
          setTrips([...trips.filter(a=> a.tripId !== trip.tripId), trip])
          setSelectedTrip(trip);
          setEditMode(false);
        }).then(() => setSubmitting(false))
      }
    
    const handleDeleteTrip = (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setSubmitting(true);
        setTarget(event.currentTarget.name)
        agent.Trips.deleteTrip(id).then(() => {
              setTrips([...trips.filter(a => a.tripId !==id)])
        }).then(() => setSubmitting(false))
    }

    useEffect(()=>{
        agent.Trips.tripsList().then((response) => { 
          let trips: ITrip[] = []; 
          response.forEach((trip) => {
            trips.push(trip);
          })
          setTrips(trips);
        }).then(() => setLoading(false));
      }, []); 
    
    if(loading) return <LoadingComponent content='Loading Trips'/>
    return (
        <Container>
            <NavBar/>
            <AdminNavBar />
            <Grid>
            <Grid.Column width='6'>
                <Segment>
                    <Button onClick={handleOpenCreateForm} content='Shto Shëtitjen'/>
                        <Item.Group divided>
                            {trips.map((trip) => (
                            <Item key={trip.tripId}>
                                <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                <Item.Content inverted="true">
                                <Item.Header >{trip.name}</Item.Header>
                                <Item.Meta>{trip.place}</Item.Meta>
                                <Item.Extra>
                                    <Button onClick={() => handleSelectTrip(trip.tripId)} size='mini' floated='right' content='Shiko Detajet'/>
                                    <Button name={trip.tripId} loading={target === trip.tripId && submitting} onClick={(e) => handleDeleteTrip(e, trip.tripId)} size='mini' floated='right' content='Fshij Shëtitjen' />
                                </Item.Extra>
                                </Item.Content>
                            </Item>
                            ))}
                        </Item.Group>
                </Segment>
                </Grid.Column>
                <Grid.Column width='6'>
                    {selectedTrip && !editMode && (<TripDetails setSelectedTrip={setSelectedTrip} trip={selectedTrip} setEditMode={setEditMode}/>)}
                    {editMode && <TripForm setEditMode={setEditMode} trip={selectedTrip!} createTrip={handleCreateTrip} editTrip={handleEditTrip} submitting={submitting}/>}
                </Grid.Column>
            </Grid>
        </Container>
    )
}
