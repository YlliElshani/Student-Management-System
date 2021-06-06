import React, { useState, useEffect, Fragment } from 'react';
import { Button, Container } from 'semantic-ui-react';
import axios from 'axios';
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { IDetyra } from '../../../app/models/detyra';
import { NavBar } from '../../nav/NavBar';
import DetyraDashboard from './DetyraDashboard';
import agent from '../../../app/api/agent';
import DetyraList from './DetyraList';



const DetyraApp = () => {
  const [detyrat, setDetyrat] = useState<IDetyra[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [selectedDetyra, setSelectedDetyra] = useState<IDetyra | null>(
    null
  );
  const [editMode, setEditMode] = useState(false);

  const handleOpenCreateForm =  () => {
    setSelectedDetyra(null);
    setEditMode(true);
  }

  const handleCreateDetyra = (detyra: IDetyra) => {
    setSubmitting(true);
    agent.Detyrat.create(detyra).then(() => {
    setDetyrat([...detyrat, detyra]);
    setSelectedDetyra(detyra);
    setEditMode(false);
    }).then(() => setSubmitting(false))
}


  const handleEditDetyra = (detyra: IDetyra) => {
    setDetyrat([...detyrat.filter(a => a.detyraId !== detyra.detyraId), detyra])
    setSelectedDetyra(detyra);
    setEditMode(false);
  }

  const handleDeleteDetyra = (id: string) => {
    setDetyrat([...detyrat.filter(a => a.detyraId !== id)])
  }

  const handleSelectDetyra = (id: string) => {
    setSelectedDetyra(detyrat.filter(a => a.detyraId === id)[0]);
    setEditMode(false);
  };

  useEffect(()=>{
    agent.Detyrat.list().then((response) => { 
      let detyrat: IDetyra[] = []; 
      response.forEach((detyra) => {
        detyrat.push(detyra);
      })
      setDetyrat(detyrat);
    }).then(() => setLoading(false));
  }, []); 

  return (
    <Fragment>
      <NavBar />
      
      <Container style={{ marginTop: '7em' }}>
      <Button onClick={handleOpenCreateForm} content='Shto Detyra' activeClassName="active" color='green'/>
        <DetyraDashboard
          detyrat={detyrat}
          selectDetyra={handleSelectDetyra}
          selectedDetyra={selectedDetyra}
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedDetyra={setSelectedDetyra}
          createDetyra={handleCreateDetyra}
          editDetyra={handleEditDetyra}
          deleteDetyra={handleDeleteDetyra}
        />
      </Container>
    </Fragment>
  
  );
};



export default DetyraApp;