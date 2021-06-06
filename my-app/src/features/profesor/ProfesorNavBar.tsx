import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

export const ProfesorNavBar = () => {
    return (
        <Segment>
        <Menu size='mini'>
            <Menu.Item as={NavLink} to='/ProfesorProfile' name='Profili'/>
            <Menu.Item as={NavLink} to='/detyrat' activeClassName="active" name='Detyrat'/>
            <Menu.Item as={NavLink} to='/trajnimet' name='Trajnimet'/>
            <Menu.Item as={NavLink} to='/lendet' name='Lendet'/>
            <Menu.Item as={NavLink} to='/notat' name='Notat'/>
        </Menu>
        </Segment>
    )
}
