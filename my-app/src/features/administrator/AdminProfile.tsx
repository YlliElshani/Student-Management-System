import { Container, Grid, Image, Divider, Header, Table, Icon } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store'
import AdminNavBar from './AdminNavBar'
import Photo from '../../assets/user.png';
import { observer } from 'mobx-react-lite';

export default observer( function AdminProfile () {
  const {userStore: {user}} = useStore();

    return (
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
        <Grid.Column width='6' >
          <AdminNavBar />
        </Grid.Column>
        <Grid.Column>
          <Grid divided='vertically' style={{marginTop:"3em"}}>

            <Grid.Row columns={2}>
              <Grid.Column width='5'>
              <Image src={user?.image || Photo} avatar circular size='medium'/>
              </Grid.Column>
              <Grid.Column style={{marginTop:"4em", fontSize:"x-large"}} textAlign='center'>
                <Container>{user?.displayName}<Divider style={{width:"250px", marginLeft:"1em"}}>Administrator</Divider> </Container>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={1} style={{marginTop:"10px"}}>
              <Table celled  >
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell><Icon style={{marginRight:"2em"}} name='newspaper'/>Informata Personale</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Header.Content>
                            Email
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{user?.email}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Header.Content>
                            Numri Tel.
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{user?.phoneNumber}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Header.Content>
                            Qyteti
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{user?.city}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Header.Content>
                            Rruga
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{user?.address}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Header.Content>
                            Zip Kodi
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{user?.zipCode}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        </Grid.Row>
    </Grid>
        )
}
)