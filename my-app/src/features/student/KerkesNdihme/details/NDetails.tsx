import React from 'react'
import { Button, ButtonGroup, Card } from 'semantic-ui-react'
import { INdihma } from '../../../../app/models/kNdihme'

interface IProps{   
    kerkesaN:INdihma;
    setEditMode:(editMode:boolean)=>void;
    setSelectedKerkes:(kerkesa:INdihma|null)=>void
}

export const NDetails:React.FC<IProps> = ({kerkesaN,setEditMode,setSelectedKerkes}) => {
    return (
        <Card>
        <Card.Content>
          <Card.Meta>
            <span>{kerkesaN.dataECaktuar}</span>
          </Card.Meta>
          <Card.Description>
            {kerkesaN.kerkesaInfo}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <ButtonGroup widths={2}>
                <Button onClick={()=>setEditMode(true)} basic color='purple' content='Ndrrysho' />
                <Button onClick={()=>setSelectedKerkes(null)} color='google plus' content='Anulo' />
            </ButtonGroup>
        </Card.Content>
      </Card>
    )
}
