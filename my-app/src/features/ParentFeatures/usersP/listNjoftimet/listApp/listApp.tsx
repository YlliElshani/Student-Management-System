import React, { useState,useEffect } from 'react';
import { Grid, List } from 'semantic-ui-react';
import axios from 'axios';
import { INjoftimi } from '../../../../../app/models/njoftimi';
import { Listues } from './Listues';
import { NavBar } from '../../../../nav/NavBar';
import ParentNavBar from '../../ParentNavBar';

interface IProps{
  njoftimet: INjoftimi;
}

const ListApp =()=> {

    const[njoftimet,setNjoftimet]=useState<INjoftimi[]>([]);

    useEffect(()=>{
      axios.get('https://localhost:5000/api/Njoftimet').then(response => {  
        setNjoftimet(response.data)
      });
    },[])


    return (
      <Grid>
      <Grid.Row>
      <Grid.Column width='4'>
      <ParentNavBar/>
      </Grid.Column>
      <Grid.Column width='10' style={{marginTop:'10em', marginLeft:"3em"}}>
      <Listues listnjoftimet={njoftimet}/>
    </Grid.Column>
    </Grid.Row>
  </Grid>
    );
}

export default ListApp;
