import React from 'react'
import { Button, Item, Segment } from 'semantic-ui-react'
import { ICompetition } from '../../../app/models/competition'

interface IProps{
    gara:ICompetition[]
}

export const Lista:React.FC<IProps> = ({gara}) => {

    const tempAlert=()=>{
        alert("Keni aplikuar me sukses");
    }

    return (
        <Segment fluid>
        <Item.Group divided>
            {gara.map(garat=>(
                <Item key={garat.competitionId}>
                <Item.Content>
                  <Item.Header>Emri i gares:</Item.Header>
                  <Item.Meta>
                    <span className='price'>{garat.name}</span>
                  </Item.Meta>
                  <h4>
                      Detaje:
                  </h4>
                  <Item.Meta>
                      <span className='price'>{garat.description}</span>
                  </Item.Meta>
                  <h4>
                      Data:
                  </h4>
                  <Item.Meta>
                      <span className='price'>{garat.date}</span>
                  </Item.Meta>
                  <h4>
                      Fusha dhe Cmimi:
                  </h4>
                  <Item.Meta>
                      <span className='price'>{garat.field} me cmimin  {garat.awards}</span>
                  </Item.Meta>
                  <Item.Description></Item.Description>
                  <Button onClick={tempAlert} content='Apliko' positive color='green' floated='right'/>
                </Item.Content>
              </Item>
            ))}
      </Item.Group>
        </Segment>
    )
}
