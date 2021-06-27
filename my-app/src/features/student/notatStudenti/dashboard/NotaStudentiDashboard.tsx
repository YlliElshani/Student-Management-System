import React, { SyntheticEvent } from 'react';
import { Grid } from 'semantic-ui-react';
import NotaStudentiForm from '../form/NotaStudentiForm';
import NotaStudentiDetails from '../details/NotaStudentiDetails';
import {NotaStudentiList} from '../dashboard/NotaStudentiList';
import { INota } from '../../../../app/models/nota';

interface IProps {
  notat: INota[];
  submitting: boolean;
  target: string;
}

export const NotaStudentiDashboard: React.FC<IProps> = ({
  notat,
  submitting,
  target
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <NotaStudentiList
          notat={notat}
          submitting={submitting}
          target={target}
        />
      </Grid.Column>
    </Grid>
  );
};

export default NotaStudentiDashboard;
