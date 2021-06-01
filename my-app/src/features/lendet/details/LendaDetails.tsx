import React from 'react'
import { Grid, Button, Segment } from 'semantic-ui-react'
import { ILenda } from '../../../app/models/lenda';
//import { ILenda } from '../../../../app/models/lenda';

interface IProps {
   lenda: ILenda
   setEditMode: (editMode: boolean)=>void;
   setSelectedLenda: (lenda: ILenda | null)=>void;
}


const LendaDetails:React.FC<IProps> = ({lenda, setEditMode, setSelectedLenda}) => {
    return (
        <Segment>
         <Grid key={lenda.lendaId} columns={1} divided>
            <Grid.Row stretched>
            <Grid.Column>
                <Segment>{lenda.emri}</Segment>
                <Segment>{lenda.klasa}</Segment>
                <Segment>{lenda.profesori}</Segment>
            </Grid.Column>
            <Grid.Column>
                <br/>
                      
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Button.Group>
                <Button onClick={() => setEditMode(true)}  basic color='blue' content='Ndrysho'/>
                <Button onClick={() => setSelectedLenda(null)} basic color='grey' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
}

export default LendaDetails;