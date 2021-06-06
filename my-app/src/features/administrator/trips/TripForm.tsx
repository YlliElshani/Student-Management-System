import React, {FormEvent, useState} from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import {v4 as uuid} from 'uuid';
import { ITrip } from '../../../app/models/trip';

interface IProps {
    setEditMode: (editMode: boolean) => void;
    trip: ITrip
    createTrip: (trip: ITrip) => void;
    editTrip: (trip: ITrip) => void;
    submitting: boolean;
}

const TripForm:React.FC<IProps> = ({setEditMode, trip: initialFormState, editTrip, createTrip, submitting}) => {
    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState
        }
        else {
            return {
                tripId: '',
                name: '',
                place: '',
                date: '',
                description: '',
                participants: '',
                price: ''
            }
        }
    }

    const [trip, setTrip] = useState<ITrip>(initializeForm);

    const handleSubmit = () => { 
        if(trip.tripId === ''){
            let newTrip = {
                 ...trip,
                 tripId: uuid()
            }
 
 
            createTrip(newTrip);
        }
        else{
            editTrip(trip);
        }
     }
 
     const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
         const {name, value} = event.currentTarget;
         setTrip({...trip, [name]: value});
     }
    
    return (
    <Segment clearing>
        <Grid>
        <Form onSubmit={handleSubmit} style={{padding:'20px', width:'100%'}}>
            <Form.Input onChange={handleInputChange}  name='name' placeholder='Name' value={trip.name} />
            <Form.Input onChange={handleInputChange} name='place' placeholder='Place' value={trip.place} />
            <Form.Input type='date' onChange={handleInputChange} name='date' placeholder='Date' value={trip.date} />
            <Form.TextArea rows={5} onChange={handleInputChange} name='description' placeholder='Description' value={trip.description} />
            <Form.Input onChange={handleInputChange} name='participants' placeholder='Participants' value={trip.participants}/>
            <Form.Input onChange={handleInputChange} name='price' placeholder='Price' value={trip.price}/>
            <Button loading={submitting} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={() => setEditMode(false)} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
}

export default TripForm;

