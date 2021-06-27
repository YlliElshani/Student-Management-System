import React, { useState,useEffect } from 'react';
import { Grid, List } from 'semantic-ui-react';
import axios from 'axios';
import { Listues } from './Listues';
import { INjoftimi } from '../../../app/models/njoftimi';
import { NavBar } from '../../nav/NavBar';

import { ICompetition } from '../../../app/models/competition';
import agent from '../../../app/api/agent';
import StudentMiniNav from '../EServices/StudentMiniNav';

interface IProps{
  gara: ICompetition;
}

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
          <StudentMiniNav/>
          </Grid.Column>
          <Grid.Column width='10' style={{marginTop:'10em', marginLeft:"3em"}}>
          <Listues listgara={gara}/>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    );
}

export default ListGApp;