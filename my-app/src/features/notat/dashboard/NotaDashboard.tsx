import React, { SyntheticEvent } from 'react';
import { Grid } from 'semantic-ui-react';
import { INota } from '../../../app/models/nota';
import NotaForm from '../form/NotaForm';
import NotaDetails from '../details/NotaDetails';
import NotaList from './NotaList';

interface IProps {
  notat: INota[];
  selectNota:(id:string)=>void
  selectedNota:INota | null
  editMode:boolean;
  setEditMode: (editMode: boolean) => void;
  setSelectedNota: (nota: INota | null) => void;
  createNota:(nota:INota)=>void;
  editNota: (nota: INota) => void;
  deleteNota: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
  submitting: boolean;
  target: string;
}

export const NotaDashboard: React.FC<IProps> = ({
  notat,
  selectNota,
  selectedNota,
  editMode,
  setEditMode,
  setSelectedNota,
  createNota,
  editNota,
  deleteNota,
  submitting,
  target
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <NotaList
          notat={notat}
          selectNota={selectNota}
          deleteNota={deleteNota}
          submitting={submitting}
          target={target}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedNota && !editMode && (
          <NotaDetails
            nota={selectedNota}
            setEditMode={setEditMode}
            setSelectedNota={setSelectedNota}
          />
        )}
        {editMode && (
          <NotaForm
            key={(selectedNota && selectedNota.notaId) || 0}
            setEditMode={setEditMode}
            nota={selectedNota!}
            createNota={createNota}
            editNota={editNota}
            submitting={submitting}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default NotaDashboard;
