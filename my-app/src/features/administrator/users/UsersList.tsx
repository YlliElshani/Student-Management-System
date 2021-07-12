import { observer } from 'mobx-react-lite'
import { Grid, Tab } from 'semantic-ui-react'
import AdminNavBar from '../AdminNavBar'
import AdminList from './AdminList'
import GuardianList from './GuardianList'
import ProfessorList from './ProfessorList'
import StudentList from './StudentList'


export default observer(function UsersList () {

    const panes = [
        { menuItem: 'Admin', render: () => <Tab.Pane><AdminList/></Tab.Pane> },
        { menuItem: 'Guardian', render: () => <Tab.Pane><GuardianList/></Tab.Pane> },
        { menuItem: 'Student', render: () => <Tab.Pane><StudentList/></Tab.Pane> },
        { menuItem: 'Professor', render: () => <Tab.Pane><ProfessorList/></Tab.Pane> },
      ]
      
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='4'>
                    <AdminNavBar />
                </Grid.Column>
                <Grid.Column width='11' style={{marginTop:'3em', marginLeft:"2em"}}>
                   <Tab panes={panes} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})
