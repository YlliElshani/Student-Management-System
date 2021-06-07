import React, { useEffect, useState } from 'react'
import { Button, Item, Segment } from 'semantic-ui-react'
import agent from '../../../app/api/agent';
import { INjoftimi } from '../../../app/models/njoftimi'

export const ListoNjoftimet:React.FC = () => {
    const [njoftimet, setNjoftimet] = useState<INjoftimi[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        agent.Njoftimet.listimi().then((response) => { 
          let njoftimet: INjoftimi[] = []; 
          response.forEach((njoftimi) => {
            njoftimet.push(njoftimi);
          })
          setNjoftimet(njoftimet);
        }).then(() => setLoading(false));
      }, []); 

    return (
        <Segment>
            <Item.Group divided>
                {njoftimet.map(njoftimi=>(
                     <Item key={njoftimi.id}>
                     <Item.Content>
                         <Item.Header as='a'>Njoftim:</Item.Header>
                         <h5>Data e postimit:</h5>
                         <Item.Meta>{njoftimi.dataENjoftimit}</Item.Meta>
                         <Item.Description>
                             <div>
                                 {njoftimi.njoftimi}
                             </div>
                         </Item.Description>
                     </Item.Content>
                     </Item>
                ))}
        </Item.Group>
        </Segment>
    )
}
