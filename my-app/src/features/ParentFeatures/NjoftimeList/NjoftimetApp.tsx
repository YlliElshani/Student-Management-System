import React, { useState,useEffect } from 'react';
import { Button, Container, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { NjoftimetDashboard } from './NjoftimetDashboard';
import { INjoftimi } from '../../../app/models/njoftimi';
import { NavBar } from '../../nav/NavBar';
import { AdminNavBar } from '../../administartor/AdminNavBar';


const NjoftimetApp=()=>{

    const [njoftimet,setNjoftime]=useState<INjoftimi[]>([]);
    const [selectedNjoftim, setSelectedNjoftim]=useState<INjoftimi|null>(null);
    const [editMode, setEditMode]=useState(false);


    const handleSelectNjoftim=(id:string)=>{
      setSelectedNjoftim(njoftimet.filter(a=>a.id===id)[0]);
      setEditMode(false);
    }

    useEffect(()=>{
        axios.get<INjoftimi []>('https://localhost:5000/api/Njoftimet').then(response => {
          let njoftim:INjoftimi [] = [];
          response.data.forEach(njoftimet=>{
            njoftimet.dataENjoftimit=njoftimet.dataENjoftimit.split('.')[0]
            njoftim.push(njoftimet)
          })
            setNjoftime(response.data)
        });
    }, []);


    const handleCreateNjoftim=(njoftim:INjoftimi)=>{
      setNjoftime([...njoftimet,njoftim])
      setSelectedNjoftim(njoftim);
      setEditMode(false);
    }

    const handleEditNjoftim =(njoftim:INjoftimi)=>{
      setNjoftime([...njoftimet.filter(a=>a.id!==njoftim.id),njoftim])
      setSelectedNjoftim(njoftim);
      setEditMode(false);
    }

    const handleDeleteNjoftim = (id:string)=>{
      setNjoftime([...njoftimet.filter(a=>a.id!==id)])
    }

    const handleOpenCreateForm=()=>{
      setSelectedNjoftim(null);
      setEditMode(true);
    }


    return (
      <Container>
        <NavBar/>
        <AdminNavBar />
        <Segment>
          <Button onClick={handleOpenCreateForm} color='vk' content='Shto Njoftim'/>
          <NjoftimetDashboard njoftimet={njoftimet}
          selectNjoftim={handleSelectNjoftim}
          selectedNjoftim={selectedNjoftim}
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedNjoftim={setSelectedNjoftim}
          createNjoftim={handleCreateNjoftim}
          editNjoftim={handleEditNjoftim}
          deleteNjoftim={handleDeleteNjoftim}
          />
         </Segment>
      </Container>
    );
}

export default NjoftimetApp;
