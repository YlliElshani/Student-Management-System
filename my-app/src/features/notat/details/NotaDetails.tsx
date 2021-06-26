import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { INota } from '../../../app/models/nota';


interface IProps {
  nota: INota;
  setEditMode: (editMode: boolean) => void;
  setSelectedNota: (nota: INota | null) => void;
}

export const NotaDetails: React.FC<IProps> = ({nota, setEditMode, setSelectedNota}) => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{nota.lenda}</Card.Header>
        <Card.Meta>
          <span>{nota.grade}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
            <Button onClick={() => setEditMode(true)} basic color='blue' content='Edit' />
            <Button onClick={() => setSelectedNota(null)} basic color='grey' content='Cancel' />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default NotaDetails;
