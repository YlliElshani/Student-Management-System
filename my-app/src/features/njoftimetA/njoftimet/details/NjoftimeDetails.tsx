import React from 'react'
import { Button, Card } from 'semantic-ui-react'
import { INjoftimi } from '../../../../app/models/njoftimi'

interface IProps{
    njoftim:INjoftimi;
    setEditMode:(editMode:boolean)=>void
    setSelectedNjoftim:(njoftim:INjoftimi|null)=>void
}

export const NjoftimeDetails:React.FC<IProps> = ({njoftim,setEditMode,setSelectedNjoftim}) => {
    return (
    <Card fluid>
        <Card.Content>
        <Card.Header>Njoftim:</Card.Header>
        <Card.Meta>
            <span>{njoftim.dataENjoftimit}</span>
        </Card.Meta>
        <Card.Description>
            {njoftim.njoftimi}
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button.Group widths={2}>
                <Button onClick={()=>setEditMode(true)}  color='google plus' content='Edit'/>
                <Button onClick={()=>setSelectedNjoftim(null)} basic color='red' content='Cancel'/>
            </Button.Group>
        </Card.Content>
    </Card>
    )
}
