import React, { SyntheticEvent } from 'react';
import { Grid } from 'semantic-ui-react';
import NotaForm from '../form/NotaForm';
import NotaDetails from '../details/NotaDetails';
import NotaList from './NotaList';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

export default observer( function NotaDashboard(){
  const {notaStore} = useStore();
  const {selectedNota, editMode} = notaStore;
  return (
    <Grid>
      <Grid.Column width={10}>
        <NotaList/>
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedNota && !editMode && 
        <NotaDetails/>}
        {editMode &&
          <NotaForm/>}
      </Grid.Column>
    </Grid>
  )
})
