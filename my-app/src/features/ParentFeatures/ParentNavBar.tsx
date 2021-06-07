import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

export const ParentNavBar = () => {
    return (
    <Segment>
        <Menu size='mini'>
            <Menu.Item as={NavLink} to='/usersP' name='Arsyetimi i Mungesave'/>
            <Menu.Item as={NavLink} to='/NjoftimeList' name='Njoftime'/>
        </Menu>
    </Segment>
    )
}