import React, { useState,useEffect } from 'react';
import { Button, Container, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { INjoftimi } from '../../../../app/models/njoftimi';
import { NjoftimetDashboard } from './NjoftimetDashboard';
import { NavBar } from '../../../nav/NavBar';
import { AdminNavBar } from '../../../administrator/AdminNavBar';
import agent from '../../../../app/api/agent';


const NjoftimetApp=()=>{

    const [njoftimet,setNjoftime]=useState<INjoftimi[]>([]);
    const [selectedNjoftim, setSelectedNjoftim]=useState<INjoftimi|null>(null);
    const [editMode, setEditMode]=useState(false);


    const handleSelectNjoftim=(id:string)=>{
      setSelectedNjoftim(njoftimet.filter(a=>a.id===id)[0]);
      setEditMode(false);
    }

    useEffect(()=>{
        agent.Njoftimet.list()
        .then(response => {
          let njoftim:INjoftimi [] = [];
          response.forEach((njoftimet: any)=>{
            njoftimet.dataENjoftimit=njoftimet.dataENjoftimit.split('.')[0]
            njoftim.push(njoftimet)
          })
            setNjoftime(response)
        });
    }, []);


    const handleCreateNjoftim=(njoftim:INjoftimi)=>{
      agent.Njoftimet.create(njoftim).then(()=>{
        setNjoftime([...njoftimet,njoftim])
        setSelectedNjoftim(njoftim);
        setEditMode(false);
      })
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
