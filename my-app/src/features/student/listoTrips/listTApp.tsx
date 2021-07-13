import React, { useState,useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { Listues } from './Listues';
import { ITrip } from '../../../app/models/trip';
import agent from '../../../app/api/agent';
import StudentMiniNav from '../EServices/StudentMiniNav';
import StudentNavBar from '../StudentNavBar';

export const ListTApp =()=> {

    const[trips,setTrips]=useState<ITrip[]>([]);

    useEffect(()=>{
      agent.Trips.list().then((response) => { 
        let trips: ITrip[] = []; 
        response.forEach((trip) => {
          trips.push(trip);
        })
        setTrips(trips);
      })
    }, []); 


    return (
      <Grid>
          <Grid.Row>
          <Grid.Column width='4'>
          <StudentNavBar/>
          </Grid.Column>
          <Grid.Column width='10' style={{marginTop:'5em', marginLeft:"3em"}}>
          <Listues trips={trips}/>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    );
}

export default ListTApp;
