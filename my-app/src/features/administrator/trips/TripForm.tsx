import { observer } from 'mobx-react-lite';
import React, {ChangeEvent, useState} from 'react'
import { combineValidators, composeValidators, hasLengthGreaterThan, isRequired } from 'revalidate';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';

const validate = combineValidators({
    name: isRequired({message: 'The competition name is required'}),
    place: isRequired('Place'),
    description: composeValidators(
        isRequired('Name'), hasLengthGreaterThan(4)({message: 'Description needs to be at least 5 characters'}))(),
    patricipants: isRequired('Participants'),
    price: isRequired('Price')
})


export default observer(function TripForm() {
    const {tripStore} = useStore();
    const {selectedTrip, closeForm, createTrip, updateTrip, loading} = tripStore;

    const initialState = selectedTrip ?? {
        tripId: '',
        name: '',
        place: '',
        date: '',
        description: '',
        participants: '',
        price: ''
    }
    

    const [trip, setTrip] = useState(initialState);

    function handleSubmit () { 
        trip.tripId ? updateTrip(trip) : createTrip(trip);
     }
 
    function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.currentTarget;
        setTrip({...trip, [name]: value});
    }
    
    return (
    <Segment clearing>
        <Grid>
        <Form validate={validate} onSubmit={handleSubmit} autoComplete='off' style={{padding:'20px', width:'100%'}}>
            <Form.Input onChange={handleInputChange}  name='name' placeholder='Name' value={trip.name} />
            <Form.Input onChange={handleInputChange} name='place' placeholder='Place' value={trip.place} />
            <Form.Input type='date' onChange={handleInputChange} name='date' placeholder='Date' value={trip.date} />
            <Form.TextArea rows={5} onChange={handleInputChange} name='description' placeholder='Description' value={trip.description} />
            <Form.Input onChange={handleInputChange} name='participants' placeholder='Participants' value={trip.participants}/>
            <Form.Input onChange={handleInputChange} name='price' placeholder='Price' value={trip.price}/>
            <Button loading={loading} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
})

