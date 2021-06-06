import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
    { menuItem: 'Informatat Personale', render: () => <Tab.Pane>Informatat Personale</Tab.Pane> },
    { menuItem: 'Informatat Shtesë', render: () => <Tab.Pane>Kontaktet</Tab.Pane> },
]
export const StudentProfile = () => <Tab panes={panes}/>
{
           
}
