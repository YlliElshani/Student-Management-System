import React from 'react'
import { Grid, Button, Segment } from 'semantic-ui-react'
import { ICompetition } from '../../../app/models/competition';


interface IProps {
   competition: ICompetition
   setEditMode: (editMode: boolean)=>void;
   setSelectedCompetition: (competition: ICompetition | null)=>void;
}


const CompetitionDetails:React.FC<IProps> = ({competition, setEditMode, setSelectedCompetition}) => {
    return (
        <Segment>
         <Grid key={competition.competitionId} columns={1} divided>
            <Grid.Row stretched>
            <Grid.Column>
                <Segment>{competition.name}</Segment>
                <Segment>{competition.field}</Segment>
                <Segment>{competition.date}</Segment>
            </Grid.Column>
            <Grid.Column>
                <br/>
                <Segment>{competition.description}</Segment>
                <Segment>{competition.awards}</Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Button.Group>
                <Button onClick={() => setEditMode(true)}  basic color='blue' content='Ndrysho'/>
                <Button onClick={() => setSelectedCompetition(null)} basic color='grey' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
}

export default CompetitionDetails;