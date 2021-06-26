import React, { SyntheticEvent } from 'react';
import { Item, Button, Label, Segment } from 'semantic-ui-react';
import { INota } from '../../../app/models/nota';

interface IProps {
  notat: INota[];
  selectNota: (id: string) => void;
  deleteNota: (event: SyntheticEvent<HTMLButtonElement>, id: string) => void;
  submitting: boolean;
  target: string;
}

export const NotaList: React.FC<IProps> = ({
  notat,
  selectNota,
  deleteNota,
  submitting,
  target
}) => {
  return (
    <Segment>
      <Item.Group divided>
        {notat.map(nota => (
          <Item key={nota.notaId}>
            <Item.Content>
              <Item.Header as='a'>{nota.lenda}</Item.Header>
              <Item.Meta>{nota.grade}</Item.Meta>
              <Item.Extra>
                <Button
                  onClick={() => selectNota(nota.notaId)}
                  floated='right'
                  content='View'
                  color='blue'
                />
                <Button
                  onClick={(e) => deleteNota(e, nota.notaId)}
                  name={nota.notaId}
                  loading={target==nota.notaId && submitting}
                  floated='right'
                  content='Delete'
                  color='red'
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default NotaList;
