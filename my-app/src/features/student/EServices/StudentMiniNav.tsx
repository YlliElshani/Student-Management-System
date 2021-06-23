import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

export const StudentMiniNav = () => {
    return (
        <Segment>
        <Menu size='mini'>
            <Menu.Item as={NavLink} to='/KerkesNdihme' name='Kerko ndihme'/>
            <Menu.Item as={NavLink} to='/prezantimet' name='Kerko Prezantim'/>
            <Menu.Item as={NavLink} to='/listoTrips' name='Eskurzione'/>
            <Menu.Item as={NavLink} to='/listoGara' name='Garat'/>
            <Menu.Item as={NavLink} to='/listoNjoftimetS' name='Njoftime'/>
        </Menu>
    </Segment>
    )
}
