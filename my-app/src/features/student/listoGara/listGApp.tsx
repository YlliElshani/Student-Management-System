import React, { useState,useEffect } from 'react';
import { List } from 'semantic-ui-react';
import axios from 'axios';
import { Listues } from './Listues';
import { INjoftimi } from '../../../app/models/njoftimi';
import { NavBar } from '../../nav/NavBar';
import { StudentMiniNav } from '../EServices/StudentMiniNav';
import { ICompetition } from '../../../app/models/competition';
import agent from '../../../app/api/agent';

interface IProps{
  gara: ICompetition;
}

const ListGApp =()=> {

    const[gara,setGara]=useState<ICompetition[]>([]);

    useEffect(()=>{
      agent.Competitions.competitionsList().then((response) => { 
        let competitions: ICompetition[] = []; 
        response.forEach((competition) => {
          competitions.push(competition);
        })
        setGara(competitions);
      })
    }, []); 


    return (
      <div>
          <NavBar/>
          <StudentMiniNav/>
        <List>
          <Listues listgara={gara}/>
        </List>
      </div>
    );
}

export default ListGApp;