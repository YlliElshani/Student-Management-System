import React from 'react'
import { Grid, Button, Segment } from 'semantic-ui-react'
import { IUser } from '../../../../app/models/user';

interface IProps {
   user: IUser
   setEditMode: (editMode: boolean)=>void;
   setSelectedUser: (user: IUser | null)=>void;
}


const UserDetails:React.FC<IProps> = ({user, setEditMode, setSelectedUser}) => {
    return (
        <Segment>
         <Grid key={user.userId} columns={1} divided>
            <Grid.Row stretched>
            <Grid.Column>
                <Segment>{user.firstName}</Segment>
                <Segment>{user.lastName}</Segment>
                <Segment>{user.email}</Segment>
            </Grid.Column>
            <Grid.Column>
                <br/>
                <Segment>{user.role}</Segment>
                <Segment>{user.age}</Segment>
                <Segment>{user.gender}</Segment>
            </Grid.Column>
            <Grid.Column>
                <br/>
                <Segment>{user.phoneNumber}</Segment>
                <Segment>{user.address}</Segment>
                <Segment>{user.city}</Segment>
                <br />
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Button.Group>
                <Button onClick={() => setEditMode(true)}  basic color='blue' content='Ndrysho'/>
                <Button onClick={() => setSelectedUser(null)} basic color='grey' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
}

export default UserDetails;