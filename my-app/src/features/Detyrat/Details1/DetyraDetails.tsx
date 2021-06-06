import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { IDetyra } from '../../../app/models/detyra';

interface IProps {
    detyra: IDetyra;
    setEditMode: (editMode: boolean) => void;
    setSelectedDetyra: (detyra: IDetyra | null) => void;
}

const DetyraDetails: React.FC<IProps> = ({detyra, setEditMode, setSelectedDetyra}) => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{detyra.detyraEmri}</Card.Header>
        <Card.Meta>
          <span>{detyra.pershkrimi}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
            <Button onClick={() => setEditMode(true)} basic color='blue' content='Edit' />
            <Button onClick={() => setSelectedDetyra(null)} basic color='grey' content='Cancel' />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default DetyraDetails;