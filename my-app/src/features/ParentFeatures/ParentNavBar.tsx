import { observer } from 'mobx-react-lite';
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon,  Menu, Segment, Sidebar } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store';

export default observer(function ParentNavBar() {
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
                        <Menu.Item style={{marginTop:"50%"}} as={NavLink} to='/parentProfile'>
                        <Icon name='user' />
                        Profili
                    </Menu.Item>
                    ) : (
                        null
                    )}
            <Menu.Item as={NavLink} to='/mungesat'>
                <Icon name='info circle' />
                Arsyeto Mungese
            </Menu.Item>
            <Menu.Item as={NavLink} to='/usersP/listoTrips2'>
                <Icon name='sun'/>
                Eskurzione
            </Menu.Item>
            <Menu.Item as={NavLink} to='/listApp'>
                <Icon name='info' />
                Njoftime
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