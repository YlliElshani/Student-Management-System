import React, { useState,useEffect, SyntheticEvent } from 'react';
import { Button, Container, Segment } from 'semantic-ui-react';
import { NavBar } from '../../nav/NavBar'
import agent from '../../../app/api/agent';
import { INota } from '../../../app/models/nota';
import { LoadingNota } from './LoadingNota';
import NotaDashboard from './NotaDashboard';

const AppNota=()=>{
    const [notat,setNota]=useState<INota[]>([]);
    const [selectedNota, setSelectedNota]=useState<INota|null>(null);
    const [editMode, setEditMode]=useState(false);
    const [loading,setLoading]=useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [target, setTarget] = useState('');
    
    const handleSelectNota=(id:string)=>{
      setSelectedNota(notat.filter(a=>a.notaId===id)[0]);
      setEditMode(false);
    }
    
    useEffect(()=>{
      agent.Notat.list()
      .then(response => {
        let nota:INota [] = [];
        response.forEach((notat: any)=>{
          nota.push(notat)
        })
          setNota(response)
      }).then(()=>setLoading(false));
  }, []);

    if (loading) return <LoadingNota content={'Prisni pak...'}/>

    const handleCreateNota=(nota:INota)=>{
      setSubmitting(true)
      agent.Notat.create(nota).then(()=>{
        setNota([...notat,nota])
        setSelectedNota(nota);
        setEditMode(false);
      }).then(()=>setSubmitting(false))
    }

    const handleEditNota =(nota:INota)=>{
      setSubmitting(true)
      agent.Notat.update(nota).then(()=>{
        setNota([...notat.filter(a=>a.notaId!==nota.notaId),nota])
        setSelectedNota(nota);
        setEditMode(false);
      }).then(()=>setSubmitting(false))
    }

    const handleDeleteNota = (event:SyntheticEvent<HTMLButtonElement>,id:string)=>{
      setSubmitting(true)
      setTarget(event.currentTarget.name)
      agent.Notat.delete(id).then(()=>{
        setNota([...notat.filter(a=>a.notaId!==id)])
      }).then(()=>setSubmitting(false))
    }

    const handleOpenCreateForm=()=>{
      setSelectedNota(null);
      setEditMode(true);
    }

    return (
      <Container>
        <NavBar/>
        <Segment>
          <Button onClick={handleOpenCreateForm} color='vk' content='Shto Notë'/>
          <NotaDashboard 
          notat={notat}
          selectNota={handleSelectNota}
          selectedNota={selectedNota}
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedNota={setSelectedNota}
          createNota={handleCreateNota}
          editNota={handleEditNota}
          deleteNota={handleDeleteNota}
          submitting={submitting}
          target={target}
          />
         </Segment>
      </Container>
    );
}

export default AppNota;
