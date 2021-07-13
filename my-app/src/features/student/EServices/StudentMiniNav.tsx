import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'
import { Icon,  Menu, Segment, Sidebar } from 'semantic-ui-react'

const StudentMiniNav = () => (
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
        <Menu.Item style={{marginTop:"10%"}} as={NavLink} to='/student/e-services'>
            <Icon name='server' />
            E-Shërbimet
        </Menu.Item>
        <Menu.Item as={NavLink} to='/student/vleresimi'>
                <Icon name='grid layout' />
                Transkripta
            </Menu.Item>
        <Menu.Item as={NavLink} to='/student/KerkesNdihme'>
            <Icon name='question circle' />
            Kërko Ndihmë
        </Menu.Item>
        <Menu.Item as={NavLink} to='/student/prezantimet'>
            <Icon name='calendar outline' />
            Kërko Prezantim
        </Menu.Item>
        <Menu.Item as={NavLink} to='/student/listoTrips'>
            <Icon name='compass outline' />
            Eskurzionet
        </Menu.Item>
        <Menu.Item as={NavLink} to='/student/listoGara'>
            <Icon name='sitemap' />
            Garat
        </Menu.Item>
        <Menu.Item as={NavLink} to='/student/listoNjoftimetS'>
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
export default observer (StudentMiniNav);