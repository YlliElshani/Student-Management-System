import React, { useState,useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';
import { Listues } from './Listues';
import { INjoftimi } from '../../../app/models/njoftimi';
import StudentMiniNav from '../EServices/StudentMiniNav';

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
          <StudentMiniNav/>
          </Grid.Column>
          <Grid.Column width='10' style={{marginTop:'10em', marginLeft:"3em"}}>
          <Listues listnjoftimet={njoftimet}/>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    );
}

export default ListApp;
