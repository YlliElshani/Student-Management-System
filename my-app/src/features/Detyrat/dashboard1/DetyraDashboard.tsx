import React from 'react';
import { Grid } from 'semantic-ui-react';
import { IDetyra } from '../../../app/models/detyra';
import DetyraForm from '../form1/DetyraForm';
import DetyraList from './DetyraList';
import DetyraDetails from '../Details1/DetyraDetails';
import ListDetyrat from './DetyraList';

interface IProps {
  detyrat: IDetyra[];
  selectDetyra: (id: string) => void;
  selectedDetyra: IDetyra | null;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  setSelectedDetyra: (detyra: IDetyra | null) => void;
  createDetyra: (detyra: IDetyra) => void;
  editDetyra: (detyra: IDetyra) => void;
  deleteDetyra: (id: string) => void;
}

const DetyraDashboard: React.FC<IProps> = ({
  detyrat,
  selectDetyra,
  selectedDetyra,
  editMode,
  setEditMode,
  setSelectedDetyra,
  createDetyra,
  editDetyra,
  deleteDetyra
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ListDetyrat
          detyrat={detyrat}
          selectDetyra={selectDetyra}
          deleteDetyra={deleteDetyra}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedDetyra && !editMode && (
          <DetyraDetails
            detyra={selectedDetyra}
            setEditMode={setEditMode}
            setSelectedDetyra={setSelectedDetyra}
          />
        )}
        {editMode && (
          <DetyraForm
            key={(selectedDetyra && selectedDetyra.detyraId) || 0}
            setEditMode={setEditMode}
            detyra={selectedDetyra!}
            createDetyra={createDetyra}
            editDetyra={editDetyra}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default DetyraDashboard;

