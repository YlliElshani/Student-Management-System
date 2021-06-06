import React from 'react'
import { Button, Item, Segment } from 'semantic-ui-react'
import { INjoftimi } from '../../../../app/models/njoftimi'

interface IProps{
    njoftimet:INjoftimi[]
    selectNjoftim:(id:string)=>void
    deleteNjoftim:(id:string)=>void;
}

export const NjoftimeList:React.FC<IProps> = ({njoftimet,selectNjoftim,deleteNjoftim}) => {
    return (
        <Segment>
            <Item.Group divided>
                {njoftimet.map(njoftim=>(
                     <Item key={njoftim.id}>
                     <Item.Content>
                         <Item.Header as='a'>Njoftim:</Item.Header>
                         <h5>Data e postimit:</h5>
                         <Item.Meta>{njoftim.dataENjoftimit}</Item.Meta>
                         <Item.Description>
                             <div>
                                 {njoftim.njoftimi}
                             </div>
                         </Item.Description>
                         <Item.Extra>
                             <Button onClick={()=>selectNjoftim(njoftim.id)}
                              floated='left'
                               content='Shiko detajet'
                                color='instagram'/>
                                <Button onClick={()=>deleteNjoftim(njoftim.id)}
                              floated='left'
                               content='Fshij Njoftimin'
                                color='red'/>
                         </Item.Extra>
                     </Item.Content>
                     </Item>
                ))}
        </Item.Group>
        </Segment>
    )
}
