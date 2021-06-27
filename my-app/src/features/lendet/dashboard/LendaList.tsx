import React, { SyntheticEvent, useState } from 'react';
import { Item, Button, Segment } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/stores/store';

export default observer(function ActivityList(){
  const {lendaStore} = useStore();
  const {lendetByEmri, deleteLenda, loading} = lendaStore;
  const [target, setTarget] = useState('');

  function handleLendaDelete(e: SyntheticEvent<HTMLButtonElement>, id:string) {
      setTarget(e.currentTarget.name);
      deleteLenda(id);
    }
  return (
    <Segment clearing>
      <Item.Group divided>
        {lendetByEmri.map(lenda=> (
          <Item key={lenda.lendaId}>
            <Item.Content>
              <Item.Header as='a'>{lenda.emri}</Item.Header>
              <Item.Meta>{lenda.klasa}</Item.Meta>
              <Item.Description>
                <div>{lenda.profesori}</div>
                <div>
                  {lenda.descripion}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => lendaStore.selectLenda(lenda.lendaId)}
                  floated='right'
                  content='View'
                  color='blue'
                />
                <Button
                  name={lenda.lendaId}
                  loading={target === lenda.lendaId && loading}
                  onClick={(e) => handleLendaDelete(e, lenda.lendaId)}
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

