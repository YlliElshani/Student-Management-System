import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Item, Button, Label, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

export default observer( function NotaList() {
  const {notaStore} = useStore();
  const {deleteNota, notatByLenda, loading} = notaStore;

  const [target, setTarget] = useState('');

  function handleNotaDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
    setTarget(e.currentTarget.name);
    deleteNota(id);
  }

  
  return (
    <Segment>
      <Item.Group divided>
        {notatByLenda.map(nota => (
          <Item key={nota.notaId}>
            <Item.Content>
              <Item.Header as='a'>{nota.lenda}</Item.Header>
              <Item.Meta>{nota.grade}</Item.Meta>
              <Item.Extra>
                <Button
                  onClick={() => notaStore.selectNota(nota.notaId)}
                  floated='right'
                  content='View'
                  color='blue'
                />
                <Button
                  onClick={(e) => handleNotaDelete(e, nota.notaId)}
                  name={nota.notaId}
                  loading={target==nota.notaId && loading}
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
  )
})
