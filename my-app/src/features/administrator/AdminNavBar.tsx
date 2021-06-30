import { observer } from 'mobx-react-lite'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon,  Menu, Segment, Sidebar } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store'

export default observer(function AdminNavBar() {
    const {userStore: {logout, isLoggedIn}} = useStore();
    return(
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
                {isLoggedIn ? (
                    <Menu.Item style={{marginTop:"50%"}} as={NavLink} to='/admin/profile'>
                      <Icon name='user' />
                      Profili
                  </Menu.Item>
                ) : (
                    null
                )}
            <Menu.Item as={NavLink} to='/admin/trips'>
                <Icon name='sitemap' />
                Shetitjet
            </Menu.Item>
            <Menu.Item as={NavLink} to='/admin/competitions'>
                <Icon name='trophy' />
                Garat
            </Menu.Item>
            <Menu.Item as={NavLink} to='/admin/njoftimet'>
                <Icon name='newspaper' />
                Njoftimet
            </Menu.Item>
            <Menu.Item as={NavLink} to='/admin/qytetet'>
                <Icon name='map' />
                Qytetet
            </Menu.Item>
            <Menu.Item as={NavLink} to='/admin/shtesat'>
                <Icon name='university' />
                Ceshtjet administrative
            </Menu.Item>
            <Menu.Item onClick={logout}>
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
})
