import React, { useState,useEffect } from 'react';
import { List } from 'semantic-ui-react';
import axios from 'axios';
import { Listues } from './Listues';
import { INjoftimi } from '../../../app/models/njoftimi';
import { NavBar } from '../../nav/NavBar';
import { StudentMiniNav } from '../EServices/StudentMiniNav';
import { ITrip } from '../../../app/models/trip';
import agent from '../../../app/api/agent';

interface IProps{
  trips: ITrip;
}

export const ListTApp =()=> {

    const[trips,setTrips]=useState<ITrip[]>([]);

    useEffect(()=>{
      agent.Trips.tripsList().then((response) => { 
        let trips: ITrip[] = []; 
        response.forEach((trip) => {
          trips.push(trip);
        })
        setTrips(trips);
      })
    }, []); 


    return (
      <div>
          <NavBar/>
          <StudentMiniNav/>
        <List>
          <Listues trips={trips}/>
        </List>
      </div>
    );
}

export default ListTApp;
