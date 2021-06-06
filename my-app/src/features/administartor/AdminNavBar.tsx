import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

export const AdminNavBar = () => {
    return (
        <Segment>
        <Menu size='mini'>
            <Menu.Item as={NavLink} to='/adminProfile' name='Profili'/>
            <Menu.Item as={NavLink} to='/users' activeClassName="active" name='Lista e Përdoruesve'/>
            <Menu.Item as={NavLink} to='/trips' name='Shëtitjet'/>
        </Menu>
        </Segment>
    )
}
