import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

export const AdminNavBar = () => {
    return (
        <Segment>
        <Menu size='mini'>
            <Menu.Item as={NavLink} to='/admin/profile' name='Profili'/>
            <Menu.Item as={NavLink} to='/admin/trips' name='Shëtitjet'/>
            <Menu.Item as={NavLink} to='/admin/competitions' name='Garat'/>
            <Menu.Item as={NavLink} to='/njoftimet' name='Njoftimet'/>
        </Menu>
        </Segment>
    )
}
