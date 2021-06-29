import React, { useState,useEffect, SyntheticEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Grid, Segment } from 'semantic-ui-react';
import agent from '../../../../app/api/agent';
import { INota } from '../../../../app/models/nota';
import { LoadingNota } from '../../../notat/dashboard/LoadingNota';
import StudentNavBar from '../../StudentNavBar';
import NotaStudentiDashboard from './NotaStudentiDashboard';

const AppNotaStudenti=()=>{
    const [notat,setNota]=useState<INota[]>([]);
    const [selectedNota, setSelectedNota]=useState<INota|null>(null);
    const [editMode, setEditMode]=useState(false);
    const [loading,setLoading]=useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [target, setTarget] = useState('');
    
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


    return (
      <Grid>
        <Grid.Row>
        <Grid.Column width='4'>
        <StudentNavBar/>
        </Grid.Column>
        <Grid.Column width='10' style={{marginTop:'5em', marginLeft:"3em"}}>
        <Button as={NavLink} to='/notatStudenti' type='submit' color='red'>Notat e mia</Button>
          <NotaStudentiDashboard 
          notat={notat}
          submitting={submitting}
          target={target}
          />
         </Grid.Column>
         </Grid.Row>
      </Grid>
    );
}

export default AppNotaStudenti;
