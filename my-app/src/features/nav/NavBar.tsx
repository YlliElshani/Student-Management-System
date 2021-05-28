import React from 'react'
import { Button, Dropdown, Icon, Menu } from 'semantic-ui-react'

export const NavBar:React.FC = () => {
    return (
        <Menu size='mini' fixed='top'>
            <Menu.Item><Icon name='graduation cap'></Icon></Menu.Item>
            <Menu.Item name='Profili'/>
            <Menu.Item name='Lëndët'/>
            <Menu.Item name='Transkripta'/>
            <Menu.Item name='Orari'/>
            <Menu.Item name='Pagesat'/>
            <Menu.Menu position='right'>
            <Dropdown item text='Gjuhët'>
                <Dropdown.Menu>
                <Dropdown.Item>Albanian</Dropdown.Item>
                <Dropdown.Item>English</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>
                <Button primary>Dil</Button>
            </Menu.Item>
            </Menu.Menu>
      </Menu>
    )
}
