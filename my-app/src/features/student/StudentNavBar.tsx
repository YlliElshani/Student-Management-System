import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom'
import { Icon,  Menu, Segment, Sidebar } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store';

export default observer(function StudentNavBar() {
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
                    <Menu.Item style={{marginTop:"10%"}} as={NavLink} to='/student/profile'>
                        <Icon name='user' />
                        Profili
                    </Menu.Item>
                    ) : (
                        null
            )}

            <Menu.Item as={NavLink} to='/student/vleresimi'>
                <Icon name='chart bar' />
                Transkripta
            </Menu.Item>

            <Menu.Item as={NavLink} to='/student/lendet'>
                <Icon name='book' />
                Lëndët
            </Menu.Item>

            <Menu.Item as={NavLink} to='/student/provimet'>
                <Icon name='file outline' />
                Provimet
            </Menu.Item>
            <Menu.Item as={NavLink} to='/student/detyrat'>
                <Icon name='chart bar' />
                Detyrat
            </Menu.Item>

            <Menu.Item as={NavLink} to='/student/orariStud'>
                <Icon name='list' />
                Orari
            </Menu.Item>

            <Menu.Item as={NavLink} to='/student/e-services'>
                <Icon name='server' />
                Shërbimet tjera
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