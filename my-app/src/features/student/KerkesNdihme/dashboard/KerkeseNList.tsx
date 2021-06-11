import React from 'react'
import { Button, Item } from 'semantic-ui-react'
import { INdihma } from '../../../../app/models/kNdihme'


interface IProps{
    kerkesat:INdihma[]
    selectKerkesa:(id:string)=>void
    deleteKerkesa:(id:string)=>void;
}

export const KerkeseNList:React.FC<IProps> = ({kerkesat,selectKerkesa,deleteKerkesa}) => {
    return (
    <Item.Group divided>
        {kerkesat.map(kerkese =>(
            <Item key={kerkese.id}>
            <Item.Content>
                <Item.Header as='a'>Kerkesa: </Item.Header>
                <Item.Description>
                    <div>
                        {kerkese.kerkesaInfo}
                    </div>
                </Item.Description>
                <Item.Meta>
                    {kerkese.dataECaktuar}
                </Item.Meta>
                <Item.Extra>
                <Button onClick={()=>selectKerkesa(kerkese.id)} content='Detaje' color='vk'/>
                <Button onClick={()=>deleteKerkesa(kerkese.id)} content='Fshiej' color='youtube'/>
                </Item.Extra>
            </Item.Content>
            </Item>
        ))}
    </Item.Group>
    )
}
