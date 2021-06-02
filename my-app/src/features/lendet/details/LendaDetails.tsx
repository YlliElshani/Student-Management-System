import React from 'react'
import { Button,Card } from 'semantic-ui-react'
import { ILenda } from '../../../app/models/lenda';


interface IProps {
    lenda: ILenda
    setEditMode: (editMode: boolean) => void;
    setSelectedLenda: (lenda: ILenda | null) => void;
}


const LendaDetails: React.FC<IProps> = ({ lenda, setEditMode, setSelectedLenda }) => {
    return (
        <Card fluid>   
            <Card.Content>
                <Card.Header>{lenda.emri}</Card.Header>
                <Card.Meta>
                    <span>{lenda.klasa}</span>
                </Card.Meta>
                <Card.Description>
                    {lenda.descripion}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button onClick={() => setEditMode(true)} basic color="blue" content='Edit' />
                    <Button onClick={() => setSelectedLenda(null)} basic color="grey" content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}

export default LendaDetails;