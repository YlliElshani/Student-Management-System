import React from 'react';
import { Grid } from 'semantic-ui-react';
import { INota } from '../../../app/models/nota';
import NotaForm from '../form/NotaForm';
import NotaList from './NotaList';
import NotaDetails from '../details/NotaDetails';


interface IProps {
  notat: INota[];
  selectNota: (id: string) => void;
  selectedNota: INota | null;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  setSelectedNota: (nota: INota | null) => void;
  createNota: (nota: INota) => void;
  editNota: (nota: INota) => void;
  deleteNota: (id: string) => void;
}

const NotaDashboard: React.FC<IProps> = ({
  notat,
  selectNota,
  selectedNota,
  editMode,
  setEditMode,
  setSelectedNota,
  createNota,
  editNota,
  deleteNota
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <NotaList
          notat={notat}
          selectNota={selectNota}
          deleteNota={deleteNota}
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
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default NotaDashboard;
