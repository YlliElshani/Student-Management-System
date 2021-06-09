import React from 'react'
import { Item, Segment } from 'semantic-ui-react'
import { INjoftimi } from '../../../../../app/models/njoftimi'

interface IProps{
    njoftimet:INjoftimi[]
}

export const Lista:React.FC<IProps> = ({njoftimet}) => {
    return (
        <Segment fluid>
        <Item.Group divided>
            {njoftimet.map(njoftimet=>(
                <Item key={njoftimet.id}>
                <Item.Content>
                  <Item.Header>Njoftim:</Item.Header>
                  <Item.Meta>
                    <span className='price'>{njoftimet.njoftimi}</span>
                  </Item.Meta>
                  <h4>
                      Data e postimit:
                  </h4>
                  <Item.Meta>
                      <span className='price'>{njoftimet.dataENjoftimit}</span>
                  </Item.Meta>
                  <Item.Description></Item.Description>
                </Item.Content>
              </Item>
            ))}
      </Item.Group>
        </Segment>
    )
}
