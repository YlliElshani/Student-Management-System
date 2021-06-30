import React, { useState,useEffect, SyntheticEvent } from 'react';
import { Button, Container, Grid, Segment } from 'semantic-ui-react';
import { NavBar } from '../../nav/NavBar'
import { LoadingNota } from './LoadingNota';
import NotaDashboard from './NotaDashboard';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import ProfesorNavBar from '../../profesor/Profesor-Profili/ProfesorNavBar';

const AppNota=()=>{
    const {notaStore} = useStore();
    
    useEffect(()=>{
      notaStore.loadNotat();
  }, [notaStore]);

    if (notaStore.loadingInitial) return <LoadingNota content={'Prisni pak...'}/>

    return (
      <Grid>
        <Grid.Row>
        <Grid.Column width='4'>
        <ProfesorNavBar/>
        </Grid.Column>
        <Grid.Column width='10' style={{marginTop:'5em', marginLeft:"3em"}}>
        <Segment>
          <Button onClick={() => notaStore.openForm()} content='Shto Notën'/>
          <NotaDashboard/>
         </Segment>
         </Grid.Column>
         </Grid.Row>
      </Grid>
    );
}

export default observer(AppNota);
