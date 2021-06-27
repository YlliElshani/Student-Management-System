import React from 'react'
import { Button,Card } from 'semantic-ui-react'
import { ILenda } from '../../../../app/models/lenda';



interface IProps {
    lenda: ILenda
}


const LendaStudentiDetails: React.FC<IProps> = ({ lenda}) => {
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
        </Card>
    )
}

export default LendaStudentiDetails;