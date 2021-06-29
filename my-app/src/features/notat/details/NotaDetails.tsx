import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';


export default function NotaDetails() {
  const {notaStore} = useStore();
  const {selectedNota: nota, openForm, cancelSelectedNota} = notaStore;

  if(!nota) return <LoadingComponent/>;

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
            <Button onClick={() => openForm(nota.notaId)} basic color='blue' content='Edit' />
            <Button onClick={cancelSelectedNota} basic color='grey' content='Cancel' />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

