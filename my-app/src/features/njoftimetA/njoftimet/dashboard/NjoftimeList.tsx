import React from 'react'
import { SyntheticEvent } from 'react'
import { Button, Item, Segment } from 'semantic-ui-react'
import { INjoftimi } from '../../../../app/models/njoftimi'

interface IProps{
    njoftimet:INjoftimi[]
    selectNjoftim:(id:string)=>void
    deleteNjoftim:(event:SyntheticEvent<HTMLButtonElement>,id:string)=>void;
    submitting:boolean
    target:string;
}

export const NjoftimeList:React.FC<IProps> = ({njoftimet,selectNjoftim,deleteNjoftim,submitting,target}) => {
    return (
        <Segment>
            <Item.Group divided>
                {njoftimet.map(njoftim=>(
                     <Item key={njoftim.id}>
                     <Item.Content>
                         <Item.Header as='a'>Njoftim</Item.Header>
                         <h5>Data e postimit:</h5>
                         <Item.Meta>{njoftim.dataENjoftimit}</Item.Meta>
                         <Item.Description>
                         <h5>Detaje:</h5>
                             <div>
                                 {njoftim.njoftimi}
                             </div>
                         </Item.Description>
                         <Item.Extra>
                             <Button onClick={()=>selectNjoftim(njoftim.id)}
                              floated='left'
                               content='Shiko detajet'
                                color='instagram'/>
                                <Button onClick={(e)=>deleteNjoftim(e,njoftim.id)}
                                name={njoftim.id}
                                loading={target===njoftim.id && submitting}
                              floated='left'
                               content='Fshij'
                                color='youtube'/>
                         </Item.Extra>
                     </Item.Content>
                     </Item>
                ))}
        </Item.Group>
        </Segment>
    )
}
