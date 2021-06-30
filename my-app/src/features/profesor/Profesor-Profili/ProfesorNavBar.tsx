
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
                        <Menu.Item style={{marginTop:"50%"}} as={NavLink} to='profesorprofile'>
                        <Icon name='user' />
                        Profili
                    </Menu.Item>
                    ) : (
                        null
                    )}
            <Menu.Item as={NavLink} to='/profesor/e-services'>
                <Icon name='server' />
                E-Shërbimet
            </Menu.Item>
           
            <Menu.Item as={NavLink} to='/profesor/notat'>
                <Icon name='grid layout' />
                Notat
            </Menu.Item>
            <Menu.Item as={NavLink} to='/profesor/lendet'>
                <Icon name='book' />
                Lendet
            </Menu.Item>
            <Menu.Item as={NavLink} to='/trajnimet'>
                <Icon name='backward' />
                Trajnimet
            </Menu.Item>
            <Menu.Item as={NavLink} to='/Detyrat'>
                <Icon name='upload' />
                Detyrat
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
