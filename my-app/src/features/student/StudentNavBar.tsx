import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon,  Menu, Segment, Sidebar } from 'semantic-ui-react'

const StudentNavBar = () => (
    <Sidebar.Pushable className="sideBarA">
        <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        vertical
        visible
        width='wide'
        direction='left'
        >
        <Menu.Item style={{marginTop:"50%"}} as={NavLink} to='/student/profile'>
            <Icon name='user' />
            Profili
        </Menu.Item>
        <Menu.Item as={NavLink} to='/student/e-services'>
            <Icon name='server' />
            E-Shërbimet
        </Menu.Item>
        <Menu.Item as={NavLink} to='/student/lendet'>
            <Icon name='book' />
            Lëndët
        </Menu.Item>
        <Menu.Item as={NavLink} to='/student/notat'>
            <Icon name='grid layout' />
            Notat
        </Menu.Item>
        <Menu.Item as={NavLink} to='/'>
            <Icon name='log out'/>
            Dil
        </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
        <Segment basic style={{height:"100vh"}}>
        </Segment>
        </Sidebar.Pusher>
    </Sidebar.Pushable>
)

export default StudentNavBar