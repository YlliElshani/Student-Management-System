import React from 'react'
import { Grid, Button, Segment } from 'semantic-ui-react'
import { ITrajnim } from '../../../../../app/models/trajnim';
import  './Style.css';


interface IProps {
    trajnim: ITrajnim
    setEditMode: (editMode: boolean)=>void;
    setSelectedTrajnim: (trajnim: ITrajnim | null)=>void;
 }
 
 const TrajnimDetails:React.FC<IProps> = ({trajnim, setEditMode, setSelectedTrajnim}) => {
     return (
         <Segment className='Gridi'>
          <Grid key={trajnim.trajnimId} columns={1} divided>
             <Grid.Row stretched>
             <Grid.Column >
                 <Segment>{trajnim.trajnimEmri}</Segment>
                 <Segment>{trajnim.pershkrimi}</Segment>
                 <Segment>{trajnim.numriDiteve}</Segment>
             </Grid.Column>
             </Grid.Row>
         </Grid>
         <Button.Group>
                 <Button onClick={() => setEditMode(true)}  basic color='blue' content='Ndrysho'/>
                 <Button onClick={() => setSelectedTrajnim(null)} basic color='grey' content='Anulo'/>
             </Button.Group>
         </Segment>
     )
 }
 
 export default TrajnimDetails;
 
 