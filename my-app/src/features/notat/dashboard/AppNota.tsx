import React, { useState, useEffect, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import { INota } from '../../../app/models/nota';
import { NavBar } from '../../nav/NavBar';
import NotaDashboard from './NotaDashboard';
import agent from '../../../app/api/agent';

const AppNota = () => {
  const [notat, setNotat] = useState<INota[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [selectedNota, setSelectedNota] = useState<INota | null>(
    null
  );
  const [editMode, setEditMode] = useState(false);

  const handleOpenCreateForm = () => {
    setSelectedNota(null);
    setEditMode(true);
  }

  const handleCreateNota = (nota: INota) => {
    setSubmitting(true);
    agent.Notat.create(nota).then(() => {
    setNotat([...notat, nota]);
    setSelectedNota(nota);
    setEditMode(false);
    }).then(() => setSubmitting(false))
}


  const handleEditNota = (nota: INota) => {
    setNotat([...notat.filter(a => a.notaId !== nota.notaId), nota])
    setSelectedNota(nota);
    setEditMode(false);
  }

  const handleDeleteNota = (id: string) => {
    setNotat([...notat.filter(a => a.notaId !== id)])
  }

  const handleSelectNota = (id: string) => {
    setSelectedNota(notat.filter(a => a.notaId === id)[0]);
    setEditMode(false);
  };

  useEffect(()=>{
    agent.Notat.list().then((response) => { 
      let notat: INota[] = []; 
      response.forEach((nota) => {
        notat.push(nota);
      })
      setNotat(notat);
    }).then(() => setLoading(false));
  }, []); 

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
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
        />
      </Container>
    </Fragment>
  );
};

export default AppNota;
