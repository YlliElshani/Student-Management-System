import React, { SyntheticEvent } from 'react';
import { Item, Button, Label, Segment } from 'semantic-ui-react';
import { INota } from '../../../../app/models/nota'

interface IProps {
  notat: INota[];
  submitting: boolean;
  target: string;
}

export const NotaStudentiList: React.FC<IProps> = ({
  notat,
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
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default NotaStudentiList;
