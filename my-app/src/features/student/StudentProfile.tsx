import { Container, Grid, Image, Divider, Header, Table, Icon } from 'semantic-ui-react'
import StudentNavBar from './StudentNavBar'

import Photo from '../../assets/studentphoto.jpg'
import { useStore } from '../../app/stores/store';

export default function StudentProfile () {
  const {userStore: {user}} = useStore();
  
    return (
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
        <Grid.Column width='6' >
          <StudentNavBar />
        </Grid.Column>
        <Grid.Column>
          <Grid divided='vertically' style={{marginTop:"3em"}}>

            <Grid.Row columns={2} style={{marginBottom:"1em"}}>
              <Grid.Column width='5'>
              <Image src={user?.image || Photo} circular size='medium'/>
              </Grid.Column>
              <Grid.Column style={{fontSize:"x-large"}} textAlign='center'>
                <Container>{user?.displayName}<Divider style={{width:"250px", marginLeft:"1em"}}>Studente</Divider> </Container>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={1} >
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
