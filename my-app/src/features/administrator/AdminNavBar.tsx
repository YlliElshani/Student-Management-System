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
            <Menu.Item as={NavLink} to='/njoftimet' name='Njoftimet'/>
            <Menu.Item as={NavLink} to='/competitions' name='Garat'/>
        </Menu>
        </Segment>
    )
}
