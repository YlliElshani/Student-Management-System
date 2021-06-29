import React, { useState,useEffect, SyntheticEvent } from 'react';
import { Button, Container, Segment } from 'semantic-ui-react';
import { NavBar } from '../../nav/NavBar'
import { LoadingNota } from './LoadingNota';
import NotaDashboard from './NotaDashboard';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

const AppNota=()=>{
    const {notaStore} = useStore();
    
    useEffect(()=>{
      notaStore.loadNotat();
  }, [notaStore]);

    if (notaStore.loadingInitial) return <LoadingNota content={'Prisni pak...'}/>

    return (
      <Container>
        <NavBar/>
        <Segment>
          <Button onClick={() => notaStore.openForm()} content='Shto Notën'/>
          <NotaDashboard/>
         </Segment>
      </Container>
    );
}

export default observer(AppNota);
