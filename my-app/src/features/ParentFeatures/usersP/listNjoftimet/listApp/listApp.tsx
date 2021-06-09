import React, { useState,useEffect } from 'react';
import { Header, Icon, List } from 'semantic-ui-react';
import axios from 'axios';
import { INjoftimi } from '../../../../../app/models/njoftimi';
import { Listues } from './Listues';
import { NavBar } from '../../../../nav/NavBar';
import { ParentNavBar } from '../../../../parentProfile/ParentNavBar';

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
          <ParentNavBar/>
        <List>
          <Listues listnjoftimet={njoftimet}/>
        </List>
      </div>
    );
}

export default ListApp;
