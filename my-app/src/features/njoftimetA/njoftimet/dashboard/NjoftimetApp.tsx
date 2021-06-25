import React, { useState,useEffect, SyntheticEvent } from 'react';
import { Button, Container, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { INjoftimi } from '../../../../app/models/njoftimi';
import { NjoftimetDashboard } from './NjoftimetDashboard';
import { NavBar } from '../../../nav/NavBar';
import agent from '../../../../app/api/agent';
import { LoadingN } from './LoadingN';
import AdminNavBar from '../../../administrator/AdminNavBar';


const NjoftimetApp=()=>{

    const [njoftimet,setNjoftime]=useState<INjoftimi[]>([]);
    const [selectedNjoftim, setSelectedNjoftim]=useState<INjoftimi|null>(null);
    const [editMode, setEditMode]=useState(false);
    const [loading,setLoading]=useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [target, setTarget] = useState('');

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
        }).then(()=>setLoading(false));
    }, []);

    if (loading)return <LoadingN content={'Prisni pak...'}/>

      
    const handleCreateNjoftim=(njoftim:INjoftimi)=>{
      setSubmitting(true)
      agent.Njoftimet.create(njoftim).then(()=>{
        setNjoftime([...njoftimet,njoftim])
        setSelectedNjoftim(njoftim);
        setEditMode(false);
      }).then(()=>setSubmitting(false))
    }

    const handleEditNjoftim =(njoftim:INjoftimi)=>{
      setSubmitting(true)
      agent.Njoftimet.update(njoftim).then(()=>{
        setNjoftime([...njoftimet.filter(a=>a.id!==njoftim.id),njoftim])
        setSelectedNjoftim(njoftim);
        setEditMode(false);
      }).then(()=>setSubmitting(false))
    }

    const handleDeleteNjoftim = (event:SyntheticEvent<HTMLButtonElement>,id:string)=>{
      setSubmitting(true)
      setTarget(event.currentTarget.name)
      agent.Njoftimet.delete(id).then(()=>{
        setNjoftime([...njoftimet.filter(a=>a.id!==id)])
      }).then(()=>setSubmitting(false))
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
          submitting={submitting}
          target={target}
          />
         </Segment>
      </Container>
    );
}

export default NjoftimetApp;
