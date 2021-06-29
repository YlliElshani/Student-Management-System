
import React from 'react';
import { Item, Button, Segment } from 'semantic-ui-react';
import { IDetyra } from '../../../../app/models/detyra';

interface IProps {
  detyrat: IDetyra[];
  selectDetyra: (id: string) => void;
  deleteDetyra: (id: string) => void;
}


const ListDetyrat: React.FC<IProps> = ({
  detyrat,
  selectDetyra,
  deleteDetyra
}) => {
  return (
    <Segment clearing>
       
      <Item.Group divided>
        {detyrat.map(detyra => (
          <Item key={detyra.detyraId}>
            <Item.Content>
            <Item.Header as='a'>{detyra.detyraEmri}</Item.Header>
            <Item.Meta>{detyra.pershkrimi}</Item.Meta>
              <Item.Extra>
                <Button
                  onClick={() => selectDetyra(detyra.detyraId)}
                  floated='right'
                  content='View'
                  color='blue'
                />
                <Button
                  onClick={() => deleteDetyra(detyra.detyraId)}
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

export default ListDetyrat;

