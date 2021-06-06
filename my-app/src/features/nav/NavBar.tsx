import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Dropdown, Icon, Menu } from 'semantic-ui-react'

export const NavBar:React.FC = () => {
    return (
        <Menu size='mini' fixed='top'>
            <Menu.Item><Icon name='graduation cap'></Icon></Menu.Item>
            <Menu.Item as={NavLink} to='/profile' name='Profili'/>
            <Menu.Item as={NavLink} to='/adminProfile' name='Admin Dashboard'/>
            <Menu.Item as={NavLink} to='/student' activeClassName="active" name='Student'/>
            <Menu.Item as={NavLink} to='/lendet' activeClassName="active" name='Lëndët'/>
            <Menu.Item as={NavLink} to='/notat' activeClassName="active" name='Notat'/>
            <Menu.Item as={NavLink} to='/ParentFeatures' name='ParentDashboard'/>
            {/* veq per testim e kom lon linkun ne nav te dashboard  e heki kur
            te kryhet logjika e Login-it */}
            {/*<Menu.Item name='Orari'/>
            <Menu.Item name='Pagesat'/>*/}
            <Menu.Menu position='right'>
            <Dropdown item text='Gjuhët'>
                <Dropdown.Menu>
                <Dropdown.Item>Albanian</Dropdown.Item>
                <Dropdown.Item>English</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>
                <Button as={NavLink} to='/' primary>Dil</Button>
            </Menu.Item>
            </Menu.Menu>
      </Menu>
    )
}
