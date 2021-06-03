import React from 'react'
import { Button, Card, CardDescription, Icon } from 'semantic-ui-react'
import { IArsyeja } from '../../../../app/models/arsyeja'

interface IProps{
  arsyetim:IArsyeja;
  setEditMode:(editMode:boolean)=>void;
  setSelectedArsyetim:(arsyeja:IArsyeja|null)=>void;
}

const MungesaDetails:React.FC<IProps> = ({arsyetim,setEditMode,setSelectedArsyetim}) => {
    return (
        <Card fluid>
        <Card.Content>
          <Card.Header>Mungesa e Arsyetuar</Card.Header>
          <Card.Description>
            {arsyetim.ArsyejaMungeses}
          </Card.Description>
          <CardDescription>
            {arsyetim.nrDiteve}
          </CardDescription>
          <CardDescription>
            {arsyetim.Id}
          </CardDescription>
        </Card.Content>
        <Card.Content extra>
        <Button.Group>
            <Button onClick={()=>setEditMode(true)} basic color='green' content='Ndrrysho'/>
            <Button onClick={()=>setSelectedArsyetim(null)} basic color='blue' content='Anulo'/>
        </Button.Group>
        </Card.Content>
      </Card>
    )
}
export default MungesaDetails