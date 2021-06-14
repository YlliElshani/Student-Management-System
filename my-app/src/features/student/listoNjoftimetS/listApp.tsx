import React, { useState,useEffect } from 'react';
import { List } from 'semantic-ui-react';
import axios from 'axios';
import { Listues } from './Listues';
import { INjoftimi } from '../../../app/models/njoftimi';
import { NavBar } from '../../nav/NavBar';
import { StudentMiniNav } from '../EServices/StudentMiniNav';

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
      <div>
          <NavBar/>
          <StudentMiniNav/>
        <List>
          <Listues listnjoftimet={njoftimet}/>
        </List>
      </div>
    );
}

export default ListApp;
