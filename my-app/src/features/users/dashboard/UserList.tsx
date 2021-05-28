import React from 'react'
import { Button, Item, Segment} from 'semantic-ui-react'
import { IUser } from '../../../app/models/user'

interface IProps {
    users: IUser[];
    selectUser: (id: string) => void;
    openCreateForm: () => void;
    deleteUser: (id: string) => void;
}

export const UserList:React.FC<IProps>= ({users,selectUser, openCreateForm, deleteUser})=> {
    return (
        <Segment clearing>
            <Button onClick={openCreateForm} content='Shto Përdorues'/>
            <Item.Group divided>
                {users.map(user => (
                <Item key={user.id}>
                    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <Item.Content inverted="true">
                    <Item.Header >{user.firstName} {user.lastName}</Item.Header>
                    <Item.Meta>{user.role}</Item.Meta>
                    <Item.Extra>
                        <Button size='mini' floated='right' content='Shiko Detajet' onClick={() => selectUser(user.id)}/>
                        <Button size='mini' floated='right' content='Fshij Perdoruesin' onClick={() => deleteUser(user.id)}/>
                    </Item.Extra>
                    </Item.Content>
                </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}
