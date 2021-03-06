import React, { useState,useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { Listues } from './Listues';
import { ICompetition } from '../../../app/models/competition';
import agent from '../../../app/api/agent';
import StudentNavBar from '../StudentNavBar';

const ListGApp =()=> {

    const[gara,setGara]=useState<ICompetition[]>([]);

    useEffect(()=>{
      agent.Competitions.list().then((response) => { 
        let competitions: ICompetition[] = []; 
        response.forEach((competition) => {
          competitions.push(competition);
        })
        setGara(competitions);
      })
    }, []); 


    return (
      <Grid>
          <Grid.Row>
          <Grid.Column width='4'>
          <StudentNavBar/>
          </Grid.Column>
          <Grid.Column width='10' style={{marginTop:'5em', marginLeft:"3em"}}>
          <Listues listgara={gara}/>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    );
}

export default ListGApp;