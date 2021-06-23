import React from 'react'
import { Grid, Button, Segment } from 'semantic-ui-react'
import { IPrezantimi } from '../../../app/models/prezantimi';


interface IProps {
   prezantimi: IPrezantimi
   setEditMode: (editMode: boolean)=>void;
   setSelectedPrezantimi: (prezantimi: IPrezantimi | null)=>void;
}


const PrezantimiDetails:React.FC<IProps> = ({prezantimi, setEditMode, setSelectedPrezantimi}) => {
    return (
        <Segment>
         <Grid key={prezantimi.prezantimiId} columns={1} divided>
            <Grid.Row stretched>
            <Grid.Column>
                <Segment>{prezantimi.prezantimiInfo}</Segment>
                <Segment>{prezantimi.kohezgjatja}</Segment>
                <Segment>{prezantimi.data}</Segment>
            </Grid.Column>
            <Grid.Column>
                <br/>
                <Segment>{prezantimi.ora}</Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Button.Group>
                <Button onClick={() => setEditMode(true)} color='blue' content='Ndrysho'/>
                <Button onClick={() => setSelectedPrezantimi(null)} color='red' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
}

export default PrezantimiDetails;