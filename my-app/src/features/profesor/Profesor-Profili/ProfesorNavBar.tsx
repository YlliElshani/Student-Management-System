
import { observer } from 'mobx-react-lite';
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon,  Menu, Segment, Sidebar } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';

export default observer(function ProfesorNavBar() {
    const {userStore: {logout, isLoggedIn}} = useStore();
    
    return (
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
                        <Menu.Item style={{marginTop:"20%"}} as={NavLink} to='/profile'>
                        <Icon name='user' />
                        Profili
                    </Menu.Item>
                    ) : (
                        null
                    )}
           
           
            <Menu.Item as={NavLink} to='/profesor/materialet'>
                <Icon name='plus' />
                Materialet
            </Menu.Item>

            <Menu.Item as={NavLink} to='/profesor/planiMesimor'>
                <Icon name='book' />
                Plani Mesimor
            </Menu.Item>

            <Menu.Item as={NavLink} to='/profesor/provimet'>
                <Icon name='file outline' />
                Provimet
            </Menu.Item>

            <Menu.Item as={NavLink} to='/profesor/ProfesorShtesat'>
                <Icon name='users' />
                Nxenesit
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
    );

})
