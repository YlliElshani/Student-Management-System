import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Form, Menu, Segment, Tab } from 'semantic-ui-react'
import { StudentNavBar} from './StudentNavBar'

const panes = [
    { menuItem: 'Informatat Personale', render: () => <Tab.Pane>Informatat Personale</Tab.Pane> },
    { menuItem: 'Informatat Shtesë', render: () => <Tab.Pane>Kontaktet</Tab.Pane> },
]
export const StudentProfile = () => <Tab panes={panes}/>
{
           
}
