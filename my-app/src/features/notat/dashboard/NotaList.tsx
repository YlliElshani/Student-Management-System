import React from 'react';
import { Item, Button, Segment } from 'semantic-ui-react';
import { INota } from '../../../app/models/nota';

interface IProps {
  notat: INota[];
  selectNota: (id: string) => void;
  deleteNota: (id: string) => void;
}

const NotaList: React.FC<IProps> = ({
  notat,
  selectNota,
  deleteNota
}) => {
  return (
    <Segment clearing>
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
                  onClick={() => deleteNota(nota.notaId)}
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
