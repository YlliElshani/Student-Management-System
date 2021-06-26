import React from 'react'
import { Container, Grid, Image, Divider, Header, Table, Icon } from 'semantic-ui-react'

import Photo from '../../assets/admin.jpg'
import AdminNavBar from './AdminNavBar'

export const AdminProfile = () => {
    return (
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
        <Grid.Column width='6' >
          <AdminNavBar />
        </Grid.Column>
        <Grid.Column>
          <Grid divided='vertically' style={{marginTop:"3em"}}>

            <Grid.Row columns={2} style={{marginBottom:"3em"}}>
              <Grid.Column width='5'>
              <Image src={Photo} circular size='medium'/>
              </Grid.Column>
              <Grid.Column style={{marginTop:"4em", fontSize:"x-large"}} textAlign='center'>
                <Container>Lavdim Menxhiqi <Divider style={{width:"250px", marginLeft:"4em"}}>Profesor</Divider> </Container>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={1} style={{marginTop:"20px"}}>
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
                      <Table.Cell>lavdim.menxhiqi@gmail.com</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Header.Content>
                            Numri Tel.
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>044 - 345 - 987</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Header.Content>
                            Qyteti
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>Prishtine</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Header.Content>
                            Rruga
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>Rruga B</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
            </Grid.Row>

            <Grid.Row columns={1} style={{marginTop:"20px"}}>
              <Table  celled  >
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell><Icon style={{marginRight:"2em"}} name='newspaper'/>Shkollimi</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Header.Content>
                            Shkolla Fillore
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>Emri i shkolles</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Header.Content>
                            Shkolla e mesme 
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>Emri i shkolles</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Header.Content>
                            Shkolla e nivelit te larte
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>Emri i shkolles</Table.Cell>
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
