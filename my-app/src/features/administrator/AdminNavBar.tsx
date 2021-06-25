import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const AdminNavBar = () => (
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
        <Menu.Item style={{marginTop:"50%"}} as={NavLink} to='/admin/profile'>
            <Icon name='user' />
            Profili
        </Menu.Item>
        <Menu.Item as={NavLink} to='/admin/trips'>
            <Icon name='sitemap' />
            Shetitjet
        </Menu.Item>
        <Menu.Item as={NavLink} to='/admin/competitions'>
            <Icon name='trophy' />
            Garat
        </Menu.Item>
        <Menu.Item as={NavLink} to='/njoftimet'>
            <Icon name='newspaper' />
            Njoftimet
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

export default AdminNavBar