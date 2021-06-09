import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

export const ParentNavBar = () => {
    return (
    <Segment>
        <Menu size='mini'>
            <Menu.Item as={NavLink} to='/parentProfile' name='Profili'/>
            <Menu.Item as={NavLink} to='/ParentFeatures' name='Arsyetimi i Mungesave'/>
            <Menu.Item as={NavLink} to='/listApp' name='Njoftime'/>
        </Menu>
    </Segment>
    )
}